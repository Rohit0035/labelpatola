import React from 'react';
import Logo from '../assets/images/common/logo.png'
import pro1 from '../assets/images/common/pro-1.jpeg'
import provideo from '../assets/images/common/g-v.mp4'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      {/* Top Marquee */}
      <header className="top-header py-2 bg-dark">
        <div className="top-strip d-flex align-items-center gap-4 container px-3">
          <marquee behavior="scroll" direction="left" scrollAmount={5} className="text-white fw-bold">
            <span className="me-5"><i className="bi bi-bag-check" /> COD Available</span>
            <span className="me-5"><i className="bi bi-award" /> Legacy Since 1950</span>
            <span className="me-5"><i className="bi bi-heart" /> 526K IG Community</span>
            <span className="me-5"><i className="bi bi-gem" /> Choice of Fabrics</span>
          </marquee>
        </div>
      </header>

      {/* Navbar with Offcanvas */}
      <nav className="navbar navbar-expand-xl border-bottom py-0 sticky-top bg-white">
        <div className="container px-3">
          <a className="navbar-brand d-none d-xl-flex" href="/">
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
          <div className="offcanvas offcanvas-start off-st" tabIndex="-1" id="offcanvasNavbar">
            <div className="offcanvas-header">
              <img src="/assets/images/common/logo.png" className="logo-img2" alt="" width="150" />
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>
            <div className="offcanvas-body p-0">
              <ul className="navbar-nav mx-auto gap-0 gap-xl-2">
                {['Plus Size Store', 'Under 1499', 'Buy Any 3 in 4000'].map((item, i) => (
                  <li className="nav-item" key={i}>
                    <a className="nav-link" href="#"><span className="parent-menu-name">{item}</span></a>
                  </li>
                ))}

                {/* Wedding Edit Mega Menu */}
                <li className="nav-item dropdown position-static">
                  <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown">
                    <span className="parent-menu-name">Wedding Edit ✨</span>
                    <i className="bi bi-chevron-down ms-2" />
                  </a>
                  <div className="dropdown-menu mega-menu p-lg-3 start-0 end-0 rounded-0">
                    <div className="container px-3">
                      <div className="row row-cols-1 row-cols-lg-5 g-3">
                        {/* Text Menu */}
                        <div className="col">
                          {['MEHENDI', 'HALDI', 'COCKTAIL', 'TROUSSEAU'].map((itm, i) => (
                            <a key={i} href="#" className="list-group-item mega-menu-link px-0">{itm}</a>
                          ))}
                        </div>

                        {/* Product Cards */}
                        {[1, 2, 3, 4].map(i => (
                          <div className="col" key={i}>
                            <div className="card border">
                              <div className="card-body p-2 position-relative">
                                <img src={pro1} className="img-fluid rounded" alt="" />
                                <div className="position-absolute bottom-0 end-0 start-0 m-3">
                                  <button className="btn border bg-white w-100 rounded-3 px-4">Women</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>

                {/* New Arrival Menu with Videos */}
                <li className="nav-item dropdown position-static">
                  <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown">
                    <span className="parent-menu-name">New Arrival</span>
                    <i className="bi bi-chevron-down ms-2" />
                  </a>
                  <div className="dropdown-menu mega-menu p-lg-3 start-0 end-0 rounded-0">
                    <div className="container px-3">
                      <div className="row row-cols-lg-5">
                        {[1, 2, 3].map((v, i) => (
                          <div className="col-6 col-sm-4 col-md-2 col-lg-1" key={i}>
                            <a href="#" className="d-block">
                              <video
                                src={provideo}
                                className="w-100"
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{ height: '100%', width: '100%' }}
                              />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item  position-static">
                  <a
                    className="nav-link"
                    href="#"
                  >
                    <span className="parent-menu-name">Best Seller</span>
                  </a>
                </li>

                 <li className="nav-item  position-static">
                  <Link
                    className="nav-link"
                    to="/shop"
                  >
                    <span className="parent-menu-name">Shop</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="right-links nav gap-2 d-flex align-items-center">
            <a className="nav-link" href="#" data-bs-toggle="modal"
              data-bs-target="#searchModal"  >
              <i className="bi bi-search" />
            </a>
            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
              <i className="bi bi-person-circle" />
            </a>
            <ul className="dropdown-menu dropdown-menu-end" style={{right:'20px'}}>
              <li><Link className="dropdown-item" to="/login">Sign In</Link></li>
              <li><Link className="dropdown-item" to="/register">Sign Up</Link></li>
               <li><Link className="dropdown-item" to="/profile">Dashboard</Link></li>
            </ul>
            <Link className="nav-link position-relative" to="/wishlist">
              <i className="bi bi-heart" />
              <span className="notify-badge">5</span>
            </Link>
            <Link className="nav-link position-relative" data-bs-toggle="offcanvas" to="#offcanvasCart">
              <i className="bi bi-basket2" />
              <span className="notify-badge">8</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
