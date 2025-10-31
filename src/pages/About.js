import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AbtImage from '../assets/images/common/abt-patola.png'
import ServiceFeature from '../components/ServiceFeature';

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
                                <a href="/" className="breadcrumb-link text-white">
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
                                    We make easy-to-wear outfits. Our designs are crafted for the contemporary Indian woman who loves traditional yet lightweight and subtle styles—bringing together the best of both worlds.
                                </p>
                                <p>
                                    <strong>Label Patola</strong> has been created keeping in mind women who know they just need only ‘that much’ to stand apart, stand strong, and look beautiful among the crowd.
                                </p>
                                <p>
                                    We continuously strive to make your shopping experience hassle-free and convenient. Please help us do so, as we are always eager to hear your thoughts.
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

            <ServiceFeature />


            {/* End Breadcrumb */}
            <Footer />
        </>
    );
};

export default About;