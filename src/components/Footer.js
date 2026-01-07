import React from 'react';
import pro1 from '../assets/images/common/pro-1.jpeg';
import pro2 from '../assets/images/common/pro-2.jpeg';
import pro3 from '../assets/images/common/pro-3.jpeg';
import pro4 from '../assets/images/common/pro-4.jpeg';
import pro5 from '../assets/images/common/pro-5.jpeg';
import pro6 from '../assets/images/common/pro-6.jpeg';
import Logo from '../assets/images/common/logo.png'
import { Link } from 'react-router-dom';
import CartSidebar from './CartSidebar';
import SearchModal from './SearchModal';

const Footer = () => {
    return (
        <>
            <>
                {/*footer widgets*/}
                <section className="footer-widgets py-5 border-top">
                    <div className="container px-3">
                        <div className="row g-4">
                            <div className="col-12 col-lg-4">
                                <div className="footer-widget-1">
                                    <div className="mb-3">
                                        <img src={Logo} width="80px" alt="" />
                                    </div>
                                    {/* <div className='mt-3'>
                                        <address>
                                            <strong>Address:</strong>
                                            T1-604, 6th Floor, Mahima Sansar, Opposite Radha Swami Satsang, Sahara City Homes, Beelwa Kalan Jaipur Rajasthan - 302022
                                        </address>
                                    </div> */}
                                    <a href="mailto:labelpatolabypurvicreation@gmail.com"className='mb-3'>
                                        <span>
                                            <i className="bi bi-envelope me-2" />
                                        </span>
                                         labelpatolabypurvicreation@gmail.com
                                    </a>
                                    {/* <p>
                                        <span>
                                            <i className="bi bi-telephone me-2" />
                                        </span>
                                        73376 04842
                                    </p> */}
                                    {/* <p><span><i class="bi bi-globe me-2"></i></span></p> */}
                                    <div className="social-link d-flex align-items-center gap-2 mt-3">
                                        <a href="https://www.facebook.com/" className="btn btn-outline-dark">
                                            <i className="bi bi-facebook" />
                                        </a>
                                        <a href="https://x.com/" className="btn btn-outline-dark">
                                            <i className="bi bi-twitter-x" />
                                        </a>
                                        <a href="https://www.instagram.com/label_patola/" className="btn btn-outline-dark">
                                            <i className="bi bi-instagram" />
                                        </a>
                                        <a href="https://www.youtube.com/" className="btn btn-outline-dark">
                                            <i className="bi bi-youtube" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="footer-widget-3">
                                    <h5 className="mb-3">Collections</h5>
                                    <ul className="list-unstyled d-flex flex-column gap-2">
                                        <li>
                                            <Link to="/shop/?key=best_seller" className="footer-link">
                                                Best Seller
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/shop/?key=new_arrivals" className="footer-link">
                                                New Arrivals
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/shop" className="footer-link">
                                                View All
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="col-12 col-lg-3">
                                <div className="footer-widget-3">
                                    <h5 className="mb-3">Shop by</h5>
                                    <ul className="list-unstyled d-flex flex-column gap-2">
                                        <li>
                                            <a
                                                href="index.php?page=shop-circular-catgories"
                                                className="footer-link"
                                            >
                                                Print /Pattern
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="index.php?page=shop-circular-catgories"
                                                className="footer-link"
                                            >
                                                Style
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="index.php?page=shop-circular-catgories"
                                                className="footer-link"
                                            >
                                                Occassion
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="index.php?page=shop-circular-catgories"
                                                className="footer-link"
                                            >
                                                Fabric
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="index.php?page=shop-circular-catgories"
                                                className="footer-link"
                                            >
                                                Craft
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="index.php?page=shop-circular-catgories"
                                                className="footer-link"
                                            >
                                                Bottom
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                            <div className="col-12 col-lg-4">
                                <div className="footer-widget-3">
                                    <h5 className="mb-3">Helpful Links</h5>
                                    <ul className="list-unstyled d-flex flex-column gap-2">
                                        <li>
                                            <Link to="/" className="footer-link">
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/about" className="footer-link">
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contact" className="footer-link">
                                                Contact Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/privacy-policy"
                                                className="footer-link"
                                            >
                                                Privacy Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/termsandcondition"
                                                className="footer-link"
                                            >
                                                Terms of Service
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/shoping-policy"
                                                className="footer-link"
                                            >
                                                Shipping Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/cancel-policy"
                                                className="footer-link"
                                            >
                                                Cancellation, Return &amp; Exchange Policy
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*end row*/}
                    </div>
                </section>
                {/*end footer widgets*/}
                {/*start footer strip*/}
                <footer className="footer-strip py-4 border-top">
                    <div className="container px-3">
                        <div className="row">
                            <div className="col-12 col-lg-12 text-center">
                                <p className="mb-0 font-12 text-center">@All rights reserved <b>Label Patola</b>. Made by AZSM</p>
                            </div>
                            {/* <div className="col-12 col-lg-auto">
                                <div className="d-flex align-items-center gap-3">
                                    <Link to="/privacy-policy" className="font-12 text-secondary">
                                        Privacy
                                    </Link>
                                    <Link to="/termsandcondition" className="font-12 text-secondary">
                                        Terms of use
                                    </Link>
                                </div>
                            </div> */}
                            {/* <div className="col-12 col-lg-auto ms-lg-auto">
                                <div className="d-flex align-items-center gap-3">
                                    <a href="javascript:;">
                                        <img
                                            src="assets/images/gallery/payment/paypal.png"
                                            className="img-fluid"
                                            width={60}
                                            alt=""
                                        />
                                    </a>
                                    <a href="javascript:;">
                                        <img
                                            src="assets/images/gallery/payment/visa.png"
                                            className="img-fluid"
                                            width={50}
                                            alt=""
                                        />
                                    </a>
                                    <a href="javascript:;">
                                        <img
                                            src="assets/images/gallery/payment/money.png"
                                            className="img-fluid"
                                            width={35}
                                            alt=""
                                        />
                                    </a>
                                    <a href="javascript:;">
                                        <img
                                            src="assets/images/gallery/payment/stripe.png"
                                            className="img-fluid"
                                            width={40}
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div> */}
                        </div>
                        {/*end row*/}
                    </div>
                </footer>
                {/*end footer strip*/}
                {/*back to top button*/}
                <a href="javaScript:;" className="back-to-top">
                    <i className="bi bi-arrow-up" />
                </a>
                {/*end back to top button*/}
                {/*start off canvas cart*/}
                {/* <CartSidebar /> */}
                {/* <div
                    className="offcanvas offcanvas-end offcanvas-cart p-2"
                    tabIndex={-1}
                    id="offcanvasCart"
                >
                    <div className="offcanvas-header border-bottom">
                        <h5 className="offcanvas-title">Shopping cart</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        />
                    </div>
                    <div className="offcanvas-body">
                        <div className="cart-product-list d-flex flex-column">
                            
                            <div className="cart-product-list-item d-flex align-items-center gap-3">
                                <div className="flex-shrink-0">
                                    <a href="javascript:;">
                                        <img
                                            src={pro6}
                                            width={100}
                                            className="cart-product-img rounded-3"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="cart-product-info flex-grow-1">
                                    <p className="mb-1 cart-product-name">Polarized shirt for women</p>
                                    <h5 className="mb-0 cart-product-price">$87</h5>
                                    <div className="d-flex align-items-center justify-content-between mt-2">
                                        <p className="mb-0 font-14 cart-product-qty">Qty 1</p>
                                        <button
                                            type="button"
                                            className="cart-product-btn-delete btn btn-outline-dark border btn-sm rounded-3"
                                        >
                                            <i className="bi bi-trash3" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <hr className="border-bottom border-1 border" />

                        </div>
                    </div>
                    <div className="cart-product-checout p-3 border-top">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <p className="mb-0">Subtotal</p>
                            <h5 className="mb-0">$257.6</h5>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                            <a
                                href="/cart"
                                className="btn btn-light border px-4 py-2 flex-fill"
                            >
                                View Cart
                            </a>
                            <a
                                href="/checkout"
                                className="btn btn-dark px-4 py-2 border border-dark flex-fill"
                            >
                                Checkout
                            </a>
                        </div>
                    </div>
                </div> */}
                {/*end off canvas cart*/}
                {/* start quick view modal */}
                <div
                    className="modal fade"
                    id="QuickViewModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-xl modal-dialog-scrollable modal-dialog-centered">
                        <div className="modal-content rounded-3">
                            <div className="modal-header px-4">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                    Product Details
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body p-4">
                                <div className="row g-4">
                                    <div className="col-12 col-xl-6">
                                        <div className="product-images-grid">
                                            <div className="product-zoom-images">
                                                <div className="row row-cols-2 g-4">
                                                    <div className="col">
                                                        <div>
                                                            <img
                                                                src={pro3}
                                                                className="img-fluid rounded-3"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div>
                                                            <img
                                                                src={pro3}
                                                                className="img-fluid rounded-3"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div>
                                                            <img
                                                                src={pro3}
                                                                className="img-fluid rounded-3"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div>
                                                            <img
                                                                src={pro3}
                                                                className="img-fluid rounded-3"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*end row*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-xl-6">
                                        <div className="product-details">
                                            <p className="mb-1">Women Topwar</p>
                                            <h2 className="mb-0">Lorem Lore Ipsum</h2>
                                            <div className="d-flex align-items-center gap-2 my-3">
                                                <span className="ratings text-warning">
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                </span>
                                                <span className="font-14">(568 reviews)</span>
                                            </div>
                                            <div className="product-price d-flex align-items-center gap-2">
                                                <span className="fs-3 fw-semibold">$357.89</span>
                                                <span className="fs-6 text-decoration-line-through text-body-tertiary text-opacity-50">
                                                    $864.99
                                                </span>
                                                <span className="badge badge-pill bg-danger rounded-5">
                                                    -25%
                                                </span>
                                            </div>
                                            <p className="product-short-desc mt-3 mb-0">
                                                A solid round neck T-shirt offers a timeless, versatile style
                                                perfect for casual or layered looks. Made from soft,
                                                breathable fabric, it provides all-day comfort and effortless
                                                fashion.
                                            </p>
                                            <div className="product-colors mt-4">
                                                <p className="mb-2">Select Color</p>
                                                <div className="product-color-list d-flex align-items-center gap-3">
                                                    <div className="product-color-list-item">
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="options-color"
                                                            id="color-option1"
                                                        />
                                                        <label
                                                            className="btn btn-product-color bg-primary"
                                                            htmlFor="color-option1"
                                                        />
                                                    </div>
                                                    <div className="product-color-list-item">
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="options-color"
                                                            id="color-option2"
                                                            defaultChecked=""
                                                        />
                                                        <label
                                                            className="btn btn-product-color bg-pink"
                                                            htmlFor="color-option2"
                                                        />
                                                    </div>
                                                    <div className="product-color-list-item">
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="options-color"
                                                            id="color-option3"
                                                        />
                                                        <label
                                                            className="btn btn-product-color bg-orange"
                                                            htmlFor="color-option3"
                                                        />
                                                    </div>
                                                    <div className="product-color-list-item">
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="options-color"
                                                            id="color-option4"
                                                        />
                                                        <label
                                                            className="btn btn-product-color bg-indigo"
                                                            htmlFor="color-option4"
                                                        />
                                                    </div>
                                                    <div className="product-color-list-item">
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="options-color"
                                                            id="color-option5"
                                                        />
                                                        <label
                                                            className="btn btn-product-color bg-black"
                                                            htmlFor="color-option5"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-size mt-4">
                                                <div className="product-size-list d-flex align-items-center gap-3">
                                                    <div className="product-size-list-item">
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="options-size"
                                                            id="size-option1"
                                                        />
                                                        <label
                                                            className="btn btn-outline-dark btn-product-size"
                                                            htmlFor="size-option1"
                                                        >
                                                            S
                                                        </label>
                                                    </div>
                                                    <div className="product-size-list-item">
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="options-size"
                                                            id="size-option2"
                                                            defaultChecked=""
                                                        />
                                                        <label
                                                            className="btn btn-outline-dark btn-product-size"
                                                            htmlFor="size-option2"
                                                        >
                                                            M
                                                        </label>
                                                    </div>
                                                    <div className="product-size-list-item">
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="options-size"
                                                            id="size-option3"
                                                        />
                                                        <label
                                                            className="btn btn-outline-dark btn-product-size"
                                                            htmlFor="size-option3"
                                                        >
                                                            L
                                                        </label>
                                                    </div>
                                                    <div className="product-size-list-item">
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="options-size"
                                                            id="size-option4"
                                                        />
                                                        <label
                                                            className="btn btn-outline-dark btn-product-size"
                                                            htmlFor="size-option4"
                                                        >
                                                            XL
                                                        </label>
                                                    </div>
                                                    <div className="product-size-list-item">
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="options-size"
                                                            id="size-option5"
                                                        />
                                                        <label
                                                            className="btn btn-outline-dark btn-product-size"
                                                            htmlFor="size-option5"
                                                        >
                                                            XXL
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-quantity mt-4">
                                                <p className="mb-2">Quantity</p>
                                                <div className="input-group">
                                                    <button
                                                        className="btn border border-2 border-end-0"
                                                        data-decrement=""
                                                        type="button"
                                                    >
                                                        <i className="bi bi-dash" />
                                                    </button>
                                                    <input
                                                        type="number"
                                                        className="form-control border-2 text-center"
                                                        min={0}
                                                        defaultValue={1}
                                                        readOnly=""
                                                    />
                                                    <button
                                                        className="btn border border-2 border-start-0"
                                                        data-increment=""
                                                        type="button"
                                                    >
                                                        <i className="bi bi-plus" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product-cart-buttons d-grid d-md-flex align-items-center gap-3 mt-4">
                                                <button
                                                    type="button"
                                                    className="btn btn-dark border border-2 rounded-5 border-dark py-2 px-5 d-flex align-items-center justify-content-center gap-2 w-100"
                                                >
                                                    <i className="bi bi-cart-plus" />
                                                    Add to cart
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn border border-2 py-2 px-5 rounded-5 d-flex align-items-center justify-content-center gap-2"
                                                >
                                                    <i className="bi bi-heart" />
                                                    wishlist
                                                </button>
                                            </div>
                                            <div className="mt-4">
                                                <p className="mb-2 d-flex align-items-center gap-2 font-14">
                                                    <i className="bi bi-truck" />
                                                    <span>
                                                        <span className="fw-semibold">
                                                            Free shipping &amp; returns:
                                                        </span>{" "}
                                                        Enjoy free shipping and returns on all orders over $200!
                                                    </span>
                                                </p>
                                                <p className="mb-2 d-flex align-items-center gap-2 font-14">
                                                    <i className="bi bi-alarm" />
                                                    <span>
                                                        <span className="fw-semibold">Estimated Delivery:</span>{" "}
                                                        International: 10-15 days | United States: 8-10 days
                                                    </span>
                                                </p>
                                                <p className="mb-0 mt-3 d-flex align-items-center gap-2 font-14">
                                                    <i className="bi bi-share" />
                                                    <span>Share this product</span>
                                                </p>
                                                <div className="mt-2 d-flex align-items-center gap-2 product-share-link">
                                                    <a
                                                        href="https://www.facebook.com/"
                                                        className="btn btn-sm btn-outline-dark border"
                                                    >
                                                        <i className="bi bi-facebook" />
                                                    </a>
                                                    <a
                                                        href="https://x.com/"
                                                        className="btn btn-sm btn-outline-dark border"
                                                    >
                                                        <i className="bi bi-twitter-x" />
                                                    </a>
                                                    <a
                                                        href="https://www.instagram.com/label_patola/"
                                                        className="btn btn-sm btn-outline-dark border"
                                                    >
                                                        <i className="bi bi-instagram" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*end row*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/* end quick view modal */}
                {/* <SearchModal /> */}

                {/* Searchmodal old */}

                {/* start search sodal */}
                <div
                    className="modal fade search-modal"
                    id="searchModal"
                    tabIndex={-1}
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-xl modal-dialog-scrollable">
                        <div className="modal-content p-lg-2 p-0">
                            <div className="p-4">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h1 className="modal-title fs-5 mb-0">Search</h1>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    />
                                </div>
                                <form className="position-relative mt-3">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg form-control-search pe-5 border-2"
                                        placeholder="Search the products"
                                    />
                                    <span className="position-absolute top-50 end-0 translate-middle-y">
                                        <i className="bi bi-search fs-6 me-3" />
                                    </span>
                                </form>
                                <div className="search-keywords mt-4">
                                    <h5 className="mb-3">Top searches keywords</h5>
                                    <div className="d-flex align-items-center flex-nowrap gap-2 overflow-x-auto">
                                        <button
                                            type="button"
                                            className="btn border border-2 px-4 rounded-5 flex-shrink-0"
                                        >
                                            shirts
                                        </button>
                                        <button
                                            type="button"
                                            className="btn border border-2 px-4 rounded-5 flex-shrink-0"
                                        >
                                            jeans
                                        </button>
                                        <button
                                            type="button"
                                            className="btn border border-2 px-4 rounded-5 flex-shrink-0"
                                        >
                                            shoes
                                        </button>
                                        <button
                                            type="button"
                                            className="btn border border-2 px-4 rounded-5 flex-shrink-0"
                                        >
                                            women fashion
                                        </button>
                                        <button
                                            type="button"
                                            className="btn border border-2 px-4 rounded-5 flex-shrink-0"
                                        >
                                            men shirts
                                        </button>
                                        <button
                                            type="button"
                                            className="btn border border-2 px-4 rounded-5 flex-shrink-0"
                                        >
                                            laptops
                                        </button>
                                        <button
                                            type="button"
                                            className="btn border border-2 px-4 rounded-5 flex-shrink-0"
                                        >
                                            sneakers
                                        </button>
                                        <button
                                            type="button"
                                            className="btn border border-2 px-4 rounded-5 flex-shrink-0"
                                        >
                                            dressess
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-body p-4">
                                <div className="recently-viewed">
                                    <h5 className="mb-3">Recently viewed products</h5>
                                    <div className="d-flex flex-column gap-3">
                                        <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-3 border p-3 rounded-3">
                                            <a href="javascript:;">
                                                <img
                                                    src={pro1}
                                                    className="rounded-3"
                                                    width={100}
                                                    alt=""
                                                />
                                            </a>
                                            <div className="flex-grow-1">
                                                <h4 className="mb-1">$149</h4>
                                                <p className="mb-0">Light Gray Formal Shirt</p>
                                                <div className="ratings fs-6 text-warning">
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                </div>
                                            </div>
                                            <div className="d-grid gap-2">
                                                <a
                                                    href="javascript:;"
                                                    className="btn btn-dark border border-dark px-4"
                                                >
                                                    Buy Now
                                                </a>
                                                <a href="javascript:;" className="btn btn-light border px-4">
                                                    Go To shop
                                                </a>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-3 border p-3 rounded-3">
                                            <a href="javascript:;">
                                                <img
                                                    src={pro2}
                                                    className="rounded-3"
                                                    width={100}
                                                    alt=""
                                                />
                                            </a>
                                            <div className="flex-grow-1">
                                                <h4 className="mb-1">$479</h4>
                                                <p className="mb-0">Light Gray Formal Shirt</p>
                                                <div className="ratings fs-6 text-warning">
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                </div>
                                            </div>
                                            <div className="d-grid gap-2">
                                                <a
                                                    href="javascript:;"
                                                    className="btn btn-dark border border-dark px-4"
                                                >
                                                    Buy Now
                                                </a>
                                                <a href="javascript:;" className="btn btn-light border px-4">
                                                    Go To shop
                                                </a>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-3 border p-3 rounded-3">
                                            <a href="javascript:;">
                                                <img
                                                    src={pro3}
                                                    className="rounded-3"
                                                    width={100}
                                                    alt=""
                                                />
                                            </a>
                                            <div className="flex-grow-1">
                                                <h4 className="mb-1">$359</h4>
                                                <p className="mb-0">Light Gray Formal Shirt</p>
                                                <div className="ratings fs-6 text-warning">
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                </div>
                                            </div>
                                            <div className="d-grid gap-2">
                                                <a
                                                    href="javascript:;"
                                                    className="btn btn-dark border border-dark px-4"
                                                >
                                                    Buy Now
                                                </a>
                                                <a href="javascript:;" className="btn btn-light border px-4">
                                                    Go To shop
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end search modal */}

                {/* close */}
                {/* WhatsApp Fixed Button */}
                <a
                    href="https://wa.me/917337604842"
                    target="_blank"
                    className="position-fixed text-white bg-success rounded-circle d-flex justify-content-center align-items-center"
                    style={{
                        top: "50%",
                        right: 20,
                        width: 50,
                        height: 50,
                        zIndex: 999,
                        transform: "translateY(-50%)"
                    }}
                >
                    <i className="bi bi-whatsapp" style={{ fontSize: 24 }} />
                </a>
            </>

        </>
    );
};

export default Footer;

