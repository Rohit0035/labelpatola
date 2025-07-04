import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    return (
        <>
            <Header />
            {/*start breadcrumb*/}
            <section className="py-4 section-breadcrumb">
                <div className="container px-3">
                    <h2 className="d-none">Product Details</h2>
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
                                    Security
                                </a>
                            </li>
                            <li>
                                <i className="bi bi-chevron-right" />
                            </li>
                            <li className="breadcrumb-item breadcrumb-active">
                                Privacy Policy
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>
            {/*end breadcrumb*/}
            <div className="container">
                <h4 className="mb-4 text-start">Privacy Policy</h4>
                <div className=" mb-5">
                    <p><strong>Effective Date:</strong> July 1, 2025</p>

                    <h4>1. Introduction</h4>
                    <p>
                        Welcome to Label Patola. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.
                    </p>

                    <h4>2. Information We Collect</h4>
                    <ul>
                        <li>Personal Information (e.g., name, email, phone number, address)</li>
                        <li>Payment and transaction details</li>
                        <li>Browsing and usage data (via cookies & analytics tools)</li>
                    </ul>

                    <h4>3. How We Use Your Information</h4>
                    <ul>
                        <li>To process orders and deliver products</li>
                        <li>To personalize your experience</li>
                        <li>To send updates, offers, and promotional emails (with your consent)</li>
                        <li>To improve our website and services</li>
                    </ul>

                    <h4>4. Data Security</h4>
                    <p>
                        We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.
                    </p>

                    <h4>5. Sharing Your Information</h4>
                    <p>
                        We do not sell your personal information. We may share your data with trusted third-party services (e.g., payment gateways, logistics providers) strictly for order processing and delivery.
                    </p>

                    <h4>6. Your Rights</h4>
                    <p>
                        You have the right to access, correct, or delete your data. Contact us at <a href="mailto:support@labelpatola.com">support@labelpatola.com</a>.
                    </p>

                    <h4>7. Changes to This Policy</h4>
                    <p>
                        We may update this policy occasionally. Changes will be posted here with the revised effective date.
                    </p>

                    <h4>8. Contact Us</h4>
                    <p>
                        For any questions, reach out at <a href="mailto:privacy@labelpatola.com">privacy@labelpatola.com</a>.
                    </p>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default PrivacyPolicy;
