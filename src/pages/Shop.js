import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import pro1 from '../assets/images/common/pro-1.jpeg';
import pro2 from '../assets/images/common/pro-2.jpeg';
import pro3 from '../assets/images/common/pro-3.jpeg';
import pro4 from '../assets/images/common/pro-4.jpeg';
import pro5 from '../assets/images/common/pro-5.jpeg';
import pro6 from '../assets/images/common/pro-6.jpeg';

const Shop = () => {
    return (
        <>
            <Header/>
            <main className="main-content">
                {/*start breadcrumb*/}
                <section className="py-4 section-breadcrumb">
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
                <section className="py-5 shop-page-section">
                    <div className="container px-3">
                        <div className="row g-lg-4">
                            <div className="col-12 col-lg-3">
                                <button
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasFilter"
                                    className="btn btn-dark d-lg-none btn-filter-mobile rounded-bottom-0 d-flex align-items-center gap-2 px-4"
                                >
                                    <i className="bi bi-funnel" />
                                    <span>Filter</span>
                                </button>
                                <nav className="navbar navbar-expand-lg p-0">
                                    <div
                                        className="offcanvas offcanvas-start"
                                        tabIndex={-1}
                                        id="offcanvasFilter"
                                        aria-labelledby="offcanvasFilterLabel"
                                    >
                                        <div className="offcanvas-header">
                                            <h5 className="offcanvas-title" id="offcanvasFilterLabel">
                                                Filter
                                            </h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="offcanvas"
                                                aria-label="Close"
                                            />
                                        </div>
                                        <div className="offcanvas-body">
                                            <div className="shop-filters">
                                                <div className="card mb-4 rounded-3 border">
                                                    <div className="card-body">
                                                        <div className="selected-fillters">
                                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                                <h6 className="mb-0">Filter</h6>
                                                                <a
                                                                    href="javascript:;"
                                                                    className="link-secondary text-decoration-underline font-14"
                                                                >
                                                                    Clear all
                                                                </a>
                                                            </div>
                                                            <div className="d-flex align-items-center flex-wrap gap-2">
                                                                <button className="btn btn-sm border btn-outline-dark px-3 d-flex align-items-center gap-1 rounded-5">
                                                                    <span>Shirts</span>
                                                                    <i className="bi bi-x-lg" />
                                                                </button>
                                                                <button className="btn btn-sm border btn-outline-dark px-3 d-flex align-items-center gap-1 rounded-5">
                                                                    <span>Jeans</span>
                                                                    <i className="bi bi-x-lg" />
                                                                </button>
                                                                <button className="btn btn-sm border btn-outline-dark px-3 d-flex align-items-center gap-1 rounded-5">
                                                                    <span>M</span>
                                                                    <i className="bi bi-x-lg" />
                                                                </button>
                                                                <button className="btn btn-sm border btn-outline-dark px-3 d-flex align-items-center gap-1 rounded-5">
                                                                    <span>L</span>
                                                                    <i className="bi bi-x-lg" />
                                                                </button>
                                                                <button className="btn btn-sm border btn-outline-dark px-3 d-flex align-items-center gap-1 rounded-5">
                                                                    <i className="bi bi-circle-fill text-danger" />
                                                                    <span>Red</span>
                                                                    <i className="bi bi-x-lg" />
                                                                </button>
                                                                <button className="btn btn-sm border btn-outline-dark px-3 d-flex align-items-center gap-1 rounded-5">
                                                                    <i className="bi bi-circle-fill text-primary" />
                                                                    <span>Blue</span>
                                                                    <i className="bi bi-x-lg" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card rounded-3 mb-4 border">
                                                    <div className="card-body p-4">
                                                        <div className="categories-filter">
                                                            <h5 className="mb-3">Categories</h5>
                                                            <div className="list-group list-group-flush mb-0 gap-2">
                                                                <a
                                                                    href="javascript::"
                                                                    className="list-group-item d-flex align-items-center justify-content-between p-0 border-bottom-0"
                                                                >
                                                                    <span className="category-name">Lorem Ipsum</span>
                                                                    <span className="category-number">279</span>
                                                                </a>
                                                                <a
                                                                    href="javascript::"
                                                                    className="list-group-item d-flex align-items-center justify-content-between p-0 border-bottom-0"
                                                                >
                                                                    <span className="category-name">Lorem Ipsum</span>
                                                                    <span className="category-number">287</span>
                                                                </a>
                                                                <a
                                                                    href="javascript::"
                                                                    className="list-group-item d-flex align-items-center justify-content-between p-0 border-bottom-0"
                                                                >
                                                                    <span className="category-name">Lorem Ipsum</span>
                                                                    <span className="category-number">348</span>
                                                                </a>
                                                                <a
                                                                    href="javascript::"
                                                                    className="list-group-item d-flex align-items-center justify-content-between p-0 border-bottom-0"
                                                                >
                                                                    <span className="category-name">Lorem Ipsum</span>
                                                                    <span className="category-number">663</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card rounded-3 mb-4 border">
                                                    <div className="card-body p-4">
                                                        <div className="price-filter">
                                                            <div id="slider-range" />
                                                            <div className="d-flex align-items-center justify-content-center gap-3">
                                                                <input
                                                                    className="form-control"
                                                                    type="number"
                                                                    min={0}
                                                                    max={9900}
                                                                    oninput="validity.valid||(value='0');"
                                                                    id="min_price"
                                                                />
                                                                <input
                                                                    className="form-control"
                                                                    type="number"
                                                                    min={0}
                                                                    max={10000}
                                                                    oninput="validity.valid||(value='10000');"
                                                                    id="max_price"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card rounded-3 mb-4 border">
                                                    <div className="card-body p-4">
                                                        <div className="size-filter">
                                                            <h5 className="mb-3">Size</h5>
                                                            <div className="product-size-list d-flex align-items-center flex-wrap gap-3">
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
                                                                        XS
                                                                    </label>
                                                                </div>
                                                                <div className="product-size-list-item">
                                                                    <input
                                                                        type="radio"
                                                                        className="btn-check"
                                                                        name="options-size"
                                                                        id="size-option2"
                                                                    />
                                                                    <label
                                                                        className="btn btn-outline-dark btn-product-size"
                                                                        htmlFor="size-option2"
                                                                    >
                                                                        S
                                                                    </label>
                                                                </div>
                                                                <div className="product-size-list-item">
                                                                    <input
                                                                        type="radio"
                                                                        className="btn-check"
                                                                        name="options-size"
                                                                        id="size-option3"
                                                                        defaultChecked=""
                                                                    />
                                                                    <label
                                                                        className="btn btn-outline-dark btn-product-size"
                                                                        htmlFor="size-option3"
                                                                    >
                                                                        M
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
                                                                        L
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
                                                                        XL
                                                                    </label>
                                                                </div>
                                                                <div className="product-size-list-item">
                                                                    <input
                                                                        type="radio"
                                                                        className="btn-check"
                                                                        name="options-size"
                                                                        id="size-option6"
                                                                    />
                                                                    <label
                                                                        className="btn btn-outline-dark btn-product-size"
                                                                        htmlFor="size-option6"
                                                                    >
                                                                        XXL
                                                                    </label>
                                                                </div>
                                                                <div className="product-size-list-item">
                                                                    <input
                                                                        type="radio"
                                                                        className="btn-check"
                                                                        name="options-size"
                                                                        id="size-option7"
                                                                    />
                                                                    <label
                                                                        className="btn btn-outline-dark btn-product-size"
                                                                        htmlFor="size-option7"
                                                                    >
                                                                        2XL
                                                                    </label>
                                                                </div>
                                                                <div className="product-size-list-item">
                                                                    <input
                                                                        type="radio"
                                                                        className="btn-check"
                                                                        name="options-size"
                                                                        id="size-option8"
                                                                    />
                                                                    <label
                                                                        className="btn btn-outline-dark border border-2 px-4 rounded-3"
                                                                        htmlFor="size-option8"
                                                                    >
                                                                        Free Size
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card rounded-3 mb-4 border">
                                                    <div className="card-body p-4">
                                                        <div className="stock-filter">
                                                            <h5 className="mb-3">Brands</h5>
                                                            <div className="form-check mb-2 align-items-center">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue=""
                                                                    id="flexCheckBrand1"
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="flexCheckBrand1"
                                                                >
                                                                    Nike (810)
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-2">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue=""
                                                                    id="flexCheckBrand2"
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="flexCheckBrand2"
                                                                >
                                                                    Puma (370)
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-2">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue=""
                                                                    id="flexCheckBrand3"
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="flexCheckBrand3"
                                                                >
                                                                    Levi's (361)
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-2">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue=""
                                                                    id="flexCheckBrand4"
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="flexCheckBrand4"
                                                                >
                                                                    Skechers (209)
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-2">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue=""
                                                                    id="flexCheckBrand5"
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="flexCheckBrand5"
                                                                >
                                                                    Reebok (965)
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-2">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue=""
                                                                    id="flexCheckBrand6"
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="flexCheckBrand6"
                                                                >
                                                                    Adidas (209)
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-2">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue=""
                                                                    id="flexCheckBrand7"
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="flexCheckBrand7"
                                                                >
                                                                    Louis Philippe (147)
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-0">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue=""
                                                                    id="flexCheckBrand8"
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="flexCheckBrand8"
                                                                >
                                                                    Van Heusen (92)
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card rounded-3 mb-4 border">
                                                    <div className="card-body p-4">
                                                        <div className="color-filter">
                                                            <h5 className="mb-3">Colors</h5>
                                                            <div className="product-colors">
                                                                <div className="form-check mb-2 align-items-center">
                                                                    <input
                                                                        className="form-check-input bg-primary"
                                                                        type="checkbox"
                                                                        defaultValue=""
                                                                        id="flexCheckBlue"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="flexCheckBlue"
                                                                    >
                                                                        Blue
                                                                    </label>
                                                                </div>
                                                                <div className="form-check mb-2">
                                                                    <input
                                                                        className="form-check-input bg-pink"
                                                                        type="checkbox"
                                                                        defaultValue=""
                                                                        id="flexCheckPink"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="flexCheckPink"
                                                                    >
                                                                        Pink
                                                                    </label>
                                                                </div>
                                                                <div className="form-check mb-2">
                                                                    <input
                                                                        className="form-check-input bg-orange"
                                                                        type="checkbox"
                                                                        defaultValue=""
                                                                        id="flexCheckOrange"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="flexCheckOrange"
                                                                    >
                                                                        Orange
                                                                    </label>
                                                                </div>
                                                                <div className="form-check mb-2">
                                                                    <input
                                                                        className="form-check-input bg-indigo"
                                                                        type="checkbox"
                                                                        defaultValue=""
                                                                        id="flexCheckIndigo"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="flexCheckIndigo"
                                                                    >
                                                                        Indigo
                                                                    </label>
                                                                </div>
                                                                <div className="form-check mb-2">
                                                                    <input
                                                                        className="form-check-input bg-black"
                                                                        type="checkbox"
                                                                        defaultValue=""
                                                                        id="flexCheckBlack"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="flexCheckBlack"
                                                                    >
                                                                        Black
                                                                    </label>
                                                                </div>
                                                                <div className="form-check mb-2">
                                                                    <input
                                                                        className="form-check-input bg-red"
                                                                        type="checkbox"
                                                                        defaultValue=""
                                                                        id="flexCheckRed"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="flexCheckRed"
                                                                    >
                                                                        Red
                                                                    </label>
                                                                </div>
                                                                <div className="form-check mb-2">
                                                                    <input
                                                                        className="form-check-input bg-green"
                                                                        type="checkbox"
                                                                        defaultValue=""
                                                                        id="flexCheckGreen"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="flexCheckGreen"
                                                                    >
                                                                        Green
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input
                                                                        className="form-check-input bg-yellow"
                                                                        type="checkbox"
                                                                        defaultValue=""
                                                                        id="flexCheckYellow"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="flexCheckYellow"
                                                                    >
                                                                        Yellow
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card rounded-3 mb-0 border">
                                                    <div className="card-body p-4">
                                                        <div className="stock-filter">
                                                            <h5 className="mb-3">Availability</h5>
                                                            <div className="form-check mb-2 align-items-center">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue=""
                                                                    id="flexCheckInstock"
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="flexCheckInstock"
                                                                >
                                                                    In stock
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-2">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue=""
                                                                    id="flexCheckOutofStock"
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="flexCheckOutofStock"
                                                                >
                                                                    Out of stock
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-2">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue=""
                                                                    id="flexCheckOnSale"
                                                                    defaultChecked=""
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="flexCheckOnSale"
                                                                >
                                                                    On Sale
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-0">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue=""
                                                                    id="flexCheckFreedelivery"
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="flexCheckFreedelivery"
                                                                >
                                                                    Free delivery
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end filters*/}
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-12 col-lg-9">
                                <div className="shop-products">
                                    <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 gap-sm-0 mb-4">
                                        <div>
                                            <p className="mb-0">
                                                Found <span className="fw-semibold">68</span> items
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <p className="mb-0 fw-semibold">Sort by:</p>
                                            <div className="dropdown">
                                                <a
                                                    className="btn btn-outline-dark border dropdown-toggle dropdown-toggle-nocaret d-flex align-items-center justify-content-between px-3 w-220"
                                                    href="javascript:;"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    Best Selling
                                                    <span>
                                                        <i className="bi bi-chevron-down" />
                                                    </span>
                                                </a>
                                                <ul className="dropdown-menu p-2 w-220">
                                                    <li>
                                                        <a
                                                            className="dropdown-item rounded"
                                                            href="javascript:;"
                                                        >
                                                            Trending
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item rounded"
                                                            href="javascript:;"
                                                        >
                                                            New Arrivals
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item rounded"
                                                            href="javascript:;"
                                                        >
                                                            Popularity
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item rounded"
                                                            href="javascript:;"
                                                        >
                                                            Price: Low to High
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item rounded"
                                                            href="javascript:;"
                                                        >
                                                            Price: Hight to Low
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4">
                                        <div className="col">
                                            <div className="product-card rounded-3">
                                                <div className="d-flex flex-column gap-3">
                                                    <div className="position-relative">
                                                        <a href="/product-detail">
                                                            <img
                                                                src={pro1}
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
                                                                <a href="javascript:;" className="btn btn-action">
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
                                            <div className="product-card rounded-3">
                                                <div className="d-flex flex-column gap-3">
                                                    <div className="position-relative">
                                                        <div className="discount-ribben position-absolute top-0 start-0 m-3">
                                                            10%
                                                        </div>
                                                        <a href="/product-detail">
                                                            <img
                                                                src={pro2}
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
                                                                <a href="javascript:;" className="btn btn-action">
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
                                            <div className="product-card rounded-3">
                                                <div className="d-flex flex-column gap-3">
                                                    <div className="position-relative">
                                                        <div className="discount-ribben position-absolute top-0 start-0 m-3">
                                                            10%
                                                        </div>
                                                        <a href="/product-detail">
                                                            <img
                                                                 src={pro3}
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
                                                                <a href="javascript:;" className="btn btn-action">
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
                                            <div className="product-card rounded-3">
                                                <div className="d-flex flex-column gap-3">
                                                    <div className="position-relative">
                                                        <div className="discount-ribben position-absolute top-0 start-0 m-3">
                                                            10%
                                                        </div>
                                                        <a href="/product-detail">
                                                            <img
                                                                src={pro4}
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
                                                                <a href="javascript:;" className="btn btn-action">
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
                                            <div className="product-card rounded-3">
                                                <div className="d-flex flex-column gap-3">
                                                    <div className="position-relative">
                                                        <div className="discount-ribben position-absolute top-0 start-0 m-3">
                                                            10%
                                                        </div>
                                                        <a href="/product-detail">
                                                            <img
                                                                src={pro5}
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
                                                                <a href="javascript:;" className="btn btn-action">
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
                                            <div className="product-card rounded-3">
                                                <div className="d-flex flex-column gap-3">
                                                    <div className="position-relative">
                                                        <div className="discount-ribben position-absolute top-0 start-0 m-3">
                                                            10%
                                                        </div>
                                                        <a href="/product-detail">
                                                            <img
                                                                src={pro1}
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
                                                                <a href="javascript:;" className="btn btn-action">
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
                                            <div className="product-card rounded-3">
                                                <div className="d-flex flex-column gap-3">
                                                    <div className="position-relative">
                                                        <div className="discount-ribben position-absolute top-0 start-0 m-3">
                                                            10%
                                                        </div>
                                                        <a href="/product-detail">
                                                            <img
                                                                src={pro1}
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
                                                                <a href="javascript:;" className="btn btn-action">
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
                                            <div className="product-card rounded-3">
                                                <div className="d-flex flex-column gap-3">
                                                    <div className="position-relative">
                                                        <div className="discount-ribben position-absolute top-0 start-0 m-3">
                                                            10%
                                                        </div>
                                                        <a href="/product-detail">
                                                            <img
                                                                src={pro2}
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
                                                                <a href="javascript:;" className="btn btn-action">
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
                                            <div className="product-card rounded-3">
                                                <div className="d-flex flex-column gap-3">
                                                    <div className="position-relative">
                                                        <div className="discount-ribben position-absolute top-0 start-0 m-3">
                                                            10%
                                                        </div>
                                                        <a href="/product-detail">
                                                            <img
                                                               src={pro3}
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
                                                                <a href="javascript:;" className="btn btn-action">
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
                                    </div>
                                    {/*end row*/}
                                    {/*pagination*/}
                                    <div className="page-pagination">
                                        <nav className="mt-4">
                                            <ul className="pagination justify-content-center">
                                                <li className="page-item">
                                                    <a className="page-link" href="javascript:;">
                                                        <i className="bi bi-chevron-double-left" />
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="javascript:;">
                                                        1
                                                    </a>
                                                </li>
                                                <li className="page-item active">
                                                    <a className="page-link" href="javascript:;">
                                                        2
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="javascript:;">
                                                        3
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="javascript:;">
                                                        4
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="javascript:;">
                                                        5
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="javascript:;">
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
                </section>
                {/*end shop*/}
            </main>
            {/*end main content*/}
            <Footer/>
        </>

    );
};

export default Shop;