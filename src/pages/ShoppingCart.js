import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import pro1 from '../assets/images/common/pro-1.jpeg';
import pro2 from '../assets/images/common/pro-2.jpeg';
import pro3 from '../assets/images/common/pro-3.jpeg';
import pro4 from '../assets/images/common/pro-4.jpeg';
import pro5 from '../assets/images/common/pro-5.jpeg';
import pro6 from '../assets/images/common/pro-6.jpeg';

const ShoppingCart = () => {
    return (
        <>
            <Header />
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
                                        Cart
                                    </a>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right" />
                                </li>
                                <li className="breadcrumb-item breadcrumb-active">Cart</li>
                            </ol>
                        </nav>
                    </div>
                </section>
                {/*start cart*/}
                <section className="py-5">
                    <div className="container px-3">
                        <div className="row g-4 g-lg-5">
                            <div className="col-12 col-xl-8">
                                <div className="cart-list d-flex flex-column gap-4">
                                    <div className="cart-list-item d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="cart-img">
                                                <img
                                                    src={pro1}
                                                    className="rounded-3"
                                                    width={80}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="cart-product-info">
                                                <h5 className="product-name fs-6">Venic black pant</h5>
                                                <div className="mt-3 d-flex align-items-center gap-2">
                                                    <select className="form-select form-select-sm border-2">
                                                        <option selected="">S</option>
                                                        <option value={1}>M</option>
                                                        <option value={2}>L</option>
                                                        <option value={3}>XL</option>
                                                    </select>
                                                    <select className="form-select form-select-sm border-2">
                                                        <option selected="">Red</option>
                                                        <option value={1}>Blue</option>
                                                        <option value={2}>Green</option>
                                                        <option value={3}>Yellow</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cart-product-price">
                                            <p>Price</p>
                                            <h5 className="mb-0">₹129</h5>
                                        </div>
                                        <div className="cart-product-qty">
                                            <p>Quantity</p>
                                            <input
                                                type="number"
                                                className="form-control form-control-sm rounded-3 border-2 w-25"
                                                min={0}
                                                defaultValue={1}
                                            />
                                        </div>
                                        <div className="btn border border-2 cart-product-btn-delete">
                                            <i className="bi bi-x-lg" />
                                        </div>
                                    </div>
                                    <div className="my-0 border-1 border-top" />
                                    <div className="cart-list-item d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="cart-img">
                                                <img
                                                    src={pro2}
                                                    className="rounded-3"
                                                    width={80}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="cart-product-info">
                                                <h5 className="product-name fs-6">Venic black pant</h5>
                                                <div className="mt-3 d-flex align-items-center gap-2">
                                                    <select className="form-select form-select-sm border-2">
                                                        <option selected="">S</option>
                                                        <option value={1}>M</option>
                                                        <option value={2}>L</option>
                                                        <option value={3}>XL</option>
                                                    </select>
                                                    <select className="form-select form-select-sm border-2">
                                                        <option selected="">Red</option>
                                                        <option value={1}>Blue</option>
                                                        <option value={2}>Green</option>
                                                        <option value={3}>Yellow</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cart-product-price">
                                            <p>Price</p>
                                            <h5 className="mb-0">₹247</h5>
                                        </div>
                                        <div className="cart-product-qty">
                                            <p>Quantity</p>
                                            <input
                                                type="number"
                                                className="form-control form-control-sm rounded-3 border-2 w-25"
                                                min={0}
                                                defaultValue={1}
                                            />
                                        </div>
                                        <div className="btn border border-2 cart-product-btn-delete">
                                            <i className="bi bi-x-lg" />
                                        </div>
                                    </div>
                                    <div className="my-0 border-1 border-top" />
                                    <div className="cart-list-item d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="cart-img">
                                                <img
                                                    src={pro3}
                                                    className="rounded-3"
                                                    width={80}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="cart-product-info">
                                                <h5 className="product-name fs-6">Venic black pant</h5>
                                                <div className="mt-3 d-flex align-items-center gap-2">
                                                    <select className="form-select form-select-sm border-2">
                                                        <option selected="">S</option>
                                                        <option value={1}>M</option>
                                                        <option value={2}>L</option>
                                                        <option value={3}>XL</option>
                                                    </select>
                                                    <select className="form-select form-select-sm border-2">
                                                        <option selected="">Red</option>
                                                        <option value={1}>Blue</option>
                                                        <option value={2}>Green</option>
                                                        <option value={3}>Yellow</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cart-product-price">
                                            <p>Price</p>
                                            <h5 className="mb-0">₹168</h5>
                                        </div>
                                        <div className="cart-product-qty">
                                            <p>Quantity</p>
                                            <input
                                                type="number"
                                                className="form-control form-control-sm rounded-3 border-2 w-25"
                                                min={0}
                                                defaultValue={1}
                                            />
                                        </div>
                                        <div className="btn border border-2 cart-product-btn-delete">
                                            <i className="bi bi-x-lg" />
                                        </div>
                                    </div>
                                    <div className="my-0 border-1 border-top" />
                                    <div className="cart-list-item d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="cart-img">
                                                <img
                                                    src={pro4}
                                                    className="rounded-3"
                                                    width={80}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="cart-product-info">
                                                <h5 className="product-name fs-6">Venic black pant</h5>
                                                <div className="mt-3 d-flex align-items-center gap-2">
                                                    <select className="form-select form-select-sm border-2">
                                                        <option selected="">S</option>
                                                        <option value={1}>M</option>
                                                        <option value={2}>L</option>
                                                        <option value={3}>XL</option>
                                                    </select>
                                                    <select className="form-select form-select-sm border-2">
                                                        <option selected="">Red</option>
                                                        <option value={1}>Blue</option>
                                                        <option value={2}>Green</option>
                                                        <option value={3}>Yellow</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cart-product-price">
                                            <p>Price</p>
                                            <h5 className="mb-0">₹139</h5>
                                        </div>
                                        <div className="cart-product-qty">
                                            <p>Quantity</p>
                                            <input
                                                type="number"
                                                className="form-control form-control-sm rounded-3 border-2 w-25"
                                                min={0}
                                                defaultValue={1}
                                            />
                                        </div>
                                        <div className="btn border border-2 cart-product-btn-delete">
                                            <i className="bi bi-x-lg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-4">
                                <div className="card border-0 rounded-4 bg-light">
                                    <div className="card-body">
                                        <div className="checkout-card p-2">
                                            <h4 className="mb-0">Order Summary</h4>
                                            <div className="my-4 border-1 border-top" />
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <p className="mb-0">Subtotal</p>
                                                <p className="mb-0">₹179.00</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <p className="mb-0">Discounts</p>
                                                <p className="mb-0 text-danger">-₹24.00</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <p className="mb-0">Shipping</p>
                                                <p className="mb-0">+₹16.00</p>
                                            </div>
                                            <div className="my-3 border-1 border-top" />
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <p className="mb-0 fs-5 fw-semibold">Total</p>
                                                <p className="mb-0 fs-5 fw-semibold">₹196.56</p>
                                            </div>
                                            <div className="form-check my-3">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="flexCheckDefault"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefault"
                                                >
                                                    I agree with the terms and conditions
                                                </label>
                                            </div>
                                            <div className="d-grid">
                                                <a
                                                    href="checkout.php"
                                                    className="btn btn-dark py-2 rounded-3"
                                                >
                                                    Proceed to checkout
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0 rounded-4 bg-light mt-4">
                                    <div className="card-body">
                                        <div className="checkout-promocode p-2">
                                            <p className="mb-2 fw-semibold">% Apply promo code</p>
                                            <div className="d-flex align-items-center gap-2">
                                                <input
                                                    type="text"
                                                    className="form-control border-2"
                                                    placeholder="Enter promo code"
                                                />
                                                <button className="btn btn-dark px-3" type="button">
                                                    Apply
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end row*/}
                    </div>
                </section>
                {/*end cart*/}
            </main>
            {/*end main content*/}


            <Footer />
        </>

    );
};

export default ShoppingCart;
