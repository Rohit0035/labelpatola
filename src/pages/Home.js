import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import Slider1 from '../assets/images/common/slider-1.jpg'
import Slider2 from '../assets/images/common/slider-2.jpg'
import g2Video from '../assets/images/common/g-2.mp4';
import gvVideo from '../assets/images/common/g-v.mp4';
import product1 from '../assets/images/common/pro-1.jpeg'
import product2 from '../assets/images/common/pro-2.jpeg'
import product3 from '../assets/images/common/pro-3.jpeg'
import product4 from '../assets/images/common/pro-4.jpeg'
import product5 from '../assets/images/common/pro-5.jpeg'
import pro1Img from '../assets/images/common/pro-5.jpeg'

// Import all category images
import pro1 from '../assets/images/common/pro-1.jpeg';
import pro2 from '../assets/images/common/pro-2.jpeg';
import pro3 from '../assets/images/common/pro-3.jpeg';
import pro4 from '../assets/images/common/pro-4.jpeg';
import pro5 from '../assets/images/common/pro-5.jpeg';
import pro6 from '../assets/images/common/pro-6.jpeg';
import ReviewHome from '../components/ReviewHome';
import InstagramSlider from '../components/InstagramSlider';
import ServiceFeature from '../components/ServiceFeature';
import SpecialOfferSection from '../components/SpecialOfferSection';
import MainHeroSlider from '../components/MainHeroSlider';


const categories = [
  { img: pro1, title: 'Co-ord Set' },
  { img: pro2, title: 'Co-ord Set' },
  { img: pro3, title: 'Co-ord Set' },
  { img: pro4, title: 'Co-ord Set' },
  { img: pro5, title: 'Co-ord Set' },
  { img: pro6, title: 'Co-ord Set' },
  { img: pro1, title: 'Co-ord Set' },
];


const slidesreel = [
  { video: g2Video, title: 'Pink Poppy Flora', price: '₹3,595' },
  { video: gvVideo, title: 'Floral Kurti Set', price: '₹2,995' },
  { video: gvVideo, title: 'Boho Kaftan', price: '₹2,499' },
  { video: g2Video, title: 'Ayqat Cotton Floral A-line Pant Set', price: '₹2,195' },
  { video: gvVideo, title: 'Ayqat Cotton Floral A-line Pant Set', price: '₹2,195' },
  { video: gvVideo, title: 'Ayqat Cotton Floral A-line Pant Set', price: '₹2,195' },
  { video: gvVideo, title: 'Ayqat Cotton Floral A-line Pant Set', price: '₹2,195' },
  { video: gvVideo, title: 'Ayqat Cotton Floral A-line Pant Set', price: '₹2,195' },
  { video: gvVideo, title: 'Ayqat Cotton Floral A-line Pant Set', price: '₹2,195' },
  { video: gvVideo, title: 'Ayqat Cotton Floral A-line Pant Set', price: '₹2,195' },
];

