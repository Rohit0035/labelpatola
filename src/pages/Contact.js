import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
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
                                {/* <li>
                                    <i className="bi bi-chevron-right" />
                                </li> */}
                                <li>
                                    <i className="bi bi-chevron-right" />
                                </li>
                                <li className="breadcrumb-item breadcrumb-active">Contact Us</li>
                            </ol>
                        </nav>
                    </div>
                </section>
                {/*end breadcrumb*/}
                <section className="py-5">
                    <div className="container px-3">
                        <div className="row g-4 g-lg-5">
                            <div className="col-12 col-lg-8">
                                <div className="contact-map border rounded-3 p-3 overflow-x-auto">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d227755.6248678383!2d75.62389829280855!3d26.881854110477622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sT1-604%2C%206th%20Floor%2C%20Mahima%20Sansar%2C%20Opposite%20Radha%20Swami%20Satsang%2C%20Sahara%20City%20Homes%2C%20Beelwa%20Kalan%20Jaipur%20Rajasthan%20-%20302022!5e0!3m2!1sen!2sin!4v1753257901736!5m2!1sen!2sin"
                                        width={800}
                                        className="rounded-3"
                                        height={450}
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="contact-details">
                                    <h4 className="mb-4">Information</h4>
                                    <div className="contact-number">
                                        <p className="mb-1 fw-semibold">Phone:</p>
                                        <p className="mb-0">+91-7337604842</p>
                                    </div>
                                    <div className="border-top my-3" />
                                    <div className="contact-number mt-3">
                                        <p className="mb-1 fw-semibold">Email:</p>
                                        <p className="mb-0">support@labelpatola.com </p>
                                    </div>
                                    <div className="border-top my-3" />
                                    <div className="contact-number mt-3">
                                        <p className="mb-1 fw-semibold">Address:</p>
                                        <p className="mb-0">
                                            T1-604, 6th Floor, Mahima Sansar, Opposite Radha Swami Satsang, Sahara City Homes, Beelwa Kalan Jaipur Rajasthan - 302022
                                        </p>
                                    </div>
                                    <div className="border-top my-3" />
                                    <div className="contact-number mt-3">
                                        <p className="mb-1 fw-semibold">Open Time:</p>
                                        <p className="mb-0">10:30am - 9:00pm </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end row*/}
                        <div className="card mt-5 border rounded-3">
                            <div className="card-body p-5">
                                <div className="text-center mb-5">
                                    <h4>Get In Touch</h4>
                                    <p>Fill out the form below to contact our sales team.</p>
                                </div>
                                <form className="contact-form">
                                    <div className="row g-3">
                                        <div className="col-12 col-lg-6">
                                            <div>
                                                <label htmlFor="YourName" className="form-label">
                                                    Your Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg border-2"
                                                    id="YourName"
                                                    required=""
                                                    placeholder="Enter your name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <div>
                                                <label htmlFor="EmailAddress" className="form-label">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control form-control-lg border-2"
                                                    id="EmailAddress"
                                                    required=""
                                                    placeholder="Enter Email Address"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-12">
                                            <div>
                                                <label htmlFor="Message" className="form-label">
                                                    Message
                                                </label>
                                                <textarea
                                                    className="form-control form-control-lg border-2"
                                                    rows={4}
                                                    cols={5}
                                                    id="Message"
                                                    required=""
                                                    placeholder="Message"
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-12">
                                            <div>
                                                <button type="submit" className="btn btn-dark px-4 py-2">
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/*end row*/}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/*end main content*/}
            <Footer />
        </>

    );
};

export default Contact;