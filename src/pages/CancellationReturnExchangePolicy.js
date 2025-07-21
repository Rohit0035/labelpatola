import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CancellationReturnExchangePolicy = () => {
    return (
        <>
            <Header />
            {/* Start Breadcrumb */}
            <section className="bg-dark section-breadcrumb bg-img-page-header d-flex align-items-center justify-content-center">
                <div className="container px-3 d-flex flex-column align-items-center justify-content-center">
                    <h2 className='text-white'>Cancellation, Return & Exchange Policy</h2>
                    <nav>
                        <ol className="breadcrumb mb-0 gap-2">
                            <li className="breadcrumb-item">
                                <a href="javascript:;" className="breadcrumb-link text-white">Home</a>
                            </li>
                            <li>
                                <i className="bi bi-chevron-right text-white" />
                            </li>
                            <li className="breadcrumb-item breadcrumb-active">Cancellation, Return & Exchange</li>
                        </ol>
                    </nav>
                </div>
            </section>
            {/* End Breadcrumb */}

            <section className="py-5">
                <div className="container">
                    <h3 className="mb-4 text-start">Cancellation, Return & Exchange Policy</h3>
                    {/* <p><strong>Effective Date:</strong> July 1, 2025</p> */}

                    <h4 className="mt-5">1. Our Commitment</h4>
                    <p>
                        At Label Patola, we aim to offer a stress-free experience. We’re available 24x7 to answer any questions before or after your purchase. Ask us about fabric, measurements, or anything else—via Call, Email, Instagram, or WhatsApp.
                    </p>

                    <h4 className="mt-5">2. Order Cancellation</h4>
                    <p>
                        You may cancel your order within 12 hours of placing it by emailing us at <a href="mailto:support@labelpatola.com">support@labelpatola.com</a>.
                        Orders cannot be cancelled once they are processed or shipped.
                    </p>

                    <h4 className="mt-5">3. Return Policy</h4>
                    <ul>
                        <li>Returns accepted within 7 days from delivery date.</li>
                        <li>Product must be unused, unwashed, and in original packaging with all tags.</li>
                        <li>Customized or made-to-order products are not returnable.</li>
                        <li>Shipping charges are non-refundable.</li>
                    </ul>

                    <h4 className="mt-5">4. Exchange Policy</h4>
                    <ul>
                        <li>Exchanges accepted for size/style issues within 7 days of delivery.</li>
                        <li>Subject to stock availability.</li>
                        <li>Returned item must meet all return conditions.</li>
                    </ul>

                    <h5 className="mt-4">When Exchanges or Returns Are Not Accepted</h5>
                    <ul>
                        <li>Color difference within 10–15% due to screen and lighting variation.</li>
                        <li>Dislike of fabric, color, or material after receiving the product.</li>
                        <li>Change of mind after placing the order.</li>
                        <li>Products from the SALE category.</li>
                        <li>Orders from outside India.</li>
                    </ul>

                    <h5 className="mt-4">Exchange Due to Size Issues</h5>
                    <p>
                        Please refer to our size chart before ordering. If you're unsure, we’ll gladly help you choose the right size.
                        If there's a sizing issue upon receipt, email <a href="mailto:labelpatolabypurvicreation@gmail.com">labelpatolabypurvicreation@gmail.com</a> with your order ID and issue details within 2 days of receiving your order.
                    </p>
                    <p>
                        Exchange requests will be handled case-by-case and depend on stock availability.
                        INR 200 per item will be charged to cover logistics for reverse pickup and re-dispatch.
                    </p>

                    <h5 className="mt-4">Exchange Due to Damaged Products</h5>
                    <p>
                        Our QC team checks every item carefully before shipping. However, if you receive a damaged/incorrect product, please email <a href="mailto:labelpatolabypurvicreation@gmail.com">labelpatolabypurvicreation@gmail.com</a> within 7 days of delivery, along with order ID and product images.
                    </p>
                    <p>
                        Upon approval, we’ll provide return shipping details. If the replacement is in stock, it will be dispatched. If not, you will receive a store credit valid for 60 days.
                    </p>

                    <h4 className="mt-5">5. Refunds</h4>
                    <p>
                        If your return is approved, your refund will be processed to the original payment method within 7–10 business days after we receive and verify the returned product.
                    </p>

                    <h4 className="mt-5">6. Non-Returnable Items</h4>
                    <ul>
                        <li>Customized or made-to-order items</li>
                        <li>Sale/Discounted items</li>
                        <li>Products damaged due to misuse or negligence</li>
                    </ul>

                    <h4 className="mt-5">7. International Orders</h4>
                    <p>
                        Orders placed from outside India are not eligible for returns or exchanges.
                    </p>

                    <h4 className="mt-5">8. Contact Us</h4>
                    <p>
                        For any issues related to cancellations, returns, or exchanges, feel free to contact us at:
                        <br />
                        <a href="mailto:support@labelpatola.com">support@labelpatola.com</a> <br />
                        <a href="mailto:labelpatolabypurvicreation@gmail.com">labelpatolabypurvicreation@gmail.com</a>
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default CancellationReturnExchangePolicy;
