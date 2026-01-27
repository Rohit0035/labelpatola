import React, { useEffect, useState } from 'react';
import Sale from '../assets/images/common/sale.png'
import Logo from '../assets/images/common/logo.png'
import pro1 from '../assets/images/common/pro-1.jpeg'
import provideo from '../assets/images/common/g-v.mp4'
import { Link, useNavigate } from 'react-router-dom';
import { toggleCartSidebar } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchHeaderData, fetchWebsiteCommonSettings } from '../api/homeAPI';
import { IMAGE_URL } from '../utils/api-config';
import SearchModal from './SearchModal';

const Header = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);


  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.cart?.isSidebarOpen);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [dressStyles, setDressStyles] = useState([]);
  const [fabricTypes, setFabricTypes] = useState([]);
  const [products, setProducts] = useState([]);
  const [websiteCommonSettings, setWebsiteCommonSettings] = useState([]);
  const [selectedCategoryProducts, setSelectedCategoryProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const getHeaderData = async () => {
    try {
      const data = await fetchHeaderData();
      if (data.success) {
        setCategories(data.data.categories);
        setDressStyles(data.data.dressStyles);
        setFabricTypes(data.data.fabricTypes);
        setSelectedCategory(data.data.categories?.[0]?.id);
        setWebsiteCommonSettings(data.data.websiteCommonSettings);

        console.log(data)
        setProducts(data.data.products);
      }
    } catch (error) {
      console.error("Error fetching HeaderData:", error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    getHeaderData();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filteredProducts = products.filter((product) => product.category_id === selectedCategory);
      setSelectedCategoryProducts(filteredProducts);
    }
  }, [selectedCategory]);

  // cart system
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated) || false; // ✅ Ensure cart is always an array
  // cart system
  const wishlist = useSelector((state) => state.wishlist) || {}; // ✅ Ensure cart is always an array
  // cart system
  const cart = useSelector((state) => state.cart?.cart) || {}; // ✅ Ensure cart is always an array

  // Calculate total quantity of items
  const totalQuantity = cart.items?.length > 0
    ? cart.items?.reduce((total, item) => total + parseInt(item.quantity), 0)
    : 0; // ✅ If cart is empty, totalQuantity = 0

  // Calculate total price
  const totalAmount = cart.items?.length > 0
    ? cart.items?.reduce((total, item) => total + item.quantity * (item.product_variation?.sale_price || 0), 0)
    : 0; // ✅ If cart is empty, totalAmount = 0

  return (
    <>
      {/* Top Marquee */}
      <header className="top-header py-2">
        <div className="top-strip d-flex align-items-center gap-4 container px-3 ">
          <marquee behavior="scroll" direction="left" scrollAmount={5} className="text-white fw-bold">
            {websiteCommonSettings?.marque?.split(',').map((item, index) => (
              <span key={index} className="me-5">{item}</span>
            ))}
            {/* <span className="me-5"><i className="bi bi-bag-check" /> COD Available</span>
            <span className="me-5"><i className="bi bi-award" /> Legacy Since 1950</span>
            <span className="me-5"><i className="bi bi-heart" /> 526K IG Community</span>
            <span className="me-5"><i className="bi bi-gem" /> Choice of Fabrics</span> */}
          </marquee>
        </div>
      </header>

      {/* Navbar with Offcanvas */}
      <nav className="navbar navbar-expand-xl border-bottom py-0 sticky-top bg-white">
        <div className="container px-3">
          <a className="navbar-brand d-xl-flex" href="/">
            <img src={Logo} className="logo-img" alt="Logo" width="100px" />
          </a>

          <button
            type="button"
            className="btn d-xl-none"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
          >
            <i className="bi bi-list fs-3" />
          </button>

          {/* Mobile Offcanvas Menu */}
          <div className="offcanvas offcanvas-start " tabIndex="-1" id="offcanvasNavbar">
            <div className="offcanvas-header">
              <img src="/assets/images/common/logo.png" className="logo-img2" alt="" width="150" />
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>
            <div className="offcanvas-body p-0">
              <ul className="navbar-nav mx-auto gap-0 gap-xl-2">
                <li className="nav-item">
                  <a className="nav-link nav-link-mb" href="/shop?price=under-1099"><span className="parent-menu-name">Under 1099</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link-mb" href="/shop?price=above-1099"><span className="parent-menu-name">Above 1099</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link-mb" href="/shop?sale=true">
                    {/* Choose one of the classes for the desired animation */}
                    <span className="parent-menu-name flash-sale">
                      SALE
                      {/* <img src={Sale} alt="" width="80px" /> */}
                    </span>
                    {/* Or for bouncing: */}
                    {/* <span className="parent-menu-name bounce-sale">Sale</span> */}
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link nav-link-mb dropdown-toggle dropdown-toggle-nocaret"
                    href="#!"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    <span className="parent-menu-name">Search By Category</span>
                    <span className="parent-menu-icon ms-2">
                      <i className="bi bi-chevron-down" />
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    {
                      categories.map((item) => {
                        return (<li key={item.id}>
                          <a
                            className="dropdown-item"
                            href={`/shop?category=${item.name}`}
                          >
                            {item.name}
                          </a>
                        </li>)
                      })
                    }
                  </ul>
                </li>

                <li className="nav-item  position-static">
                  <a
                    className="nav-link nav-link-mb"
                    href="/shop?newArrivals=true"
                  >
                    <span className="parent-menu-name">New Arrival</span>
                  </a>
                </li>
                <li className="nav-item  position-static">
                  <a
                    className="nav-link nav-link-mb"
                    href="/shop?bestSeller=true"
                  >
                    <span className="parent-menu-name">Best Seller</span>
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link nav-link-mb dropdown-toggle dropdown-toggle-nocaret"
                    href="#!"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    <span className="parent-menu-name">Shop</span>
                    <span className="parent-menu-icon ms-2">
                      <i className="bi bi-chevron-down" />
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    {
                      dressStyles.map((item) => {
                        return (<li key={item.id}>
                          <a
                            className="dropdown-item"
                            href={`/shop?dressStyle=${item.name}`}
                          >
                            {item.name}
                          </a>
                        </li>)
                      })
                    }
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link nav-link-mb dropdown-toggle dropdown-toggle-nocaret"
                    href="#!"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    <span className="parent-menu-name">Fabrics</span>
                    <span className="parent-menu-icon ms-2">
                      <i className="bi bi-chevron-down" />
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    {
                      fabricTypes.map((item) => {
                        return (<li key={item.id}>
                          <a
                            className="dropdown-item"
                            href={`/shop?fabricType=${item.name}`}
                          >
                            {item.name}
                          </a>
                        </li>)
                      })
                    }
                  </ul>
                </li>

              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="right-links nav gap-2 d-flex align-items-center">
            <a className="nav-link" to="#" onClick={() => setIsModalOpen(true)}  >
              <i className="bi bi-search" />
            </a>
            <a className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">
              <i className="bi bi-person-circle" />
            </a>
            <ul className="dropdown-menu dropdown-menu-end" style={{ right: '20px' }}>
              {
                isAuthenticated ? (
                  <li><a className="dropdown-item" href="/profile">Dashboard</a></li>
                ) : (<>
                  <li><a className="dropdown-item" href="/login">Sign In</a></li>
                  <li><a className="dropdown-item" href="/register">Sign Up</a></li>
                </>
                )
              }
              {/* <li><a className="dropdown-item" to="/login">Sign In</a></li>
              <li><a className="dropdown-item" to="/register">Sign Up</a></li>
               <li><a className="dropdown-item" to="/profile">Dashboard</a></li> */}
            </ul>
            <a className="nav-link position-relative" to="/wishlist">
              <i className="bi bi-heart" />
              <span className="notify-badge">{wishlist.count}</span>
            </a>
            <a className="nav-link position-relative" onClick={() => dispatch(toggleCartSidebar(!isSidebarOpen))}>
              <i className="bi bi-basket2" />
              <span className="notify-badge">{totalQuantity}</span>
            </a>
          </div>
        </div>
      </nav>

      <SearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </>
  );
};

export default Header;
