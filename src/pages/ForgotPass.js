import React from 'react';
import Logo from '../assets/images/common/favicon.jpg'
import Authimg from '../assets/images/common/auth-img.png'

const ForgotPass = () => {


    return (
        <>
            {/*start main content*/}
            <main className="main-content">
                <section className="py-5" style={{ backgroundColor: "#bed7fa" }}>
                    <div className="container px-3">
                        <div className="row g-4 g-lg-5 align-items-center">
                            <div className="col-12 col-xl-6">
                                <div className="auth-register p-4 p-sm-5 rounded-3 border bg-white">
                                    <div className="text-center mb-4">
                                        <a href="/">
                                            <img src={Logo} width="90px" />
                                        </a>
                                    </div>
                                    <h4 className="mb-0">Forgot Password</h4>
                                    <p>Enter your registered email ID to reset the password</p>
                                    <div className="form-body mt-5">
                                        <div className="row row-cols-1 g-3">
                                            <div className="col">
                                                <label htmlFor="EmailAddress" className="form-label">
                                                    Email address
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control form-control-lg border-2"
                                                    id="EmailAddress"
                                                />
                                            </div>
                                            <div className="col">
                                                <div className="d-grid gap-3">
                                                    <a
                                                        href="javascript:;"
                                                        className="btn btn-dark btn-lg px-4 rounded-3"
                                                    >
                                                        <span className="fs-6">Send</span>
                                                    </a>
                                                    <a
                                                        href="/login"
                                                        className="btn btn-outline-dark border btn-lg px-4 rounded-3"
                                                    >
                                                        <span className="fs-6">Back to login</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/*end row*/}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-6 d-none d-xl-flex">
                                <div className="auth-register-img">
                                    <img
                                       src={Authimg}
                                        className="img-fluid"
                                        width={650}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        {/*end row*/}
                    </div>
                </section>
            </main>
            {/*end main content*/}
        </>

    );
};

export default ForgotPass;
