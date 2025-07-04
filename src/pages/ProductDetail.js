import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import pro1 from '../assets/images/common/pro-1.jpeg';
import pro2 from '../assets/images/common/pro-2.jpeg';
import pro3 from '../assets/images/common/pro-3.jpeg';
import pro4 from '../assets/images/common/pro-4.jpeg';
import pro5 from '../assets/images/common/pro-5.jpeg';
import pro6 from '../assets/images/common/pro-6.jpeg';
import RecommendedProductsSlider from '../components/RecommendedProductsSlider';

const ProductDetail = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Header />
            {/*start main content*/}
            <main className="main-content">
                {/*start breadcrumb*/}
                <section className="py-4 section-breadcrumb">
                    <div className="container px-3">
                        <h2 className="d-none">Product Details</h2>
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
                                        shop
                                    </a>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right" />
                                </li>
                                <li className="breadcrumb-item breadcrumb-active">
                                    Product Detail
                                </li>
                            </ol>
                        </nav>
                    </div>
                </section>
                {/*end breadcrumb*/}
                {/*start product details*/}
                <section className="py-5 product-details">
                    <div className="container px-3">
                        <div className="row g-4 g-lg-5">
                            <div className="col-12 col-lg-6">
                                <div className="product-images">
                                    {/* Main Swiper */}
                                    <Swiper
                                        modules={[Navigation, Thumbs]}
                                        navigation
                                        thumbs={{ swiper: thumbsSwiper }}
                                        spaceBetween={10}
                                        className="product-images-swiper"
                                    >
                                        <SwiperSlide>
                                            <img src={pro1} className="rounded-3" alt="Product 1" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={pro2} className="rounded-3" alt="Product 2" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={pro3} className="rounded-3" alt="Product 3" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={pro4} className="rounded-3" alt="Product 4" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={pro5} className="rounded-3" alt="Product 5" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={pro6} className="rounded-3" alt="Product 6" />
                                        </SwiperSlide>
                                    </Swiper>

                                    {/* Thumbnail Swiper */}
                                    <Swiper
                                        onSwiper={setThumbsSwiper}
                                        modules={[Thumbs]}
                                        slidesPerView={4}
                                        spaceBetween={10}
                                        watchSlidesProgress
                                        className="product-images-swiper-thumbnail mt-3"
                                    >
                                        <SwiperSlide>
                                            <img src={pro5} className="rounded-3" alt="Thumb 1" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={pro6} className="rounded-3" alt="Thumb 2" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={pro4} className="rounded-3" alt="Thumb 3" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={pro1} className="rounded-3" alt="Thumb 4" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={pro1} className="rounded-3" alt="Thumb 5" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={pro1} className="rounded-3" alt="Thumb 6" />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="product-details">
                                    <p className="mb-1">Women Topwar</p>
                                    <h2 className="mb-0">Solid Round Neck T-shirt</h2>
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
                                        perfect for casual or layered looks. Made from soft, breathable
                                        fabric, it provides all-day comfort and effortless fashion.
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
                                        <p className="mb-2 d-flex align-items-center justify-content-between">
                                            Select Size{" "}
                                            {/* <a
                                                href="javascript:;"
                                                className="btn btn-sm text-decoration-underline"
                                                data-bs-toggle="modal"
                                                data-bs-target="#sizeGuidehModal"
                                            >
                                                Size Guide
                                            </a> */}
                                        </p>
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
                                        <div className="input-group input-group-lg">
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
                                                <span className="fw-semibold">Estimated Delivery:</span>
                                                International: 10-15 days | United States: 8-10 days
                                            </span>
                                        </p>
                                        <p className="mb-0 mt-3 d-flex align-items-center gap-2 font-14">
                                            <i className="bi bi-share" />
                                            <span>Share this product</span>
                                        </p>
                                        <div className="mt-2 d-flex align-items-center gap-2 product-share-link">
                                            <a
                                                href="javascript:;"
                                                className="btn btn-sm btn-outline-dark border"
                                            >
                                                <i className="bi bi-facebook" />
                                            </a>
                                            <a
                                                href="javascript:;"
                                                className="btn btn-sm btn-outline-dark border"
                                            >
                                                <i className="bi bi-twitter-x" />
                                            </a>
                                            <a
                                                href="javascript:;"
                                                className="btn btn-sm btn-outline-dark border"
                                            >
                                                <i className="bi bi-linkedin" />
                                            </a>
                                            <a
                                                href="javascript:;"
                                                className="btn btn-sm btn-outline-dark border"
                                            >
                                                <i className="bi bi-instagram" />
                                            </a>
                                            <a
                                                href="javascript:;"
                                                className="btn btn-sm btn-outline-dark border"
                                            >
                                                <i className="bi bi-snapchat" />
                                            </a>
                                        </div>
                                    </div>
                                    <hr className="my-4 border-dark border-opacity-50" />
                                    <div className="">
                                        <p className="mb-2 font-14">
                                            <span className="fw-semibold">SKU:</span> BA584726
                                        </p>
                                        <p className="mb-2 font-14">
                                            <span className="fw-semibold">Vendor:</span> Michle Deo
                                        </p>
                                        <p className="mb-2 font-14">
                                            <span className="fw-semibold">Available:</span> Instock
                                        </p>
                                        <p className="mb-2 font-14">
                                            <span className="fw-semibold">Categories:</span>
                                            <a href="javascript:;" className="link-secondary">
                                                Fashion
                                            </a>
                                            ,
                                            <a href="javascript:;" className="link-secondary">
                                                Jeans
                                            </a>
                                            ,
                                            <a href="javascript:;" className="link-secondary">
                                                Clothes
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end row*/}
                        <div className="tabular-product-details mt-5">
                            <div className="table-responsive">
                                <ul className="nav nav-pills mb-4 overflow-x-auto justify-content-center gap-3">
                                    <li className="nav-item">
                                        <button
                                            className="nav-link rounded-5 px-5 fw-semibold"
                                            data-bs-toggle="pill"
                                            data-bs-target="#description"
                                            type="button"
                                        >
                                            Description
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className="nav-link active rounded-5 px-5 fw-semibold"
                                            data-bs-toggle="pill"
                                            data-bs-target="#customer-reviews"
                                            type="button"
                                        >
                                            Customer Reviews
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className="nav-link rounded-5 px-5 fw-semibold"
                                            data-bs-toggle="pill"
                                            data-bs-target="#shipping-returns"
                                            type="button"
                                        >
                                            Shipping Returns
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className="nav-link rounded-5 px-5 fw-semibold"
                                            data-bs-toggle="pill"
                                            data-bs-target="#return-policy"
                                            type="button"
                                        >
                                            Return Policy
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content border p-4 rounded-3">
                                <div className="tab-pane fade show" id="description">
                                    <h5>Solid Round Neck T-shirt – Classic Comfort &amp; Style</h5>
                                    <p className="text-para">
                                        Upgrade your wardrobe with our Solid Round Neck T-shirt, a
                                        must-have staple for everyday wear. Designed for both comfort
                                        and versatility, this t-shirt is crafted from premium-quality
                                        fabric, ensuring a soft and breathable feel against your skin.
                                        Whether you're dressing up for a casual outing or layering it
                                        under a jacket for a stylish look, this t-shirt is the perfect
                                        choice.
                                    </p>
                                    <p className="text-para">
                                        With its minimalist design and classic round neckline, this
                                        t-shirt offers a timeless appeal that suits all occasions. The
                                        high-quality stitching provides durability, making it ideal for
                                        daily use. It pairs effortlessly with jeans, joggers, or shorts,
                                        giving you a relaxed yet trendy look. The fabric is
                                        moisture-wicking, keeping you cool and comfortable throughout
                                        the day.
                                    </p>
                                    <p className="text-para">
                                        Available in multiple colors and sizes, the Solid Round Neck
                                        T-shirt is a wardrobe essential for men and women alike. Whether
                                        you're hitting the gym, going for a casual hangout, or just
                                        lounging at home, this t-shirt delivers both style and
                                        functionality.
                                    </p>
                                    <h6>Features:</h6>
                                    <ul>
                                        <li className="text-para">
                                            Premium cotton/polyester blend for comfort
                                        </li>
                                        <li className="text-para">Breathable and lightweight fabric</li>
                                        <li className="text-para">
                                            Classic round neck design for a timeless look
                                        </li>
                                        <li className="text-para">
                                            Durable stitching for long-lasting wear
                                        </li>
                                        <li className="text-para">
                                            Available in multiple colors and sizes
                                        </li>
                                        <li className="text-para">Easy to wash and maintain</li>
                                    </ul>
                                </div>
                                <div className="tab-pane fade show active" id="customer-reviews">
                                    <div>
                                        <h5 className="mb-4">Customer Reviews</h5>
                                        <div className="hstack gap-md-5 gap-4 flex-column flex-lg-row">
                                            <div className="text-center flex-shrink-0">
                                                <div id="rating-number">
                                                    <h2 className="mb-2">4.8</h2>
                                                    <div className="rating-star">
                                                        <i className="bi bi-star-fill text-warning" />
                                                        <i className="bi bi-star-fill text-warning" />
                                                        <i className="bi bi-star-fill text-warning" />
                                                        <i className="bi bi-star-fill text-warning" />
                                                        <i className="bi bi-star-fill text-warning" />
                                                    </div>
                                                    <p className="mb-0">(759 Ratings)</p>
                                                </div>
                                            </div>
                                            <div className="vr d-none d-lg-flex" />
                                            <div className="w-100">
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="bi bi-star-fill text-warning" />
                                                    <span>5</span>
                                                    <div
                                                        className="progress w-100"
                                                        role="progressbar"
                                                        aria-valuenow={75}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                        style={{ height: 7 }}
                                                    >
                                                        <div
                                                            className="progress-bar bg-dark"
                                                            style={{ width: "75%" }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="bi bi-star-fill text-warning" />
                                                    <span>4</span>
                                                    <div
                                                        className="progress w-100"
                                                        role="progressbar"
                                                        aria-valuenow={75}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                        style={{ height: 7 }}
                                                    >
                                                        <div
                                                            className="progress-bar bg-dark"
                                                            style={{ width: "55%" }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="bi bi-star-fill text-warning" />
                                                    <span>3</span>
                                                    <div
                                                        className="progress w-100"
                                                        role="progressbar"
                                                        aria-valuenow={75}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                        style={{ height: 7 }}
                                                    >
                                                        <div
                                                            className="progress-bar bg-dark"
                                                            style={{ width: "35%" }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="bi bi-star-fill text-warning" />
                                                    <span>2</span>
                                                    <div
                                                        className="progress w-100"
                                                        role="progressbar"
                                                        aria-valuenow={75}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                        style={{ height: 7 }}
                                                    >
                                                        <div
                                                            className="progress-bar bg-dark"
                                                            style={{ width: "15%" }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="bi bi-star-fill text-warning" />
                                                    <span>1</span>
                                                    <div
                                                        className="progress w-100"
                                                        role="progressbar"
                                                        aria-valuenow={75}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                        style={{ height: 7 }}
                                                    >
                                                        <div
                                                            className="progress-bar bg-dark"
                                                            style={{ width: "10%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vr d-none d-lg-flex" />
                                            {/* <div className="leave-a-rating flex-shrink-0">
                                                <a
                                                    href="javascript:;"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#reviewModal"
                                                    className="btn btn-outline-dark px-4 py-2"
                                                >
                                                    Write a Review
                                                </a>
                                            </div> */}
                                        </div>
                                        <div className="customer-reviews-list mt-5">
                                            <div className="customer-reviews-list-item border-top py-4">
                                                <div className="d-flex align-items-start gap-3">
                                                    <div className="customer-pic">
                                                        <span>M</span>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="rating-star font-14 mb-1">
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star-fill text-warning" />
                                                        </div>
                                                        <h6 className="mb-0 customer-name">Michle Jhon</h6>
                                                    </div>
                                                    <div className="review-date">
                                                        <span>15 january 2025</span>
                                                    </div>
                                                </div>
                                                <div className="review-description mt-2">
                                                    <p className="mb-0">
                                                        I recently purchased the Solid Round Neck T-shirt, and I
                                                        must say, I’m absolutely impressed! The fabric is
                                                        incredibly soft, breathable, and feels amazing on the
                                                        skin. It’s lightweight yet durable, making it perfect
                                                        for everyday wear. The stitching is top-notch, and even
                                                        after multiple washes, the t-shirt retains its shape and
                                                        color without any fading or shrinking.
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-end gap-3">
                                                        <span>Helpful?</span>
                                                        <button
                                                            type="button"
                                                            className="btn btn-sm btn-light rounded-3 border d-flex align-items-center gap-1"
                                                        >
                                                            <i className="bi bi-hand-thumbs-up" />
                                                            <span>6</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="customer-reviews-list-item border-top py-4">
                                                <div className="d-flex align-items-start gap-3">
                                                    <div className="customer-pic">
                                                        <span>J</span>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="rating-star font-14 mb-1">
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star-fill text-warning" />
                                                        </div>
                                                        <h6 className="mb-0 customer-name">James</h6>
                                                    </div>
                                                    <div className="review-date">
                                                        <span>18 january 2025</span>
                                                    </div>
                                                </div>
                                                <div className="review-description mt-2">
                                                    <p className="mb-0">
                                                        The fit is just right—not too tight, not too
                                                        loose—giving a comfortable and stylish look. The classic
                                                        round neck design makes it easy to pair with jeans,
                                                        joggers, or even layer under a jacket. Whether for
                                                        casual outings, gym sessions, or lounging at home, this
                                                        t-shirt never disappoints.
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-end gap-3">
                                                        <span>Helpful?</span>
                                                        <button
                                                            type="button"
                                                            className="btn btn-sm btn-light rounded-3 border d-flex align-items-center gap-1"
                                                        >
                                                            <i className="bi bi-hand-thumbs-up" />
                                                            <span>8</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="customer-reviews-list-item border-top py-4 border-bottom">
                                                <div className="d-flex align-items-start gap-3">
                                                    <div className="customer-pic">
                                                        <span>T</span>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="rating-star font-14 mb-1">
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star-fill text-warning" />
                                                        </div>
                                                        <h6 className="mb-0 customer-name">Thomas</h6>
                                                    </div>
                                                    <div className="review-date">
                                                        <span>20 january 2025</span>
                                                    </div>
                                                </div>
                                                <div className="review-description mt-2">
                                                    <p className="mb-0">
                                                        Overall, this is a high-quality, stylish, and versatile
                                                        t-shirt that I’d highly recommend to anyone looking for
                                                        a perfect blend of comfort and durability. Definitely a
                                                        must-have in every wardrobe! Will be buying more colors
                                                        soon! 🎉🔥
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-end gap-3">
                                                        <span>Helpful?</span>
                                                        <button
                                                            type="button"
                                                            className="btn btn-sm btn-light rounded-3 border d-flex align-items-center gap-1"
                                                        >
                                                            <i className="bi bi-hand-thumbs-up" />
                                                            <span>9</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <a
                                                    href="javascript:;"
                                                    className="btn btn-outline-dark px-4 py-2"
                                                >
                                                    See All Reviews
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade show" id="shipping-returns">
                                    <h5 className="mb-3">Shipping Information:</h5>
                                    <ul>
                                        <li>
                                            <b>Processing Time:</b>Orders are processed within 1-2
                                            business days.
                                        </li>
                                        <li>
                                            <b>Delivery Time:</b>Standard shipping takes 5-7 business
                                            days, while express shipping takes 2-3 business days.
                                        </li>
                                        <li>
                                            <b>Shipping Charges:</b>Shipping costs are calculated at
                                            checkout based on your location and selected shipping method.
                                        </li>
                                        <li>
                                            <b>Tracking:</b>Once your order is shipped, you will receive a
                                            tracking number via email.
                                        </li>
                                    </ul>
                                    <h5 className="mb-3">Return &amp; Exchange Policy:</h5>
                                    <ul className="mb-0">
                                        <li>
                                            <b>Eligibility:</b>Returns and exchanges are accepted within 7
                                            days of delivery. The item must be unworn, unwashed, and in
                                            its original packaging with tags intact..
                                        </li>
                                        <li>
                                            <b>Refund Process:</b>Once we receive and inspect the returned
                                            item, refunds will be processed within 5-7 business days.
                                            Refunds will be issued to the original payment method.
                                        </li>
                                        <li>
                                            <b>Exchange:</b>If you received a defective or incorrect
                                            product, we will replace it at no extra cost.
                                        </li>
                                        <li>
                                            <b>Return Shipping:</b>Customers are responsible for return
                                            shipping costs unless the item is defective or incorrect.
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-pane fade show" id="return-policy">
                                    <h5>Return Policy</h5>
                                    <p>
                                        We want you to be completely satisfied with your purchase! If
                                        you're not happy with your order, we offer a hassle-free return
                                        policy.
                                    </p>
                                    <h5 className="mb-3">Eligibility for Returns:</h5>
                                    <ul>
                                        <li>Returns are accepted within 7 days of delivery.</li>
                                        <li>
                                            Items must be unused, unwashed, and in their original
                                            packaging with all tags intact.
                                        </li>
                                        <li>
                                            Returns are not accepted for final sale or clearance items
                                            unless they arrive damaged or defective.
                                        </li>
                                    </ul>
                                    <h5 className="mb-3">How to Initiate a Return:</h5>
                                    <ol>
                                        <li>Contact our support team at [Your Email/Support Page].</li>
                                        <li>Provide your order number and reason for the return.</li>
                                        <li>We will guide you through the return shipping process.</li>
                                    </ol>
                                    <h5 className="mb-3">Refund &amp; Exchange Process:</h5>
                                    <ul>
                                        <li>
                                            Once we receive and inspect the item, we will process your
                                            refund within 5-7 business days.
                                        </li>
                                        <li>Refunds will be issued to the original payment method.</li>
                                        <li>
                                            If you prefer an exchange, we will ship the replacement item
                                            once the return is approved.
                                        </li>
                                    </ul>
                                    <h5 className="mb-3">Return Shipping:</h5>
                                    <ul>
                                        <li>
                                            Customers are responsible for return shipping costs unless the
                                            item is defective or incorrect.
                                        </li>
                                        <li>
                                            We recommend using a trackable shipping method to ensure safe
                                            delivery.
                                        </li>
                                        <li>
                                            For any assistance, feel free to reach out to our customer
                                            support team.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*end product details*/}
                {/*start Recommended product*/}
                 <RecommendedProductsSlider/>
                {/*end Recommended product*/}
            </main>
            {/*end main content*/}

            <Footer />
        </>

    );
};

export default ProductDetail;