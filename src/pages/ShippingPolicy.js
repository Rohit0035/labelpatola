import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ShippingPolicy = () => {
    return (
        <>
            <Header />
            {/* Start Breadcrumb */}
            <section className="bg-dark section-breadcrumb bg-img-page-header d-flex align-items-center justify-content-center">
                <div className="container px-3 d-flex flex-column align-items-center justify-content-center">
                    <h2 className='text-white'>Shipping Policy</h2>
                    <nav>
                        <ol className="breadcrumb mb-0 gap-2">
                            <li className="breadcrumb-item">
                                <a href="javascript:;" className="breadcrumb-link text-white">Home</a>
                            </li>
                            <li>
                                <i className="bi bi-chevron-right text-white" />
                            </li>
                            <li className="breadcrumb-item breadcrumb-active">Shipping Policy</li>
                        </ol>
                    </nav>
                </div>
            </section>
            {/* End Breadcrumb */}

            <section className="py-5">
                <div className="container">
                    <h3 className="mb-4 text-start">Shipping Policy</h3>
                    {/* <p><strong>Effective Date:</strong> July 1, 2025</p> */}

                    <h4 className="mt-5">1. Delivery Terms</h4>
                    <p>
                        We ship your orders within 1–3 business days to ensure timely delivery to our beloved customers.
                        An order confirmation will be sent to your email shortly after placing the order.
                    </p>

                    <h5 className="mt-4">Domestic Delivery Timeline</h5>
                    <p>
                        Most domestic orders are delivered within 5–9 days. Rare delays may occur depending on location accessibility, holidays, or external uncontrollable factors.
                    </p>

                    <h5 className="mt-4">International Delivery Timeline</h5>
                    <p>
                        International orders generally take 7–15 days, depending on your country and specific location.
                    </p>

                    <h4 className="mt-5">2. Change of Delivery Address / Contact Details</h4>
                    <p>
                        Once the order is placed, the delivery address cannot be changed or revised.
                    </p>

                    <h4 className="mt-5">3. Expedite / Urgent Delivery Requests</h4>
                    <p>
                        For urgent or special delivery requests (e.g., occasions, events), email us at
                        <a href="mailto:contact.madhurithakkar@gmail.com"> contact.madhurithakkar@gmail.com</a>. We’ll do our best to accommodate your needs.
                    </p>

                    <h4 className="mt-5">4. Delivery Time Exceeded</h4>
                    <p>
                        We strive to deliver on time. However, once your order is handed to a third-party courier,
                        we are not liable for delays due to logistics issues or regional disruptions beyond our control.
                    </p>

                    <h4 className="mt-5">5. Shipping Costs</h4>

                    <h5 className="mt-4">Domestic Orders</h5>
                    <p>We offer <strong>FREE SHIPPING</strong> on all domestic orders across India.</p>

                    <h5 className="mt-4">International Orders</h5>
                    <p>
                        Shipping charges for international orders depend on your location.
                        Please place your order via WhatsApp to get accurate rates.
                    </p>

                    <h4 className="mt-5">6. Cancellations</h4>
                    <p>
                        Orders cannot be cancelled after being placed. However, if you wish to make a change,
                        please contact us via email and we will try our best to assist you.
                    </p>

                    <h4 className="mt-5">7. Stock Availability</h4>
                    <p>
                        While we aim to maintain real-time inventory, discrepancies may occur. If any item is unavailable after purchase,
                        we will contact you with options and fully support your chosen resolution.
                    </p>

                    <h4 className="mt-5">8. Duties & Taxes</h4>

                    <h5 className="mt-4">Goods and Services Tax (GST)</h5>
                    <p>GST is included in all product prices on our website for domestic orders.</p>

                    <h5 className="mt-4">Import Duties & Taxes</h5>
                    <p>
                        For international orders, import duties and taxes may apply based on the destination country.
                        Label Patola is not responsible for such fees. If the recipient refuses to pay the import charges,
                        we cannot offer refunds or ensure delivery.
                    </p>

                    <h4 className="mt-5">9. Contact Us</h4>
                    <p>
                        For any shipping-related questions, please reach out at:
                        <a href="mailto:support@labelpatola.com"> support@labelpatola.com</a>
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default ShippingPolicy;