const Home = () => {

  const slides = [
    {
      src: g2Video,
      title: 'Pink Poppy Flora',
      price: '₹3,595',
    },
    {
      src: gvVideo,
      title: 'Floral Kurti Set',
      price: '₹2,995',
    },
    {
      src: gvVideo,
      title: 'Boho Kaftan',
      price: '₹2,499',
    },
    {
      src: gvVideo,
      title: 'Boho Kaftan',
      price: '₹2,499',
    },
    {
      src: gvVideo,
      title: 'Boho Kaftan',
      price: '₹2,499',
    },
  ];


  return (
    <>
       <Header/>
      {/*start main content*/}
      <main className="main-content">
        {/* section circle grid slider start */}
        <section className="py-3">
          <div className="container">
            {/* Wrapper for horizontal scroll on small devices */}
            <div className="overflow-x-sm-auto overflow-x-md-visible">
              <div className="row flex-nowrap flex-md-wrap justify-content-center text-center gy-3 str-row">
                <div className="col-auto">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#videoSliderModal"
                    className="d-block text-decoration-none"
                  >
                    <img
                      src={pro1}
                      className="rounded-circle border border-primary border-3 circle-items"
                      alt="Top Picks"
                    />
                    <div className="mt-2 small fw-semibold text-dark">
                      TOP PICKS
                    </div>
                  </a>
                </div>
                <div className="col-auto">
                  <a href="#" className="d-block text-decoration-none">
                    <img
                      src={pro2}
                      className="rounded-circle border border-primary border-3 circle-items"
                      alt="New Me"
                    />
                    <div className="mt-2 small fw-semibold text-dark">NEW ME</div>
                  </a>
                </div>
                <div className="col-auto">
                  <a href="#" className="d-block text-decoration-none">
                    <img
                      src={pro3}
                      className="rounded-circle border border-primary border-3 circle-items"
                      alt="All Time Fav"
                    />
                    <div className="mt-2 small fw-semibold text-dark">
                      ALL TIME FAV
                    </div>
                  </a>
                </div>
                <div className="col-auto">
                  <a href="#" className="d-block text-decoration-none">
                    <img
                      src={pro4}
                      className="rounded-circle border border-primary border-3 circle-items"
                      alt="Plus Size"
                    />
                    <div className="mt-2 small fw-semibold text-dark">
                      PLUS SIZE
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section circle grid slider close */}

        {/*start slider*/}
          <MainHeroSlider/>
        {/*end slider*/}


        {/*start tabular product*/}
        <section className="tabular-product py-5">
          <div className="container px-3">
            <div className="d-flex align-items-center justify-content-center mb-4">
              <h2 className="section-title">Elegance Evolved</h2>
            </div>
            <div className="table-responsive">
              <ul className="nav nav-pills mx-auto mb-4 p-2 rounded-5 border shadow-sm overflow-x-auto">
                <li className="nav-item">
                  <button
                    className="nav-link active rounded-5 px-5"
                    data-bs-toggle="pill"
                    data-bs-target="#new-arrivals"
                    type="button"
                  >
                    New Arrivals
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link rounded-5 px-5"
                    data-bs-toggle="pill"
                    data-bs-target="#best-seller"
                    type="button"
                  >
                    Best Seller
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link rounded-5 px-5"
                    data-bs-toggle="pill"
                    data-bs-target="#trending"
                    type="button"
                  >
                    Trending
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link rounded-5 px-5"
                    data-bs-toggle="pill"
                    data-bs-target="#Offers"
                    type="button"
                  >
                    Offers
                  </button>
                </li>
              </ul>
            </div>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="new-arrivals">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <a href="/product-detail">
                            <img
                              src={product1}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3
                            className="product-name mb-1"
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            data-bs-title="Wishlist"
                          >
                            Grey Venish Pant
                          </h3>
                          <p className="mb-0 product-price">$499</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <div className="discount-ribben position-absolute top-0 start-0 m-3">
                            10%
                          </div>
                          <a href="product-detail-grid.html">
                            <img
                              src={product2}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price d-flex align-items-center gap-2">
                            <span className="prev-price text-decoration-line-through">
                              $698
                            </span>
                            $499
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <a href="/product-detail">
                            <img
                              src={product3}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price">$348</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <div className="discount-ribben position-absolute top-0 start-0 m-3">
                            25%
                          </div>
                          <a href="product-detail-grid.html">
                            <img
                              src={product4}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price d-flex align-items-center gap-2">
                            <span className="prev-price text-decoration-line-through">
                              $647
                            </span>
                            $245
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <div className="discount-ribben position-absolute top-0 start-0 m-3">
                            50%
                          </div>
                          <a href="/product-detail">
                            <img
                              src={product5}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price d-flex align-items-center gap-2">
                            <span className="prev-price text-decoration-line-through">
                              $647
                            </span>
                            $245
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <a href="product-detail-grid.html">
                            <img
                              src={product1}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price d-flex align-items-center gap-2">
                            <span className="prev-price text-decoration-line-through">
                              $948
                            </span>
                            $346
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <a href="/product-detail">
                            <img
                              src={product2}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price">$348</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <div className="discount-ribben position-absolute top-0 start-0 m-3">
                            On Sale
                          </div>
                          <a href="product-detail-grid.html">
                            <img
                              src={product3}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price d-flex align-items-center gap-2">
                            <span className="prev-price text-decoration-line-through">
                              $647
                            </span>
                            $245
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end row*/}
              </div>
              <div className="tab-pane fade" id="best-seller">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <a href="/product-detail">
                            <img
                              src={product1}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3
                            className="product-name mb-1"
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            data-bs-title="Wishlist"
                          >
                            Grey Venish Pant
                          </h3>
                          <p className="mb-0 product-price">$499</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <div className="discount-ribben position-absolute top-0 start-0 m-3">
                            10%
                          </div>
                          <a href="product-detail-grid.html">
                            <img
                              src={product1}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price d-flex align-items-center gap-2">
                            <span className="prev-price text-decoration-line-through">
                              $698
                            </span>
                            $499
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <a href="/product-detail">
                            <img
                              src={product1}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price">$348</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <div className="discount-ribben position-absolute top-0 start-0 m-3">
                            25%
                          </div>
                          <a href="product-detail-grid.html">
                            <img
                              src={product1}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price d-flex align-items-center gap-2">
                            <span className="prev-price text-decoration-line-through">
                              $647
                            </span>
                            $245
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <div className="discount-ribben position-absolute top-0 start-0 m-3">
                            50%
                          </div>
                          <a href="/product-detail">
                            <img
                              src={product1}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price d-flex align-items-center gap-2">
                            <span className="prev-price text-decoration-line-through">
                              $647
                            </span>
                            $245
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <a href="product-detail-grid.html">
                            <img
                              src={product1}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price d-flex align-items-center gap-2">
                            <span className="prev-price text-decoration-line-through">
                              $948
                            </span>
                            $346
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <a href="/product-detail">
                            <img
                              src={product1}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price">$348</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <div className="discount-ribben position-absolute top-0 start-0 m-3">
                            On Sale
                          </div>
                          <a href="product-detail-grid.html">
                            <img
                              src={product1}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price d-flex align-items-center gap-2">
                            <span className="prev-price text-decoration-line-through">
                              $647
                            </span>
                            $245
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end row*/}
              </div>
              <div className="tab-pane fade" id="trending">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <a href="/product-detail">
                            <img
                              src={product3}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3
                            className="product-name mb-1"
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            data-bs-title="Wishlist"
                          >
                            Grey Venish Pant
                          </h3>
                          <p className="mb-0 product-price">$499</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <div className="discount-ribben position-absolute top-0 start-0 m-3">
                            10%
                          </div>
                          <a href="product-detail-grid.html">
                            <img
                              src={product3}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price d-flex align-items-center gap-2">
                            <span className="prev-price text-decoration-line-through">
                              $698
                            </span>
                            $499
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <a href="/product-detail">
                            <img
                              src={product3}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price">$348</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <div className="discount-ribben position-absolute top-0 start-0 m-3">
                            25%
                          </div>
                          <a href="product-detail-grid.html">
                            <img
                              src={product3}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price d-flex align-items-center gap-2">
                            <span className="prev-price text-decoration-line-through">
                              $647
                            </span>
                            $245
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <div className="discount-ribben position-absolute top-0 start-0 m-3">
                            50%
                          </div>
                          <a href="/product-detail">
                            <img
                              src={product3}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price d-flex align-items-center gap-2">
                            <span className="prev-price text-decoration-line-through">
                              $647
                            </span>
                            $245
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <a href="product-detail-grid.html">
                            <img
                              src={product3}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price d-flex align-items-center gap-2">
                            <span className="prev-price text-decoration-line-through">
                              $948
                            </span>
                            $346
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <a href="/product-detail">
                            <img
                              src={product3}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price">$348</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <div className="discount-ribben position-absolute top-0 start-0 m-3">
                            On Sale
                          </div>
                          <a href="product-detail-grid.html">
                            <img
                              src={product3}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price d-flex align-items-center gap-2">
                            <span className="prev-price text-decoration-line-through">
                              $647
                            </span>
                            $245
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end row*/}
              </div>
              <div className="tab-pane fade" id="Offers">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <a href="/product-detail">
                            <img
                              src={product3}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3
                            className="product-name mb-1"
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            data-bs-title="Wishlist"
                          >
                            Grey Venish Pant
                          </h3>
                          <p className="mb-0 product-price">$499</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <div className="discount-ribben position-absolute top-0 start-0 m-3">
                            10%
                          </div>
                          <a href="product-detail-grid.html">
                            <img
                              src={product3}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price d-flex align-items-center gap-2">
                            <span className="prev-price text-decoration-line-through">
                              $698
                            </span>
                            $499
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <a href="/product-detail">
                            <img
                              src={product3}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price">$348</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <div className="discount-ribben position-absolute top-0 start-0 m-3">
                            25%
                          </div>
                          <a href="product-detail-grid.html">
                            <img
                              src={product3}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price d-flex align-items-center gap-2">
                            <span className="prev-price text-decoration-line-through">
                              $647
                            </span>
                            $245
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <div className="discount-ribben position-absolute top-0 start-0 m-3">
                            50%
                          </div>
                          <a href="/product-detail">
                            <img
                              src={product3}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price d-flex align-items-center gap-2">
                            <span className="prev-price text-decoration-line-through">
                              $647
                            </span>
                            $245
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <a href="product-detail-grid.html">
                            <img
                              src={product3}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price d-flex align-items-center gap-2">
                            <span className="prev-price text-decoration-line-through">
                              $948
                            </span>
                            $346
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <a href="/product-detail">
                            <img
                              src={product3}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price">$348</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-card border rounded-3 p-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="position-relative">
                          <div className="discount-ribben position-absolute top-0 start-0 m-3">
                            On Sale
                          </div>
                          <a href="product-detail-grid.html">
                            <img
                              src={product3}
                              className="product-img img-fluid rounded-3"
                              alt=""
                            />
                          </a>
                          <div className="position-absolute top-0 end-0 m-3 product-actions">
                            <div className="d-flex flex-column gap-2">
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-heart" />
                              </a>
                              <a href="javascript:;" className="btn btn-action">
                                <i className="bi bi-funnel" />
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewModal"
                              >
                                <i className="bi bi-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                            <a
                              href="javascript:;"
                              className="btn btn-dark rounded-5 w-100"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="product-name mb-1">Grey Venish Pant</h3>
                          <p className="mb-0 product-price d-flex align-items-center gap-2">
                            <span className="prev-price text-decoration-line-through">
                              $647
                            </span>
                            $245
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end row*/}
              </div>
            </div>
          </div>
        </section>
        {/*end tabular product*/}


        {/* video section */}
        <section className="watch-love-shop py-5">
          <div className="container">
            <div className="d-flex align-items-center justify-content-center mb-4">
              <h2 className="section-title">WATCH . LOVE . SHOP</h2>
            </div>
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              spaceBetween={10}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 6 },
              }}
              className="shopSwiper position-relative"
            >
              {slidesreel.map((slide, index) => (
                <SwiperSlide key={index}>
                  <a href="#" data-bs-toggle="modal"
                    data-bs-target="#videoSliderReelModal" className="text-decoration-none text-dark">
                    <div className="shop-card border rounded overflow-hidden shadow-sm">
                      <video
                        src={slide.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-100"
                      ></video>
                      <div className="shop-info p-2 d-flex align-items-center">
                        <img
                          src={pro1Img}
                          className="rounded me-2"
                          style={{ width: 35, height: 35 }}
                          alt="Thumb"
                        />
                        <div>
                          <div className="small">{slide.title}</div>
                          <div className="fw-bold">{slide.price}</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
              {/* Navigation Buttons */}
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </Swiper>
          </div>
        </section>
        {/* video section close */}

        {/* Swiper Section */}
        <section className="category-slider-section py-5 bg-light">
          <div className="container">
            <div className="d-flex align-items-center justify-content-center mb-4">
              <h2 className="section-title">Find exactly what you're looking for</h2>
            </div>

            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              spaceBetween={20}
              slidesPerView={2}
              loop={true}
              breakpoints={{
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
              }}
              className="categorySwiper position-relative"
            >
              {categories.map((cat, index) => (
                <SwiperSlide key={index} className="text-center">
                  <a href="#" className="text-decoration-none">
                    <img src={cat.img} className="img-fluid rounded" alt={cat.title} />
                    <div className="mt-2 fw-semibold text-primary">{cat.title}</div>
                  </a>
                </SwiperSlide>
              ))}

              {/* Navigation Buttons */}
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </Swiper>
          </div>
        </section>

        {/*start special offer*/}
          <SpecialOfferSection/>
        {/*end special offer*/}

        {/*start Review*/}
         <ReviewHome/>
        {/*end Review*/}

        {/*start shop Instagram*/}
        <InstagramSlider/>
        {/*end shop Instagram*/}


        {/*services*/}
        <ServiceFeature/>
        {/*end services*/}

      </main>
      {/*end main content*/}

      {/* Modal */}
      <div className="modal fade" id="videoSliderModal" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div
            className="modal-content border-0"
            style={{ backgroundColor: "unset !important" }}
          >
            <div className="modal-body p-0 position-relative">
              {/* Swiper */}
              <div className="video-swiper-slider">
                <Swiper
                  modules={[Navigation, EffectCoverflow]}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  effect="coverflow"
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={1.2}  // This gives side preview of next/prev slides
                  loop={true}
                  coverflowEffect={{
                    rotate: 30,         // Rotation angle
                    stretch: 0,          // Space between slides
                    depth: 100,          // Perspective depth
                    modifier: 1,
                    slideShadows: true,  // Shadow effect
                  }}
                  breakpoints={{
                    640: { slidesPerView: 1.2 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  spaceBetween={20}
                >
                  {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <div className="video-box">
                        <video
                          src={slide.src}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-100"
                        />
                      </div>
                      <div className="video-caption">
                        <h6>{slide.title}</h6>
                        <div className="price mb-2">{slide.price}</div>
                        <button className="btn btn-dark rounded-5 w-100">ADD TO CART</button>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom navigation arrows */}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
              {/* Close Button */}
              {/* <button type="button" class="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="modal"
              aria-label="Close">
              
          </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Modal reel video list*/}
      <div className="modal fade" id="videoSliderReelModal" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div
            className="modal-content border-0"
            style={{ backgroundColor: "unset !important" }}
          >
            <div className="modal-body p-0 position-relative">
              {/* Swiper */}
              <div className="video-swiper-slider">
                <Swiper
                  modules={[Navigation, EffectCoverflow]}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  effect="coverflow"
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={1.2}  // This gives side preview of next/prev slides
                  loop={true}
                  coverflowEffect={{
                    rotate: 30,         // Rotation angle
                    stretch: 0,          // Space between slides
                    depth: 100,          // Perspective depth
                    modifier: 1,
                    slideShadows: true,  // Shadow effect
                  }}
                  breakpoints={{
                    640: { slidesPerView: 1.2 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  spaceBetween={20}
                >
                  {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <div className="video-box">
                        <video
                          src={slide.src}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-100"
                        />
                      </div>
                      <div className="video-caption">
                        <h6>{slide.title}</h6>
                        <div className="price mb-2">{slide.price}</div>
                        <button className="btn btn-dark rounded-5 w-100">ADD TO CART</button>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom navigation arrows */}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
              {/* Close Button */}
              {/* <button type="button" class="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="modal"
              aria-label="Close">
              
          </button> */}
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>


  );
};

export default Home;
