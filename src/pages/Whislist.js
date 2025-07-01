import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import pro1 from '../assets/images/common/pro-1.jpeg';
import pro2 from '../assets/images/common/pro-2.jpeg';
import pro3 from '../assets/images/common/pro-3.jpeg';
import pro4 from '../assets/images/common/pro-4.jpeg';
import pro5 from '../assets/images/common/pro-5.jpeg';
import pro6 from '../assets/images/common/pro-6.jpeg';

const Whislist = () => {


    return (
        <>
            <Header/>
            {/*start main content*/}
            <main className="main-content">
                {/*start breadcrumb*/}
                <section className="py-4 section-breadcrumb">
                    <div className="container px-3">
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
                                        Wishlist
                                    </a>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right" />
                                </li>
                                <li className="breadcrumb-item breadcrumb-active">Wishlist</li>
                            </ol>
                        </nav>
                    </div>
                </section>
                {/*end breadcrumb*/}
                {/*start shop*/}
                <section className="py-5 shop-page-section">
                    <div className="container px-3">
                        <div className="shop-wishlist">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 g-lg-5">
                                <div className="col">
                                    <div className="product-card rounded-3">
                                        <div className="d-flex flex-column gap-3">
                                            <div className="position-relative">
                                                <a href="javascript:;">
                                                    <img
                                                        src={pro1}
                                                        className="product-img img-fluid rounded-3"
                                                        alt=""
                                                    />
                                                </a>
                                                <div className="position-absolute top-0 end-0 m-3 product-actions">
                                                    <div className="d-flex flex-column gap-2">
                                                        <a href="javascript:;" className="btn btn-action">
                                                            <i className="bi bi-trash" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                                                    <a
                                                        href="javascript:;"
                                                        className="btn btn-dark rounded-5 d-flex align-items-center justify-content-center gap-2 py-2"
                                                    >
                                                        <i className="bi bi-basket2" />
                                                        <span>Add to Cart</span>
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
                                                <a href="javascript:;">
                                                    <img
                                                        src={pro2}
                                                        className="product-img img-fluid rounded-3"
                                                        alt=""
                                                    />
                                                </a>
                                                <div className="position-absolute top-0 end-0 m-3 product-actions">
                                                    <div className="d-flex flex-column gap-2">
                                                        <a href="javascript:;" className="btn btn-action">
                                                            <i className="bi bi-trash" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                                                    <a
                                                        href="javascript:;"
                                                        className="btn btn-dark rounded-5 d-flex align-items-center justify-content-center gap-2 py-2"
                                                    >
                                                        <i className="bi bi-basket2" />
                                                        <span>Add to Cart</span>
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
                                                <a href="javascript:;">
                                                    <img
                                                        src={pro3}
                                                        className="product-img img-fluid rounded-3"
                                                        alt=""
                                                    />
                                                </a>
                                                <div className="position-absolute top-0 end-0 m-3 product-actions">
                                                    <div className="d-flex flex-column gap-2">
                                                        <a href="javascript:;" className="btn btn-action">
                                                            <i className="bi bi-trash" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                                                    <a
                                                        href="javascript:;"
                                                        className="btn btn-dark rounded-5 d-flex align-items-center justify-content-center gap-2 py-2"
                                                    >
                                                        <i className="bi bi-basket2" />
                                                        <span>Add to Cart</span>
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
                                                <a href="javascript:;">
                                                    <img
                                                        src={pro4}
                                                        className="product-img img-fluid rounded-3"
                                                        alt=""
                                                    />
                                                </a>
                                                <div className="position-absolute top-0 end-0 m-3 product-actions">
                                                    <div className="d-flex flex-column gap-2">
                                                        <a href="javascript:;" className="btn btn-action">
                                                            <i className="bi bi-trash" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                                                    <a
                                                        href="javascript:;"
                                                        className="btn btn-dark rounded-5 d-flex align-items-center justify-content-center gap-2 py-2"
                                                    >
                                                        <i className="bi bi-basket2" />
                                                        <span>Add to Cart</span>
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
                            </div>
                            {/*end row*/}
                        </div>
                    </div>
                </section>
                {/*end shop*/}
            </main>
            {/*end main content*/}

            <Footer/>
        </>

    );
};

export default Whislist;
