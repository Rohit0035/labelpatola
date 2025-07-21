import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AbtImage from '../assets/images/common/abt-patola.png'

const About = () => {
    return (
        <>
            <Header />

            {/*start breadcrumb*/}
            <section className=" bg-dark section-breadcrumb bg-img-page-header d-flex align-items-center justify-content-center">
                <div className="container px-3 d-flex flex-column align-items-center justify-content-center">
                    <h2 className='text-white'>About Us</h2>
                    <nav>
                        <ol className="breadcrumb mb-0 gap-2">
                            <li className="breadcrumb-item">
                                <a href="javascript:;" className="breadcrumb-link text-white">
                                    Home
                                </a>
                            </li>
                            <li>
                                <i className="bi bi-chevron-right text-white" />
                            </li>
                            <li className="breadcrumb-item breadcrumb-active">About Us</li>
                        </ol>
                    </nav>
                </div>
            </section>
            {/*end breadcrumb*/}
            <section className="py-5">
                <div className="container px-3">
                    <div className="row g-4 g-lg-5">
                        <div className="col-12 col-lg-6">
                            <div className="about-text">
                                <h2 className='mb-3'>Welcome to Label Patola</h2>
                                <p>
                                    We make easy-to-wear outfits. Our designs are for the contemporary Indian women who love traditional yet light weighted and subtle designs having the best of both worlds.
                                </p>
                                <p>
                                    Label Patola has been created keeping in mind women who know they just need only ‘that much’ to stand apart as well as stand strong and look beautiful among the crowd.
                                </p>
                                <p>

                                    We continuously strive to make your shopping experience hassle-free and most convenient. Please help us do so, as we are always eager to hear your thoughts.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="about-img">
                                <img
                                    src={AbtImage}
                                    className="img-fluid rounded-4"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                   
                </div>
            </section>

            <section className='bg-light py-5'>
                <div className='container'>
                     <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
                                <div className="col">
                                    <div className="card rounded-3 border-0">
                                        <div className="card-body">
                                            <div className="text-center">
                                                <div className="fs-2 mb-4 wh-60 border rounded-circle mx-auto">
                                                    <i className="bi bi-arrow-return-left" />
                                                </div>
                                                <h5>30-Day Return Policy</h5>
                                                <p>Shop worry-free with hassle-free returns</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card rounded-3 border-0">
                                        <div className="card-body">
                                            <div className="text-center">
                                                <div className="fs-2 mb-4 wh-60 border rounded-circle mx-auto">
                                                    <i className="bi bi-truck" />
                                                </div>
                                                <h5>Complimentary Shipping</h5>
                                                <p>What you see is what you pay—no hidden fees</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card rounded-3 border-0">
                                        <div className="card-body">
                                            <div className="text-center">
                                                <div className="fs-2 mb-4 wh-60 border rounded-circle mx-auto">
                                                    <i className="bi bi-headset" />
                                                </div>
                                                <h5>24/7 Support</h5>
                                                <p>Round-the-clock support, always here for you</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card rounded-3 border-0">
                                        <div className="card-body">
                                            <div className="text-center">
                                                <div className="fs-2 mb-4 wh-60 border rounded-circle mx-auto">
                                                    <i className="bi bi-people" />
                                                </div>
                                                <h5>Exclusive Member</h5>
                                                <p>Exclusive deals for our valued customers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>
            </section>


            {/* End Breadcrumb */}
            <Footer />
        </>
    );
};

export default About;