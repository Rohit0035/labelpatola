import React, { useState } from 'react';
import Logo from '../assets/images/common/favicon.jpg'
import Authimg from '../assets/images/common/auth-img.png'

const Login = () => {

    return (
        <>
            {/*start main content*/}
            <main className="main-content">
                <section className="py-5" style={{ backgroundColor: "#bed7fa" }}>
                    <div className="container px-3">
                        <div className="row g-4 g-lg-5 align-items-center">
                            <div className="col-12 col-xl-6">
                                <div className="auth-register p-4 p-sm-5 rounded-3 border bg-white">
                                    <div className="text-center">
                                        <a href="/">
                                            <img src={Logo} width="90px" />
                                        </a>
                                    </div>
                                    <h4 className="mb-0">Sign In</h4>
                                    <p>
                                        Don't have an account yet?{" "}
                                        <a
                                            href="/register"
                                            className="text-decoration-underline link-body-emphasis"
                                        >
                                            Sign Up
                                        </a>
                                    </p>
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
                                                <label className="form-label">Password</label>
                                                <div className="input-group" id="show_hide_password">
                                                    <input
                                                        type="password"
                                                        className="form-control form-control-lg border-end-0"
                                                        id="inputChoosePassword"
                                                        defaultValue={12345678}
                                                        placeholder="Enter Password"
                                                    />
                                                    <a
                                                        href="javascript:;"
                                                        className="input-group-text bg-transparent"
                                                    >
                                                        {/* <i className="bi bi-eye-slash-fill" /> */}
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-check form-switch">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="flexSwitchCheckChecked"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexSwitchCheckChecked"
                                                    >
                                                        Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 text-end">
                                                <a
                                                    href="/forgotpass"
                                                    className="text-decoration-underline link-body-emphasis"
                                                >
                                                    Forgot Password ?
                                                </a>
                                            </div>
                                            <div className="col">
                                                <div className="d-grid">
                                                    <a
                                                        href="javascript:;"
                                                        className="btn btn-dark btn-lg px-4 rounded-3"
                                                    >
                                                        <span className="fs-6">Login</span>
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

export default Login;
