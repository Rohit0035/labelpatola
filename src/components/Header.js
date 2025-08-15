import React, { useEffect, useState } from 'react';
import Sale from '../assets/images/common/sale.png'
import Logo from '../assets/images/common/logo.png'
import pro1 from '../assets/images/common/pro-1.jpeg'
import provideo from '../assets/images/common/g-v.mp4'
import { Link } from 'react-router-dom';
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
  const [products, setProducts] = useState([]);
  const [websiteCommonSettings, setWebsiteCommonSettings] = useState([]);
  const [selectedCategoryProducts, setSelectedCategoryProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const getHeaderData = async () => {
    try {
      const data = await fetchHeaderData();
      if (data.success) {
        setCategories(data.data.categories);
        setSelectedCategory(data.data.categories?.[0]?.id);
        setWebsiteCommonSettings(data.data.websiteCommonSettings);
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
          <Link className="navbar-brand d-xl-flex" to="/">
            <img src={Logo} className="logo-img" alt="Logo" width="100px" />
          </Link>

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
                  <Link className="nav-link nav-link-mb" to="/shop/?key=0-999"><span className="parent-menu-name">Under 999</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-mb" to="/shop/?key=1000-1399"><span className="parent-menu-name">999-1399</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-mb" to="/shop/?key=sale">
                    {/* Choose one of the classes for the desired animation */}
                    <span className="parent-menu-name flash-sale">
                      SALE
                      {/* <img src={Sale} alt="" width="80px" /> */}
                    </span>
                    {/* Or for bouncing: */}
                    {/* <span className="parent-menu-name bounce-sale">Sale</span> */}
                  </Link>
                </li>


                {/* category Edit Mega Menu for mobile */}

                <li className="nav-item dropdown d-block d-sm-none">
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
                    {categories.map((category) => (
                      <li className='d-flex'>
                        <Link className="dropdown-item" to="/shop">
                          <span className='cat-imgs'>
                            <img src={pro1} alt='category-image' className='w-100 h-100' />
                          </span>
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* category Edit Mega Menu for desktop */}
                <li className="nav-item dropdown position-static d-none d-sm-block">
                  <Link className="nav-link nav-link-mb dropdown-toggle dropdown-toggle-nocaret" to="#" data-bs-toggle="dropdown">
                    <span className="parent-menu-name">Search By Category</span>
                    <i className="bi bi-chevron-down ms-2" />
                  </Link>
                  <div className="dropdown-menu mega-menu p-lg-3 start-0 end-0 rounded-0">
                    <div className="container px-3">
                      <div className="row row-cols-1 row-cols-lg-5 g-3">
                        {/* Text Menu */}
                        <div className="col-lg-3">
                          {categories.map((category) => (
                            <Link
                              key={category.id}
                              to="javascript:void(0)"
                              className="list-group-item mega-menu-link px-0  "
                              style={{ color: selectedCategory === category.id ? '#ff6a3a' : '' }}
                              onClick={() => setSelectedCategory(category.id)}
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>
                        {/* Product Cards */}
                        <div className='col-lg-9'>
                          <div className='row'>
                            {selectedCategoryProducts.slice(0, 4).map(i => (
                              <div className="col-6 col-md-6 col-lg-3 mb-3" key={i}>
                                <div className="card border">
                                  <div className="card-body p-2 position-relative">
                                    <img src={`${IMAGE_URL}/${i.feature_image}`} className="img-fluid rounded mb-ser-cate" alt="" />
                                    <div className="position-absolute bottom-0 end-0 start-0 m-3">
                                      <h6 className="text-center fw-bold text-white st-pro-name">{i.name}</h6>
                                      <Link to={`/product-detail/${i.slug}`} className="btn border bg-white w-100 rounded-3 px-4 st-mb-cart">
                                        Shop Now
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* New Arrival Menu with Videos */}
                <li className="nav-item dropdown position-static">
                  <Link className="nav-link nav-link-mb dropdown-toggle dropdown-toggle-nocaret" to="#" data-bs-toggle="dropdown">
                    <span className="parent-menu-name">New Arrival</span>
                    <i className="bi bi-chevron-down ms-2" />
                  </Link>
                  <div className="dropdown-menu mega-menu p-lg-3 start-0 end-0 rounded-0">
                    <div className="container px-3">
                      <div className="row row-cols-lg-5">
                        {products.map((v, i) => (
                          <div className="col-6 col-sm-4 col-md-2 col-lg-1 mb-3" key={i}>
                            <Link to={`/product-detail/${v.slug}`} className="d-block">
                              {
                                v.video ?
                                  <video
                                    src={`${IMAGE_URL}/${v.video}`}
                                    className="w-100"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{ height: '100%', width: '100%' }}
                                  /> :
                                  <img src={`${IMAGE_URL}/${v.feature_image}`} className="w-100" alt="" />
                              }
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item  position-static">
                  <Link
                    className="nav-link nav-link-mb"
                    to="/shop/?key=best_seller"
                  >
                    <span className="parent-menu-name">Best Seller</span>
                  </Link>
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
                    <li><Link className="dropdown-item" to="/shop">Anarkali</Link></li>
                    <li><Link className="dropdown-item" to="/shop">A-Line</Link></li>
                    <li><Link className="dropdown-item" to="/shop">Asymmetric</Link></li>
                    <li><Link className="dropdown-item" to="/shop">Straight</Link></li>
                    <li><Link className="dropdown-item" to="/shop">Angrakha</Link></li>
                    <li><Link className="dropdown-item" to="/shop">Nyra Cut</Link></li>
                    <li><Link className="dropdown-item" to="/shop">Alia Cut</Link></li>
                    <li><Link className="dropdown-item" to="/shop">Coord Set</Link></li>
                    <li><Link className="dropdown-item" to="/shop">Dress</Link></li>
                    <li><Link className="dropdown-item" to="/shop">Short Top</Link></li>
                  </ul>
                </li>

              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="right-links nav gap-2 d-flex align-items-center">
            <Link className="nav-link" to="#" onClick={() => setIsModalOpen(true)}  >
              <i className="bi bi-search" />
            </Link>
            <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">
              <i className="bi bi-person-circle" />
            </Link>
            <ul className="dropdown-menu dropdown-menu-end" style={{ right: '20px' }}>
              {
                isAuthenticated ? (
                  <li><Link className="dropdown-item" to="/profile">Dashboard</Link></li>
                ) : (<>
                  <li><Link className="dropdown-item" to="/login">Sign In</Link></li>
                  <li><Link className="dropdown-item" to="/login">Sign Up</Link></li>
                </>
                )
              }
              {/* <li><Link className="dropdown-item" to="/login">Sign In</Link></li>
              <li><Link className="dropdown-item" to="/register">Sign Up</Link></li>
               <li><Link className="dropdown-item" to="/profile">Dashboard</Link></li> */}
            </ul>
            <Link className="nav-link position-relative" to="/wishlist">
              <i className="bi bi-heart" />
              <span className="notify-badge">{wishlist.count}</span>
            </Link>
            <Link className="nav-link position-relative" onClick={() => dispatch(toggleCartSidebar(!isSidebarOpen))}>
              <i className="bi bi-basket2" />
              <span className="notify-badge">{totalQuantity}</span>
            </Link>
          </div>
        </div>
      </nav>

      <SearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </>
  );
};

export default Header;
