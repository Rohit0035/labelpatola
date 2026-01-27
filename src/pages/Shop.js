import React, { useEffect, useState, useCallback, useRef } from "react"; // Added useRef
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { fetchFilters, fetchProducts } from "../api/productAPI";
import ProductCard from "../components/productCard";
import ShopProductCard from "../components/ShopProductCard";
import ProductFilters from "../components/productFilter";
import { showToast } from "../components/ToastifyNotification";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams
} from "react-router-dom";
import { hideLoader, showLoader } from "../actions/loaderActions";

const Shop = () => {
  const location = useLocation();
  const [filtersReady, setFiltersReady] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const fabricType = searchParams.get("fabricType");
  const dressStyle = searchParams.get("dressStyle");
  const price = searchParams.get("price");
  const sale = searchParams.get("sale");
  const newArrivals = searchParams.get("newArrivals");
  const bestSeller = searchParams.get("bestSeller");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 30;

  // Use a ref to prevent multiple simultaneous fetches during scroll
  const isFetching = useRef(false);

  const [currentFilters, setCurrentFilters] = useState({
    categories: [],
    sizes: [],
    colors: [],
    availability: [],
    priceRange: { min: 0, max: 10000 },
    sortBy: "price_asc",
    key: "",
    category: "",
    dressStyle: "",
    fabricType: ""
  });

  useEffect(
    () => {
      const updatedFilters = {
        ...currentFilters,
        priceRange: currentFilters.priceRange,
        sortBy: currentFilters.sortBy,
        key: searchParams.get("key") || "",
        category: searchParams.get("category") || "",
        dressStyle: searchParams.get("dressStyle") || "",
        fabricType: searchParams.get("fabricType") || "",
        sale: searchParams.get("sale") === "true",
        newArrivals: searchParams.get("newArrivals") === "true",
        bestSeller: searchParams.get("bestSeller") === "true",
        price: searchParams.get("price") || ""
      };

      setProducts([]); // clear previous results
      setCurrentPage(1); // reset pagination
      setCurrentFilters(updatedFilters);
      setFiltersReady(true);
    },
    [searchParams]
  );

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false); // Default to false for better infinite scroll control
  const dispatch = useDispatch();

  // MODIFIED: getProducts now appends data if page > 1
  const getProducts = async pageNumber => {
    if (isFetching.current) return;

    try {
      isFetching.current = true;
      setLoading(true);
      if (pageNumber === 1) dispatch(showLoader());

      const data = await fetchProducts(
        currentFilters,
        pageNumber,
        itemsPerPage
      );

      if (data.success) {
        const newProducts = data.data.products.data;
        console.log("newProducts", newProducts);
        // APPEND if page > 1, REPLACE if page 1
        setProducts(
          prev => (pageNumber === 1 ? newProducts : [...prev, ...newProducts])
        );
        setTotalPages(data.data.products.last_page);
        setTotalItems(data.data.products.total || 0);
      }
    } finally {
      dispatch(hideLoader());
      setLoading(false);
      isFetching.current = false;
    }
  };

  // Trigger on Filter/Page change
  useEffect(
    () => {
      if (!filtersReady) return;
      getProducts(currentPage);
    },
    [filtersReady, currentFilters, currentPage]
  );

  // NEW: Hybrid Scroll Listener (Desktop & Mobile)
  useEffect(
    () => {
      const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const currentScroll = window.innerHeight + window.scrollY;

        // Trigger load when user is 300px from bottom
        if (currentScroll >= scrollHeight - 300) {
          if (!loading && currentPage < totalPages && !isFetching.current) {
            setCurrentPage(prev => prev + 1);
          }
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    },
    [loading, currentPage, totalPages]
  );

  const handleFiltersApplied = filtersToApply => {
    setProducts([]); // Clear current list for new search
    setCurrentFilters(prevFilters => ({
      ...prevFilters,
      ...filtersToApply
    }));
    setCurrentPage(1);
  };

  const handleSortChange = sortByValue => {
    setProducts([]); // Clear current list for new sort
    setCurrentFilters(prevFilters => ({
      ...prevFilters,
      sortBy: sortByValue
    }));
    setCurrentPage(1);
  };

  const getSortOptionText = () => {
    switch (currentFilters.sortBy) {
      case "best_selling":
        return "Best Selling";
      case "price_asc":
        return "Price: Low to High";
      case "price_desc":
        return "Price: High to Low";
      case "popularity":
        return "Popularity";
      default:
        return "Price: Low to High";
    }
  };

  useEffect(() => {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
  }, []);

  const getActiveFilterLabel = () => {
    if (category) return category.toUpperCase();
    if (fabricType) return fabricType.toUpperCase();
    if (dressStyle) return dressStyle.toUpperCase();
    if (price) return price.replace("-", " ").toUpperCase();
    if (sale === "true") return "SALE";
    if (newArrivals === "true") return "NEW ARRIVALS";
    if (bestSeller === "true") return "BEST SELLER";
    return "ALL PRODUCTS";
  };

  return (
    <div>
      <Header />
      <section className="py-4 section-breadcrumb st-mb-bred">
        <div className="container px-3">
          <nav>
            <ol className="breadcrumb mb-0 gap-2">
              <li className="breadcrumb-item">
                <a href="/" className="breadcrumb-link">
                  Home
                </a>
              </li>
              <li>
                <i className="bi bi-chevron-right" />
              </li>
              <li className="breadcrumb-item">
                <a href="/shop" className="breadcrumb-link">
                  Shop
                </a>
              </li>
              <li>
                <i className="bi bi-chevron-right" />
              </li>
              <li className="breadcrumb-item breadcrumb-active">Shop</li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="py-3 bg-light mb-3">
        <div className="container px-3">
          <div className="text-center">
            <h5 className="mb-0 fw-semibold text-uppercase">
              {getActiveFilterLabel()}
            </h5>
          </div>
        </div>
      </section>

      <section className="pb-5 pt-0 shop-page-section">
        <div className="container px-3">
          <div className="row g-lg-4">
            <ProductFilters onFilterChange={handleFiltersApplied} />

            <div className="col-12 col-lg-9">
              <div className="shop-products">
                <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 gap-sm-0 mb-4">
                  <div>
                    <p className="mb-0">
                      Found <span className="fw-semibold">
                        {totalItems}
                      </span>{" "}
                      items
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-2 d-none d-sm-block">
                    <p className="mb-0 fw-semibold">Sort by:</p>
                    <div className="dropdown">
                      <a
                        className="btn btn-outline-dark border dropdown-toggle dropdown-toggle-nocaret d-flex align-items-center justify-content-between px-3 w-220"
                        href="javascript:;"
                        data-bs-toggle="dropdown"
                      >
                        {getSortOptionText()}
                        <span>
                          <i className="bi bi-chevron-down" />
                        </span>
                      </a>
                      <ul className="dropdown-menu p-2 w-220">
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:;"
                            onClick={() => handleSortChange("best_selling")}
                          >
                            Best Selling
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:;"
                            onClick={() => handleSortChange("price_asc")}
                          >
                            Price: Low to High
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:;"
                            onClick={() => handleSortChange("price_desc")}
                          >
                            Price: High to Low
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:;"
                            onClick={() => handleSortChange("popularity")}
                          >
                            Popularity
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4">
                  {products.map(product =>
                    <div className="col" key={product.id || product.uniqueId}>
                      <ShopProductCard product={product} />
                    </div>
                  )}
                </div>

                {/* LOAD MORE SECTION */}
                <div className="text-center mt-5 mb-3">
                  {loading
                    ? <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    : currentPage < totalPages
                      ? <button
                          className="btn btn-primary px-5 py-2 shadow-sm"
                          onClick={() => setCurrentPage(prev => prev + 1)}
                        >
                          LOAD MORE PRODUCTS
                        </button>
                      : products.length > 0
                        ? <p className="text-muted small">
                            You've reached the end of the collection
                          </p>
                        : <p>No products found</p>}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar & Bottom Drawers remain unchanged */}
        <div className="d-block d-sm-none">
          <div
            style={{ zIndex: "1050" }}
            className="position-fixed bottom-0 start-0 end-0 bg-white border-top shadow-sm d-flex align-items-stretch justify-content-around p-2"
          >
            <button
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasFilter"
              className="btn border-end w-50 mx-2 fs-6 fw-bold text-primary"
            >
              <i className="bi bi-funnel" /> FILTER
            </button>
            <button
              className="btn border-right w-50 mx-2 fs-6 fw-bold text-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#sortOffcanvas"
            >
              <i className="bi bi-funnel" /> SORT BY
            </button>
          </div>

          <div
            className="offcanvas offcanvas-bottom"
            tabIndex="-1"
            id="sortOffcanvas"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title text-primary">Sort Options</h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="list-group">
                <li className="list-group-item">
                  <a
                    href="javascript:;"
                    data-bs-dismiss="offcanvas"
                    className={`fs-5 ${currentFilters.sortBy === "best_selling"
                      ? "text-primary fw-bold"
                      : "text-dark"}`}
                    onClick={() => handleSortChange("best_selling")}
                  >
                    Best Selling
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    href="javascript:;"
                    data-bs-dismiss="offcanvas"
                    className={`fs-5 ${currentFilters.sortBy === "price_asc"
                      ? "text-primary fw-bold"
                      : "text-dark"}`}
                    onClick={() => handleSortChange("price_asc")}
                  >
                    Price: Low to High
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    href="javascript:;"
                    data-bs-dismiss="offcanvas"
                    className={`fs-5 ${currentFilters.sortBy === "price_desc"
                      ? "text-primary fw-bold"
                      : "text-dark"}`}
                    onClick={() => handleSortChange("price_desc")}
                  >
                    Price: High to Low
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    href="javascript:;"
                    data-bs-dismiss="offcanvas"
                    className={`fs-5 ${currentFilters.sortBy === "popularity"
                      ? "text-primary fw-bold"
                      : "text-dark"}`}
                    onClick={() => handleSortChange("popularity")}
                  >
                    Popularity
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Shop;
