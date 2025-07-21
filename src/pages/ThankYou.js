import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ThankYou = () => {
    return (
        <>
            <Header/>
            {/*start main content*/}
            <main className="main-content">
               
                <section className="py-5 thank-you-section">
                    <div className="container px-3">
                        <div className="thank-you-content">
                            <div className="text-center">
                                <div className="fs-1 mb-3">
                                    <i className="bi bi-check-circle-fill text-success" />
                                </div>
                                {/* <p className="mb-2">Order id #AB58647</p> */}
                                <h5 className="mb-0 fw-semibold">Thank you for your order!</h5>
                                <div className="mt-4">
                                    <Link to="/" className="btn btn-dark py-2 px-4 rounded-3">
                                        Continue Shopping
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/*end main content*/}

            <Footer/>
        </>

    );
};

export default ThankYou;