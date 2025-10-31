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
                                <a href="/" className="breadcrumb-link text-white">Home</a>
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

                    <p>At <strong>Label Patola</strong>, we value and share your concerns about your privacy and security. This section details out how your personal information is collected, used, and shared when you visit or make a purchase from <strong><a href='https://labelpatola.com'>www.labelPatola.com</a></strong>.</p>

                    <h5 className="mt-5">1. What do We Collect?</h5>

                    <h6 className="mt-3">Device Information</h6>
                    <p>When you visit the Site, we may collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we may collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this information as “Device Information.”</p>

                    <p>We may collect Device Information using different types of tracking technologies, including the following:</p>
                    <ul>
                        <li><strong>Cookies</strong> – data files that are placed on your device or computer and often include an anonymous unique identifier.</li>
                        <li><strong>Log files</strong> – track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</li>
                        <li><strong>Web beacons / tags / pixels</strong> – electronic files used to record information about how you browse the Site.</li>
                    </ul>

                    <h6 className="mt-4">Order Information</h6>
                    <p>When you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information, email address, and phone number. We refer to this information as “Order Information.”</p>

                    <h5 className="mt-5">2. How do We Use the Data Collected?</h5>
                    <p>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:</p>
                    <ul>
                        <li>Communicate with you</li>
                        <li>Screen our orders for potential risk or fraud</li>
                        <li>When in line with your preferences, provide you with information or advertising related to our products or services</li>
                    </ul>

                    <p>We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).</p>

                    <p>We might also use the Order Information or Device Information collected for <strong>retargeting / advertising</strong> purposes.</p>

                    <h5 className="mt-5">3. Sharing your Information</h5>
                    <p>We might share your Information with third parties to help us use your Personal Information, as described above. For example, we use Google Analytics to help us understand how our customers use the Site.</p>

                    <p>We may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>

                    <p>You understand that your content (not including financial information used while purchasing) may be transferred unencrypted and involve:</p>
                    <ul>
                        <li>Transmissions over various networks</li>
                        <li>Changes to conform and adapt to technical requirements of connecting networks or devices</li>
                    </ul>
                    <p><strong>Financial information</strong> is always encrypted during transfer over networks.</p>

                    <h5 className="mt-5">4. Advertising</h5>
                    <p>As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you.</p>

                    <h5 className="mt-5">5. Data Retention</h5>
                    <p>When you place an order through the Site, we will maintain your Order Information for our records for an indefinite period.</p>

                    <h5 className="mt-5">6. Minors</h5>
                    <p>The Site is not intended for individuals under the age of <strong>18 years</strong>.</p>

                    <h5 className="mt-5">7. Disclaimer</h5>
                    <p>By submitting our webform, you agree to receive promotional calls on the number shared, and such calls and SMS would be coming from a third-party platform.</p>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default PrivacyPolicy;
