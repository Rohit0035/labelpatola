import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
    return (
        <>
            <Header />
            {/* Start Breadcrumb */}
            <section className="py-4 section-breadcrumb">
                <div className="container px-3">
                    <h2 className="d-none">Terms and Conditions</h2>
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
                                    Legal
                                </a>
                            </li>
                            <li>
                                <i className="bi bi-chevron-right" />
                            </li>
                            <li className="breadcrumb-item breadcrumb-active">
                                Terms & Conditions
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>
            {/* End Breadcrumb */}

            <div className="container">
                <h4 className="mb-4 text-start">Terms & Conditions</h4>
                <div className="mb-5">
                    <p><strong>Effective Date:</strong> July 1, 2025</p>

                    <h4>1. Introduction</h4>
                    <p>
                        Welcome to Label Patola. By accessing or using our website, you agree to comply with and be bound by these Terms and Conditions. Please read them carefully.
                    </p>

                    <h4>2. Use of the Website</h4>
                    <ul>
                        <li>You must be at least 18 years old to use this site.</li>
                        <li>You agree not to misuse the website or attempt unauthorized access.</li>
                        <li>All content on the website is for personal and non-commercial use only.</li>
                    </ul>

                    <h4>3. Product Information</h4>
                    <p>
                        We strive to ensure all product details, pricing, and images are accurate, but errors may occur. We reserve the right to correct any inaccuracies.
                    </p>

                    <h4>4. Orders and Payments</h4>
                    <ul>
                        <li>All orders are subject to availability and confirmation.</li>
                        <li>We reserve the right to cancel any order for any reason.</li>
                        <li>Payments must be made through approved payment gateways.</li>
                    </ul>

                    <h4>5. Shipping & Delivery</h4>
                    <p>
                        Delivery times are estimates. We are not responsible for delays caused by courier services or unforeseen circumstances.
                    </p>

                    <h4>6. Returns and Refunds</h4>
                    <p>
                        Please refer to our <a href="javascript:;">Return & Refund Policy</a> for details on product returns and refunds.
                    </p>

                    <h4>7. Intellectual Property</h4>
                    <p>
                        All content, including images, designs, and text, are the property of Label Patola. Unauthorized use is strictly prohibited.
                    </p>

                    <h4>8. Limitation of Liability</h4>
                    <p>
                        We are not liable for any direct, indirect, incidental, or consequential damages arising from the use of our website or products.
                    </p>

                    <h4>9. Governing Law</h4>
                    <p>
                        These Terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in [Your City].
                    </p>

                    <h4>10. Changes to These Terms</h4>
                    <p>
                        We may update these Terms occasionally. Changes will be posted here with the revised effective date.
                    </p>

                    <h4>11. Contact Us</h4>
                    <p>
                        For any questions regarding these Terms, email us at <a href="mailto:support@labelpatola.com">support@labelpatola.com</a>.
                    </p>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default TermsAndConditions;
