import React from 'react';

const PaymentMethod = () => {
    return (
        <>
            {/*start main content*/}
            <main className="main-content">
                {/*start shop*/}
                <section className="py-5 my-account-section">
                    <div className="container px-3">
                        <div className="row g-lg-4">
                            <div className="col-12 col-lg-12">
                                <div className="payment-methods-cards">
                                    <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-4">
                                        <div className="col d-flex">
                                            <div className="card rounded-4 bg-black border w-100">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <img
                                                            src="assets/images/gallery/payment/visa.png"
                                                            width={60}
                                                            alt=""
                                                        />
                                                        <div className="dropdown">
                                                            <button
                                                                className="btn btn-outline-light btn-sm border-light border-opacity-25 dropdown-toggle dropdown-toggle-nocaret"
                                                                type="button"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="bi bi-three-dots" />
                                                            </button>
                                                            <ul className="dropdown-menu">
                                                                <li>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        Edit
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        Remove
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        Set as Primary
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between mt-4">
                                                        <h6 className="mb-0 text-white">Michle Jhon</h6>
                                                        <p className="mb-0 text-white">08/25</p>
                                                    </div>
                                                    <div className="mt-3">
                                                        <span className="fs-5 text-white">
                                                            **** **** **** 5632
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col d-flex">
                                            <div className="card rounded-4 bg-primary border w-100">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <img
                                                            src="assets/images/gallery/payment/money.png"
                                                            width={50}
                                                            alt=""
                                                        />
                                                        <div className="dropdown">
                                                            <button
                                                                className="btn btn-outline-light btn-sm border-light border-opacity-25 dropdown-toggle dropdown-toggle-nocaret"
                                                                type="button"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="bi bi-three-dots" />
                                                            </button>
                                                            <ul className="dropdown-menu">
                                                                <li>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        Edit
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        Remove
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item" href="javascript:;">
                                                                        Set as Primary
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between mt-4">
                                                        <h6 className="mb-0 text-white">Michle Jhon</h6>
                                                        <p className="mb-0 text-white">08/25</p>
                                                    </div>
                                                    <div className="mt-3">
                                                        <span className="fs-5 text-white">
                                                            **** **** **** 5632
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col d-flex">
                                            <div className="card rounded-4 border w-100">
                                                <div className="card-body d-flex align-items-center flex-column justify-content-center">
                                                    <div className="d-flex align-items-center flex-column justify-content-center gap-2">
                                                        <div className="">
                                                            <button
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapseExample"
                                                                className="btn btn-outline-dark border"
                                                            >
                                                                <i className="bi bi-plus-circle fs-6" />
                                                            </button>
                                                        </div>
                                                        <p className="mb-0">Add payment method</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*end row*/}
                                    <div className="collapse" id="collapseExample">
                                        <div className="card card-body mt-4 rounded-4 border p-4">
                                            <h5 className="mb-0">Add new payment method</h5>
                                            <hr className="my-4" />
                                            <form>
                                                <div className="row g-3">
                                                    <div className="col-12">
                                                        <div>
                                                            <label htmlFor="cardNumber" className="form-label">
                                                                Card Number
                                                            </label>
                                                            <div className="position-relative">
                                                                <input
                                                                    type="text"
                                                                    className="form-control border-2 py-2"
                                                                    id="cardNumber"
                                                                    placeholder="XXXX XXXX XXXX XXXX"
                                                                />
                                                                <span className="position-absolute top-50 end-0 translate-middle-y">
                                                                    <i className="bi bi-credit-card fs-6 me-3" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div>
                                                            <label htmlFor="cardName" className="form-label">
                                                                Full Name on Card
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control border-2 py-2"
                                                                id="cardName"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-lg-8">
                                                        <div>
                                                            <label
                                                                htmlFor="Expirationdate"
                                                                className="form-label"
                                                            >
                                                                Expiration date
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control border-2 py-2"
                                                                id="Expirationdate"
                                                                placeholder="MM/YY"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-lg-4">
                                                        <div>
                                                            <label htmlFor="CVC" className="form-label">
                                                                CVC
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control border-2 py-2"
                                                                id="CVC"
                                                                placeholder="CVC"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="d-flex align-items-center gap-3">
                                                            <button
                                                                type="button"
                                                                className="btn btn-dark px-5 py-2"
                                                            >
                                                                Add Card
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-dark px-4 py-2"
                                                            >
                                                                Cancle
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*end row*/}
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end row*/}
                    </div>
                </section>
                {/*end shop*/}
            </main>
            {/*end main content*/}
        </>

    );
};

export default PaymentMethod;