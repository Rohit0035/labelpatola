import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    return (
        <>
            <Header />
            {/* Breadcrumb Section */}
            <section className="bg-dark section-breadcrumb bg-img-page-header d-flex align-items-center justify-content-center">
                <div className="container px-3 d-flex flex-column align-items-center justify-content-center">
                    <h2 className='text-white'>Privacy Policy</h2>
                    <nav>
                        <ol className="breadcrumb mb-0 gap-2">
                            <li className="breadcrumb-item">
                                <a href="javascript:;" className="breadcrumb-link text-white">Home</a>
                            </li>
                            <li>
                                <i className="bi bi-chevron-right text-white" />
                            </li>
                            <li className="breadcrumb-item breadcrumb-active">Privacy Policy</li>
                        </ol>
                    </nav>
                </div>
            </section>

            {/* Content Section */}
            <section className='py-5'>
                <div className="container">
                    <h4 className="mb-4">Privacy Policy</h4>

                    <p>At <strong>Label Patola</strong>, we value and share your concerns about your privacy and security. This section details how your personal information is collected, used, and shared when you visit or make a purchase from <strong>www.labelpatola.com</strong> (the “Site”).</p>

                    <h5 className="mt-5">1. What Do We Collect?</h5>
                    <h6 className="mt-3">Device Information</h6>
                    <p>When you visit the Site, we may collect certain information about your device, including:</p>
                    <ul>
                        <li>Web browser</li>
                        <li>IP address</li>
                        <li>Time zone</li>
                        <li>Installed cookies</li>
                        <li>Pages viewed, referring websites or search terms, and interaction data</li>
                    </ul>
                    <p>We may collect Device Information using the following tracking technologies:</p>
                    <ul>
                        <li><strong>Cookies</strong> – data files placed on your device with an anonymous ID.</li>
                        <li><strong>Log files</strong> – track actions on the Site (IP, browser, ISP, timestamps).</li>
                        <li><strong>Web beacons / tags / pixels</strong> – record your browsing behavior.</li>
                    </ul>

                    <h6 className="mt-4">Order Information</h6>
                    <p>When you make or attempt to make a purchase, we collect:</p>
                    <ul>
                        <li>Name</li>
                        <li>Billing and shipping address</li>
                        <li>Payment information</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                    </ul>

                    <h5 className="mt-5">2. How Do We Use the Data Collected?</h5>
                    <p>We use Order Information to:</p>
                    <ul>
                        <li>Process and fulfill orders</li>
                        <li>Send invoices, confirmations, and order updates</li>
                        <li>Communicate with you</li>
                        <li>Screen for fraud and risk</li>
                        <li>Send promotional content (based on your preferences)</li>
                    </ul>

                    <p>Device Information is used to:</p>
                    <ul>
                        <li>Improve and optimize the Site</li>
                        <li>Analyze how users browse and interact</li>
                        <li>Evaluate marketing effectiveness</li>
                        <li>Detect and prevent fraud</li>
                    </ul>

                    <p>We might also use your data for <strong>advertising or retargeting</strong> purposes.</p>

                    <h5 className="mt-5">3. Sharing Your Information</h5>
                    <p>We may share your information with third parties to help us use it effectively, such as:</p>
                    <ul>
                        <li>Google Analytics – to understand how users engage with the Site</li>
                        <li>Logistics and payment partners – to fulfill your orders</li>
                        <li>Legal authorities – to comply with applicable laws or protect our rights</li>
                    </ul>

                    <p>
                        Please note: Your content (excluding payment information) may be transmitted unencrypted and may involve transmission over various networks or adjustments for technical compatibility. Payment data is always encrypted during transit.
                    </p>

                    <h5 className="mt-5">4. Advertising</h5>
                    <p>
                        We may use your Personal Information to provide targeted advertisements or marketing communications that may interest you.
                    </p>

                    <h5 className="mt-5">5. Data Retention</h5>
                    <p>
                        When you place an order, we retain your Order Information for our records indefinitely unless you request its deletion.
                    </p>

                    <h5 className="mt-5">6. Minors</h5>
                    <p>
                        The Site is not intended for individuals under the age of <strong>18 years</strong>.
                    </p>

                    <h5 className="mt-5">7. Disclaimer</h5>
                    <p>
                        By submitting our webform, you agree to receive promotional calls on the number shared. These communications may be initiated from a third-party platform.
                    </p>

                    <h5 className="mt-5">8. Contact Us</h5>
                    <p>
                        For questions or requests related to your personal information or this policy, email us at:
                        <br />
                        <a href="mailto:support@labelpatola.com">support@labelpatola.com</a> or <a href="mailto:privacy@labelpatola.com">privacy@labelpatola.com</a>
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default PrivacyPolicy;
