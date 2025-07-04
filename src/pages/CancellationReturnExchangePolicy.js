import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CancellationReturnExchangePolicy = () => {
    return (
        <>
            <Header />
            {/* Start Breadcrumb */}
            <section className="py-4 section-breadcrumb">
                <div className="container px-3">
                    <h2 className="d-none">Cancellation, Return & Exchange Policy</h2>
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
                                Cancellation, Return & Exchange Policy
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>
            {/* End Breadcrumb */}

            <div className="container">
                <h4 className="mb-4 text-start">Cancellation, Return & Exchange Policy</h4>
                <div className="mb-5">
                    <p><strong>Effective Date:</strong> July 1, 2025</p>

                    <h4>1. Order Cancellation</h4>
                    <p>
                        You can cancel your order within 12 hours of placing it by contacting our customer support team at <a href="mailto:support@labelpatola.com">support@labelpatola.com</a>. After this period, orders may already be processed and shipped, making cancellation impossible.
                    </p>

                    <h4>2. Return Policy</h4>
                    <ul>
                        <li>Returns are accepted within 7 days from the date of delivery.</li>
                        <li>Products must be unused, unwashed, and in their original condition with tags and packaging intact.</li>
                        <li>Customized or made-to-order products are not eligible for returns.</li>
                        <li>Shipping charges (if any) are non-refundable.</li>
                    </ul>

                    <h4>3. Exchange Policy</h4>
                    <ul>
                        <li>We offer size or style exchanges on eligible products within 7 days of delivery.</li>
                        <li>Exchange requests are subject to product availability.</li>
                        <li>Items must meet the return conditions mentioned above.</li>
                    </ul>

                    <h4>4. Process for Return/Exchange</h4>
                    <p>
                        To initiate a return or exchange, please email us at <a href="mailto:support@labelpatola.com">support@labelpatola.com</a> with your order number, reason for return/exchange, and product images if applicable.
                    </p>
                    <p>
                        After approval, we will provide return shipping details. Once we receive and inspect the item, we’ll process your refund or exchange.
                    </p>

                    <h4>5. Refunds</h4>
                    <p>
                        Approved refunds will be processed to your original payment method within 7-10 business days after we receive the returned product.
                    </p>

                    <h4>6. Non-Returnable Items</h4>
                    <p>The following items are non-returnable and non-exchangeable:</p>
                    <ul>
                        <li>Customized products</li>
                        <li>Sale/Discounted items</li>
                        <li>Items damaged due to misuse or negligence</li>
                    </ul>

                    <h4>7. Contact Us</h4>
                    <p>
                        For questions about cancellations, returns, or exchanges, please contact us at <a href="mailto:support@labelpatola.com">support@labelpatola.com</a>.
                    </p>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default CancellationReturnExchangePolicy;
