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
                                <a href="/" className="breadcrumb-link text-white">Home</a>
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

            {/* Shipping Policy Content */}
            <section className="py-5">
                <div className="container">
                    <h3 className="mb-4 text-start">Shipping Policy</h3>

                    <h4 className="mt-5">Delivery Terms</h4>
                    <p>
                        We ship your orders within <strong>1–3 days</strong> so they reach our beloved customers on time.
                        You will receive an order confirmation shortly after placing the order on your registered email.
                    </p>

                    <h5 className="mt-4">Delivery Time For Domestic Orders</h5>
                    <p>
                        In general, domestic shipments are delivered within <strong>5–9 days</strong>.
                        The delivery time may vary in rare cases depending on accessibility of location,
                        time of the year, or any external uncontrollable factors impacting any region.
                    </p>

                    <h5 className="mt-4">Delivery Time For International Orders</h5>
                    <p>
                        Orders shipped overseas generally take <strong>7–15 days</strong>,
                        depending on the accessibility of the destination country and your specific location.
                    </p>

                    <h4 className="mt-5">Change Of Delivery Address / Contact Details</h4>
                    <p>
                        Once an order is placed, the <strong>delivery address cannot be changed or revised</strong>.
                    </p>

                    <h4 className="mt-5">Expedite / Urgent Delivery Request</h4>
                    <p>
                        To expedite or request urgent delivery, please reach out to us at
                        <a href="mailto:contact.madhurithakkar@gmail.com"> contact.madhurithakkar@gmail.com</a>.
                        We will do our best to ensure timely delivery for any urgency, special occasion, or life event.
                    </p>

                    <h4 className="mt-5">Delivery Time Exceeded</h4>
                    <p>
                        We are committed to delivering your orders on time and strive to ship them promptly as promised.
                        However, since we use third-party delivery partners, we are not responsible for delays once the product has been handed over.
                        In the event of interruptions caused by factors beyond our control, on-time shipment cannot be guaranteed.
                    </p>

                    <h4 className="mt-5">Shipping Costs</h4>

                    <h5 className="mt-4">Domestic Orders</h5>
                    <p>
                        We offer <strong>FREE SHIPPING</strong> for all orders within India.
                    </p>

                    <h5 className="mt-4">International Orders</h5>
                    <p>
                        Shipping cost for international orders depends on your location.
                        Orders can be placed and confirmed through our WhatsApp channel for accurate cost details.
                    </p>

                    <h4 className="mt-5">Cancellations</h4>
                    <p>
                        Once an order is placed, it <strong>cannot be cancelled</strong>.
                        However, if you change your mind, please reach out to us over email,
                        and we will try our best to accommodate your request if possible.
                    </p>

                    <h4 className="mt-5">Stock Availability</h4>
                    <p>
                        We strive to maintain accurate stock counts on our website. However, there may be occasional discrepancies,
                        resulting in some items being unavailable at the time of purchase. In such cases, we will contact you
                        to confirm your preference and support your decision regarding your order.
                    </p>

                    <h4 className="mt-5">Duties & Taxes</h4>

                    <h5 className="mt-4">Goods and Services Tax (GST)</h5>
                    <p>
                        GST is collected on all domestic orders and is already included in the prices displayed for all products.
                    </p>

                    <h5 className="mt-4">Import Duties & Taxes</h5>
                    <p>
                        Occasionally, import duties and taxes for international shipments may be payable upon arrival in the destination country.
                        This varies from country to country, and <strong>Label Patola</strong> encourages you to check potential import costs before placing your order.
                        If you refuse to pay the import charges, <strong>Label Patola</strong> will not be responsible for non-delivery and will not be able to provide support or refunds.
                    </p>

                    <h4 className="mt-5">Contact Us</h4>
                    <p>
                        For any shipping-related questions, please contact us at:
                        <a href="mailto:support@labelpatola.com"> support@labelpatola.com</a>
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default ShippingPolicy;
