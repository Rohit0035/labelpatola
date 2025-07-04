import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ShippingPolicy = () => {
    return (
        <>
            <Header />
            {/* Start Breadcrumb */}
            <section className="py-4 section-breadcrumb">
                <div className="container px-3">
                    <h2 className="d-none">Shipping Policy</h2>
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
                                    Support
                                </a>
                            </li>
                            <li>
                                <i className="bi bi-chevron-right" />
                            </li>
                            <li className="breadcrumb-item breadcrumb-active">
                                Shipping Policy
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>
            {/* End Breadcrumb */}

            <div className="container">
                <h4 className="mb-4 text-start">Shipping Policy</h4>
                <div className="mb-5">
                    <p><strong>Effective Date:</strong> July 1, 2025</p>

                    <h4>1. Order Processing</h4>
                    <p>
                        Orders are processed within 1-2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive a notification when your order has shipped.
                    </p>

                    <h4>2. Shipping Rates & Delivery Estimates</h4>
                    <p>
                        Shipping charges for your order will be calculated and displayed at checkout. Delivery times may vary depending on your location and selected shipping method.
                    </p>

                    <h4>3. Delivery Locations</h4>
                    <p>
                        Currently, we ship to most locations across India. For international shipping requests, please contact our support team before placing an order.
                    </p>

                    <h4>4. Shipment Confirmation & Order Tracking</h4>
                    <p>
                        Once your order has been shipped, you will receive an email with a tracking number and carrier details. Please allow 24-48 hours for tracking information to become available.
                    </p>

                    <h4>5. Delivery Delays</h4>
                    <p>
                        Delivery delays can occasionally occur due to unforeseen factors such as weather, courier service issues, or regional lockdowns. We will notify you in case of significant delays.
                    </p>

                    <h4>6. Damaged or Lost Packages</h4>
                    <p>
                        If you receive a damaged package or if your shipment is lost, please contact us immediately at <a href="mailto:support@labelpatola.com">support@labelpatola.com</a> with your order number and details. We will work with the courier service to resolve the issue.
                    </p>

                    <h4>7. Change of Address</h4>
                    <p>
                        If you need to change your delivery address after placing an order, please contact us within 12 hours of placing the order. Address changes may not be possible once the package has been dispatched.
                    </p>

                    <h4>8. Contact Us</h4>
                    <p>
                        For any shipping-related queries, please email us at <a href="mailto:support@labelpatola.com">support@labelpatola.com</a>.
                    </p>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ShippingPolicy;
