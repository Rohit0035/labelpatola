import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Checkout = () => {
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
                                        Checkout
                                    </a>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right" />
                                </li>
                                <li className="breadcrumb-item breadcrumb-active">Checkout</li>
                            </ol>
                        </nav>
                    </div>
                </section>
                {/*end breadcrumb*/}
                <section className="checkout-section py-5">
                    <div className="container px-3">
                        <div className="row g-4 g-lg-5">
                            <div className="col-12 col-lg-6 mt-0">
                                <div className="checkout-card">
                                    <div className="mt-4 checkout-form p-4 border rounded-3">
                                        <h5 className="mb-4">Fill Your Informaition</h5>
                                        <div className="row g-4">
                                            <div className="col-12 col-lg-6">
                                                <label htmlFor="FirstName" className="form-label">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg border-2"
                                                    id="FirstName"
                                                    placeholder="First Name"
                                                />
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <label htmlFor="LastName" className="form-label">
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg border-2"
                                                    id="LastName"
                                                    placeholder="Last Name"
                                                />
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <label htmlFor="EmailId" className="form-label">
                                                    Email Id
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control form-control-lg border-2"
                                                    id="EmailId"
                                                    placeholder="Email Id"
                                                />
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <label htmlFor="PhoneNumber" className="form-label">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg border-2"
                                                    id="PhoneNumber"
                                                    placeholder="Phone Number"
                                                />
                                            </div>
                                            <div className="col-12 col-lg-12">
                                                <label htmlFor="SelectCountry" className="form-label">
                                                    Select Country
                                                </label>
                                                <select
                                                    className="form-select form-select-lg border-2"
                                                    id="SelectCountry"
                                                >
                                                    <option selected="">Austria</option>
                                                    <option value={1}>Belgium</option>
                                                    <option value={2}>Denmark</option>
                                                    <option value={3}>India</option>
                                                </select>
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <label htmlFor="TownCity" className="form-label">
                                                    Town/City
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg border-2"
                                                    id="TownCity"
                                                    placeholder="Town City"
                                                />
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <label htmlFor="Street" className="form-label">
                                                    Street
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg border-2"
                                                    id="TownCity"
                                                    placeholder="Street"
                                                />
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <label htmlFor="ChooseState" className="form-label">
                                                    Choose State
                                                </label>
                                                <select
                                                    className="form-select form-select-lg border-2"
                                                    id="ChooseState"
                                                >
                                                    <option selected="">Alabam</option>
                                                    <option value={1}>Georgia</option>
                                                    <option value={2}>Iowa</option>
                                                    <option value={3}>Nevada</option>
                                                </select>
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <label htmlFor="PostalCode" className="form-label">
                                                    Postal Code
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg border-2"
                                                    id="PostalCode"
                                                    placeholder="Postal Code"
                                                />
                                            </div>
                                            <div className="col-12 col-lg-12">
                                                <label htmlFor="WriteNote" className="form-label">
                                                    Write Note
                                                </label>
                                                <textarea
                                                    className="form-control border-2"
                                                    rows={4}
                                                    cols={4}
                                                    placeholder="Write Something..."
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        {/*end row*/}
                                    </div>
                                    <div className="mt-4 card-payment-method rounded-3 px-4 py-3 border">
                                        <div className="">
                                            <div
                                                className="form-check"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseCardDetails"
                                            >
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexRadioDefault1"
                                                >
                                                    Credit Card
                                                </label>
                                            </div>
                                            <div className="collapse" id="collapseCardDetails">
                                                <div className="mt-3">
                                                    <p>
                                                        Please make your payment directly to our bank account.
                                                        Your order will be shipped once the funds have been
                                                        successfully cleared.
                                                    </p>
                                                    <div className="card-details">
                                                        <div className="row g-4">
                                                            <div className="col-12 col-lg-12">
                                                                <label htmlFor="Nameoncard" className="form-label">
                                                                    Name on card
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control form-control-lg border-2"
                                                                    id="Nameoncard"
                                                                    placeholder="Name on card"
                                                                />
                                                            </div>
                                                            <div className="col-12 col-lg-12">
                                                                <label htmlFor="CardNumbers" className="form-label">
                                                                    Card Numbers
                                                                </label>
                                                                <div className="input-group input-group-lg">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control border-2"
                                                                        placeholder="Card Numbers"
                                                                    />
                                                                    <span className="input-group-text border-2 d-flex align-items-center  gap-3 bg-transparent">
                                                                        <img
                                                                            src="assets/images/gallery/payment/visa.png"
                                                                            width={40}
                                                                            alt=""
                                                                        />
                                                                        <img
                                                                            src="assets/images/gallery/payment/stripe.png"
                                                                            width={40}
                                                                            alt=""
                                                                        />
                                                                        <img
                                                                            src="assets/images/gallery/payment/money.png"
                                                                            width={40}
                                                                            alt=""
                                                                        />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-lg-6">
                                                                <label htmlFor="Date" className="form-label">
                                                                    Date
                                                                </label>
                                                                <input
                                                                    type="date"
                                                                    className="form-control form-control-lg border-2"
                                                                    id="Date"
                                                                />
                                                            </div>
                                                            <div className="col-12 col-lg-6">
                                                                <label htmlFor="CVV" className="form-label">
                                                                    CVV
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control form-control-lg border-2"
                                                                    id="CVV"
                                                                    placeholder="CVV"
                                                                />
                                                            </div>
                                                            <div className="col-12 col-lg-12">
                                                                <div className="form-check">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultValue=""
                                                                        id="SaveCardDetails"
                                                                        defaultChecked=""
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="SaveCardDetails"
                                                                    >
                                                                        Save Card Details
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/*end row*/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 paypal-payment-method border rounded-3 px-4 py-3">
                                        <div
                                            className="form-check"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapsePaypal"
                                        >
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="cash-on-delivery"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="cash-on-delivery"
                                            >
                                                <span>
                                                    <img
                                                        src="assets/images/gallery/payment/paypal.png"
                                                        width={80}
                                                    />
                                                </span>
                                            </label>
                                        </div>
                                        <div className="collapse" id="collapsePaypal">
                                            <div className="row mt-3">
                                                <div className="col-12 col-lg-12">
                                                    <label htmlFor="EnterYourPaypalId" className="form-label">
                                                        Enter Your Paypal Id
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-lg border-2"
                                                        id="EnterYourPaypalId"
                                                        placeholder="Enter Your Paypal Id"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-grid mt-4">
                                        <a
                                            href="checkout-thankyou.html"
                                            className="btn btn-dark py-2 rounded-3"
                                        >
                                            Payment
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="order-summary">
                                    <div className="cart-list d-flex flex-column gap-4">
                                        <div className="cart-list-item d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="cart-img">
                                                    <img
                                                        src="assets/images/gallery/tabular-product/07.png"
                                                        className="rounded-3"
                                                        width={80}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="cart-product-info">
                                                    <h5 className="product-name fs-6 mb-1">
                                                        Venic black pant
                                                    </h5>
                                                    <p>Large / Blue</p>
                                                </div>
                                            </div>
                                            <div className="cart-product-price">
                                                <h6 className="mb-0">1 X $78</h6>
                                            </div>
                                        </div>
                                        <div className="my-0 border-1 border-top" />
                                        <div className="cart-list-item d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="cart-img">
                                                    <img
                                                        src="assets/images/gallery/tabular-product/03.png"
                                                        className="rounded-3"
                                                        width={80}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="cart-product-info">
                                                    <h5 className="product-name fs-6 mb-1">
                                                        Venic black pant
                                                    </h5>
                                                    <p>Large / Blue</p>
                                                </div>
                                            </div>
                                            <div className="cart-product-price">
                                                <h6 className="mb-0">1 X $78</h6>
                                            </div>
                                        </div>
                                        <div className="my-0 border-1 border-top" />
                                        <div className="cart-list-item d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="cart-img">
                                                    <img
                                                        src="assets/images/gallery/tabular-product/06.png"
                                                        className="rounded-3"
                                                        width={80}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="cart-product-info">
                                                    <h5 className="product-name fs-6 mb-1">
                                                        Venic black pant
                                                    </h5>
                                                    <p>Large / Blue</p>
                                                </div>
                                            </div>
                                            <div className="cart-product-price">
                                                <h6 className="mb-0">1 X $78</h6>
                                            </div>
                                        </div>
                                        <div className="my-0 border-1 border-top" />
                                        <div className="cart-list-item d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="cart-img">
                                                    <img
                                                        src="assets/images/gallery/tabular-product/04.png"
                                                        className="rounded-3"
                                                        width={80}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="cart-product-info">
                                                    <h5 className="product-name fs-6 mb-1">
                                                        Venic black pant
                                                    </h5>
                                                    <p>Large / Blue</p>
                                                </div>
                                            </div>
                                            <div className="cart-product-price">
                                                <h6 className="mb-0">1 X $78</h6>
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
                                                        aria-label="Recipient's username"
                                                        aria-describedby="button-addon2"
                                                    />
                                                    <button className="btn btn-dark px-3" type="button">
                                                        Apply
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border-0 rounded-4 bg-light mt-4">
                                        <div className="card-body">
                                            <div className="checkout-card p-2">
                                                <h4 className="mb-0">Order Summary</h4>
                                                <div className="my-4 border-1 border-top" />
                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                    <p className="mb-0">Subtotal</p>
                                                    <p className="mb-0">$179.00</p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                    <p className="mb-0">Discounts</p>
                                                    <p className="mb-0 text-danger">-$24.00</p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                    <p className="mb-0">Shipping</p>
                                                    <p className="mb-0">+$16.00</p>
                                                </div>
                                                <div className="my-3 border-1 border-top" />
                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                    <p className="mb-0 fs-5 fw-semibold">Total</p>
                                                    <p className="mb-0 fs-5 fw-semibold">$196.56</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end row*/}
                    </div>
                </section>
            </main>
            {/*end main content*/}
            <Footer/>
        </>

    );
};

export default Checkout;
