import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
    return (
        <>
            <Header />
            {/* Breadcrumb Section */}
            <section className="bg-dark section-breadcrumb bg-img-page-header d-flex align-items-center justify-content-center">
                <div className="container px-3 d-flex flex-column align-items-center justify-content-center">
                    <h2 className='text-white'>Terms of Service</h2>
                    <nav>
                        <ol className="breadcrumb mb-0 gap-2">
                            <li className="breadcrumb-item">
                                <a href="javascript:;" className="breadcrumb-link text-white">Home</a>
                            </li>
                            <li>
                                <i className="bi bi-chevron-right text-white" />
                            </li>
                            <li className="breadcrumb-item breadcrumb-active">Terms of Service</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <div className="container my-5">
                <h4 className="mb-4 text-start">Terms of Service</h4>
                {/* <p><strong>Effective Date:</strong> July 1, 2025</p> */}

                <h4>Overview</h4>
                <p>
                    This website is operated by Label Patola. Throughout the site, the terms “we”, “us” and “our” refer to Label Patola. By accessing or using any part of the site, you agree to be bound by these Terms of Service, including all terms, conditions, and policies referenced here or available by hyperlink.
                </p>

                <h4>1. Customer Service</h4>
                <p>
                    For assistance, please WhatsApp us at +91 7337604842 or email <a href="mailto:hello@labelpatolabypurvicreation@gmail.com">hello@labelpatolabypurvicreation@gmail.com</a>. Our support team is available Monday to Friday, 10:00 AM – 5:00 PM IST, except holidays.
                </p>

                <h4>2. Product Details</h4>
                <ul>
                    <li><strong>Colors:</strong> Slight variation may occur due to lighting and screen display.</li>
                    <li><strong>Care Instructions:</strong> All garments are <strong>dry clean only</strong>.</li>
                    <li><strong>Sizing:</strong> Refer to the product’s size chart. Fit may vary by fabric or style.</li>
                </ul>

                <h4>3. Pricing and Availability</h4>
                <p>
                    Prices are subject to change without notice. We reserve the right to modify or discontinue products or services at any time without liability.
                </p>

                <h4>4. Use of the Website</h4>
                <ul>
                    <li>You must be at least 18 years old.</li>
                    <li>Do not misuse or attempt unauthorized access.</li>
                    <li>Website usage is for personal, non-commercial purposes only.</li>
                </ul>

                <h4>5. Orders and Payments</h4>
                <ul>
                    <li>All orders are subject to availability and confirmation.</li>
                    <li>We may cancel any order at our discretion.</li>
                    <li>Payments must be made through approved gateways.</li>
                    <li>We are not liable for credit card fraud. The onus lies on the cardholder.</li>
                </ul>

                <h4>6. Shipping & Delivery</h4>
                <p>
                    Estimated delivery times are not guaranteed. We are not responsible for courier delays or external disruptions.
                </p>

                <h4>7. Returns and Refunds</h4>
                <p>
                    Please refer to our <a href="/cancellation-return-exchange-policy">Return & Refund Policy</a> for complete information.
                </p>

                <h4>8. Intellectual Property</h4>
                <p>
                    All content including images, designs, code, and text belong to Label Patola. Unauthorized use will lead to legal consequences.
                </p>

                <h4>9. Electronic Communication</h4>
                <p>
                    By using our site or communicating electronically, you consent to receive communications via email or digital notices.
                </p>

                <h4>10. Site Access and Use</h4>
                <ul>
                    <li>You are granted limited access for personal use only.</li>
                    <li>Commercial reproduction, resale, or misuse is prohibited.</li>
                    <li>Unauthorized access or scraping of data is not allowed.</li>
                </ul>

                <h4>11. Your Account</h4>
                <p>
                    You are responsible for maintaining account confidentiality. We may terminate accounts or refuse service at our discretion.
                </p>

                <h4>12. Disclaimer of Warranties</h4>
                <p>
                    The site is provided "as is". We do not guarantee uninterrupted or error-free services. Use at your own risk.
                </p>

                <h4>13. Limitation of Liability</h4>
                <p>
                    Label Patola is not liable for any direct, indirect, incidental, or consequential damages resulting from use of the site or products.
                </p>

                <h4>14. Indemnification</h4>
                <p>
                    You agree to indemnify Label Patola against all claims, losses, and legal fees arising from your misuse of the site.
                </p>

                <h4>15. Disputes</h4>
                <p>
                    All disputes shall be governed by Indian law and subject to exclusive jurisdiction of the courts in Pune, Maharashtra.
                </p>

                <h4>16. Changes to Terms</h4>
                <p>
                    We may revise these terms at any time. Continued use of the website constitutes acceptance of changes.
                </p>

                <h4>17. Severability</h4>
                <p>
                    If any provision of these Terms is deemed invalid, the rest shall remain enforceable and in effect.
                </p>

                <h4>18. Contact Us</h4>
                <p>
                    For questions, email us at <a href="mailto:support@labelpatola.com">support@labelpatola.com</a>.
                </p>
            </div>

            <Footer />
        </>
    );
};

export default TermsAndConditions;
