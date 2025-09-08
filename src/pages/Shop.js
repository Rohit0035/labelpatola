import React, { useEffect, useState, useCallback } from 'react'; // Import useCallback
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useDispatch } from 'react-redux';
import { fetchFilters, fetchProducts } from '../api/productAPI';
import ProductCard from '../components/productCard';
import ShopProductCard from '../components/ShopProductCard';
import ProductFilters from '../components/productFilter';
import { showToast } from '../components/ToastifyNotification';
import { Link, useSearchParams } from 'react-router-dom';
import { hideLoader, showLoader } from '../actions/loaderActions';

const Shop = () => {
    const [searchParams] = useSearchParams();
    const key = searchParams.get('key');
    const category = searchParams.get('category');

    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 10; // Define items per page here

    // State for all filters and sorting combined
    const [currentFilters, setCurrentFilters] = useState({
        categories: [],
        sizes: [],
        colors: [],
        availability: [],
        priceRange: { min: 0, max: 10000 }, // Default price range
        sortBy: '', // Default sorting (e.g., 'price_asc', 'price_desc', 'new_arrivals', 'popularity')
        key: '',
        category: '',
    });

    useEffect(() => {
        setCurrentFilters(prevFilters => ({ ...prevFilters, key: key, category: category }));
    }, [key, category])

    const [active, setActive] = useState(false); // For sidebar control
    const sidebarController = () => setActive(!active);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch(); // If you're using Redux for other things

    // Extracted product fetching logic into a memoized callback
    const getProducts = useCallback(async () => {
        try {
            setLoading(true);
            dispatch(showLoader());
            const data = await fetchProducts(
                currentFilters, // Pass the currentFilters object
                currentPage,    // Pass the current page
                itemsPerPage    // Pass the items per page
            );

            if (data.success) {
                setProducts(data.data.products.data);
                setTotalPages(data.data.products.last_page);
                setCurrentPage(data.data.products.current_page); // Ensure current_page matches if API changes it
            } else {
                showToast('error', data.message || 'Failed to fetch products.');
            }
        } catch (error) {
            console.error("Error fetching products:", error);
            showToast('error', error.message || 'An unexpected error occurred during product fetch.');
        } finally {
            dispatch(hideLoader());
            setLoading(false);
        }
    }, [currentFilters, currentPage, itemsPerPage]); // Dependencies for useCallback

    // This useEffect will now trigger getProducts whenever currentFilters or currentPage changes
    useEffect(() => {
        getProducts();
    }, [getProducts]); // Depend on the memoized getProducts function

    // This function will be called by ProductFilters whenever filters change
    const handleFiltersApplied = (filtersToApply) => {
        // When filters are applied, update currentFilters and reset to page 1
        setCurrentFilters(prevFilters => ({
            ...prevFilters,
            ...filtersToApply, // Merge new filters (categories, sizes, colors, priceRange, availability)
            // Keep sortBy if it was already set, otherwise it will be blank which is fine
        }));
        setCurrentPage(1); // Crucial: Reset to page 1 when new filters are applied
    };

    // Handler for sorting changes (from dropdown)
    const handleSortChange = (sortByValue) => {
        // When sorting changes, update currentFilters' sortBy and reset to page 1
        setCurrentFilters(prevFilters => ({
            ...prevFilters,
            sortBy: sortByValue,
        }));
        setCurrentPage(1); // Crucial: Reset to page 1 when sorting changes
    };

    // Determine the displayed sort option text
    const getSortOptionText = () => {
        switch (currentFilters.sortBy) {
            case 'price_asc': return 'Price: Low to High';
            case 'price_desc': return 'Price: High to Low';
            case 'new_arrivals': return 'New Arrivals';
            case 'popularity': return 'Popularity';
            default: return 'Best Selling'; // Default text for dropdown
        }
    };

    useEffect(() => {
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = '0px';
        return () => {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '0px';
        };
    }, []);

    return (
        <div>
            <Header />
            {/*start breadcrumb*/}
            <section className="py-4 section-breadcrumb st-mb-bred">
                <div className="container px-3">
                    <h2 className="d-none">Shop</h2>
                    <nav>
                        <ol className="breadcrumb mb-0 gap-2">
                            <li className="breadcrumb-item">
                                <a href="javascript:;" className="breadcrumb-link">
                                    Home
                                </a>
                            </li>
                            <li>
                                <i className="bi bi-chevron-right" />
                            </li>
                            <li className="breadcrumb-item">
                                <a href="javascript:;" className="breadcrumb-link">
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
            {/*end breadcrumb*/}
            {/*start shop*/}
            <section className="pb-5 pt-0  shop-page-section">
                <div className="container px-3">
                    <div className="row g-lg-4">

                        {/* Pass handleFiltersApplied to your ProductFilters component */}
                        <ProductFilters onFilterChange={handleFiltersApplied} />

                        <div className="col-12 col-lg-9">
                            <div className="shop-products">
                                <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 gap-sm-0 mb-4">
                                    <div>
                                        <p className="mb-0">
                                            Found <span className="fw-semibold">{products.length}</span> items
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
                                                {getSortOptionText()} {/* Display current sort text */}
                                                <span>
                                                    <i className="bi bi-chevron-down" />
                                                </span>
                                            </a>
                                            <ul className="dropdown-menu p-2 w-220">
                                                {/* Sort Options */}
                                                <li>
                                                    <a
                                                        className={`dropdown-item rounded ${currentFilters.sortBy === '' ? 'active' : ''}`}
                                                        href="javascript:;"
                                                        onClick={() => handleSortChange('')}
                                                    >
                                                        Best Selling
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className={`dropdown-item rounded ${currentFilters.sortBy === 'price_asc' ? 'active' : ''}`}
                                                        href="javascript:;"
                                                        onClick={() => handleSortChange('price_asc')}
                                                    >
                                                        Price: Low to High
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className={`dropdown-item rounded ${currentFilters.sortBy === 'price_desc' ? 'active' : ''}`}
                                                        href="javascript:;"
                                                        onClick={() => handleSortChange('price_desc')}
                                                    >
                                                        Price: High to Low
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className={`dropdown-item rounded ${currentFilters.sortBy === 'new_arrivals' ? 'active' : ''}`}
                                                        href="javascript:;"
                                                        onClick={() => handleSortChange('new_arrivals')}
                                                    >
                                                        New Arrivals
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className={`dropdown-item rounded ${currentFilters.sortBy === 'popularity' ? 'active' : ''}`}
                                                        href="javascript:;"
                                                        onClick={() => handleSortChange('popularity')}
                                                    >
                                                        Popularity
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4">
                                    {loading ? (
                                        <p>Loading products...</p>
                                    ) : products && products.length > 0 ? (
                                        products.map((product) => ( // Use product.id for key if available, or a truly unique identifier
                                            <div className="col" key={product.id || product.uniqueId}>
                                                {/* <ProductCard product={product} /> */}
                                                <ShopProductCard product={product} />

                                            </div>
                                        ))
                                    ) : (
                                        <p>No products found</p>
                                    )}
                                </div>
                                {/*end row*/}
                                {/*pagination*/}
                                <div className="page-pagination">
                                    <nav className="mt-4">
                                        <ul className="pagination justify-content-center">
                                            {/* Previous Page Button */}
                                            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                                <a
                                                    className="page-link"
                                                    href="javascript:void(0);"
                                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                                >
                                                    <i className="bi bi-chevron-double-left" />
                                                </a>
                                            </li>

                                            {/* Page Number Buttons */}
                                            {/* Ensure totalPages is a number and greater than 0 */}
                                            {Array.from({ length: totalPages }).map((_, index) => (
                                                <li
                                                    key={index}
                                                    className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                                                >
                                                    <a
                                                        className="page-link"
                                                        href="javascript:void(0);"
                                                        onClick={() => setCurrentPage(index + 1)}
                                                    >
                                                        {index + 1}
                                                    </a>
                                                </li>
                                            ))}

                                            {/* Next Page Button */}
                                            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                                <a
                                                    className="page-link"
                                                    href="javascript:void(0);"
                                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                                >
                                                    <i className="bi bi-chevron-double-right" />
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                {/*end pagination*/}
                            </div>
                        </div>
                    </div>
                    {/*end row*/}
                </div>
                {/* filter box for */}
                <div className='d-block d-sm-none' >
                    {/* Sticky Bottom Bar */}
                    <div style={{ zIndex: '1010' }} className="position-fixed bottom-0 start-0 end-0 bg-white border-top shadow-sm d-flex align-items-stretch justify-content-around p-2">
                        <button data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasFilter" className="btn border-end w-50 mx-2 fs-6 fw-bold text-primary">
                            <i className="bi bi-funnel" />  FILTER
                        </button>
                        <button
                            className="btn border-right w-50 mx-2 fs-6 fw-bold text-primary "
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#sortOffcanvas"
                            aria-controls="sortOffcanvas"
                        >
                            <i className="bi bi-funnel" /> SORT BY
                        </button>
                    </div>
                    {/* Offcanvas Popover (Bottom Drawer) */}
                    <div
                        className="offcanvas offcanvas-bottom"
                        tabIndex="-1"
                        id="sortOffcanvas"
                        aria-labelledby="sortOffcanvasLabel"
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-primary" id="sortOffcanvasLabel">
                                Sort Options
                            </h5>
                            <button
                                type="button"
                                className="btn-close text-reset"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="offcanvas-body small">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <a href="/shop" className='fs-5 text-dark'>
                                        Price: Low to High
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="/shop" className='fs-5 text-dark'>
                                        Price: High to Low
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="/shop" className='fs-5 text-dark'>
                                        Newest First
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="/shop" className='fs-5 text-dark'>
                                        Popularity
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/*end shop*/}
            {/*end main content*/}
            <Footer />
        </div>
    );
};

export default Shop;