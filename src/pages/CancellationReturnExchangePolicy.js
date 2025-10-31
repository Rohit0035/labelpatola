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
                    <h2 className="text-white">Cancellation, Return & Exchange Policy</h2>
                    <nav>
                        <ol className="breadcrumb mb-0 gap-2">
                            <li className="breadcrumb-item">
                                <a href="/" className="breadcrumb-link text-white">Home</a>
                            </li>
                            <li><i className="bi bi-chevron-right text-white" /></li>
                            <li className="breadcrumb-item breadcrumb-active text-white">Cancellation, Return & Exchange</li>
                        </ol>
                    </nav>
                </div>
            </section>
            {/* End Breadcrumb */}

            <section className="py-5">
                <div className="container">
                    <h3 className="mb-4 text-start">Cancellation, Return & Exchange Policy</h3>

                    <p>
                        We at <strong>Label Patola</strong> follow a very customer-friendly policy to ensure your purchases are free of any stress or issues. 
                        We are always with you — before and after your purchase. As an additional measure, we encourage everyone to read through 
                        the following terms & conditions prior to making a purchase.
                    </p>
                    <p>
                        Please ask as many questions as you wish to before confirming your order including fabric type, design, measurements, 
                        or anything that helps you make your decision. We would love to respond and assist you with ordering. You can simply 
                        reach out to us via Calls, Email, Instagram, or even WhatsApp. We are just a message away, and our team is available 
                        <strong> 24x7, 365 days!</strong>
                    </p>

                    <h4 className="mt-5">When Exchange is not accepted?</h4>
                    <ul>
                        <li><strong>Exchange/Return not accepted due to color difference.</strong> A 10-15% color difference might occur due to screen resolution and lighting.</li>
                        <li><strong>Exchange/Return not accepted</strong> if the customer does not like the material or color of the product ordered. 
                            We use the best quality materials available, and all product details are mentioned in the description. 
                            We suggest reading all details carefully before placing your order.</li>
                        <li><strong>Exchange/Return not accepted</strong> due to any other reasons such as a sudden change of mind after placing the order.</li>
                        <li><strong>Exchange/Return not accepted</strong> for designs from the SALE category.</li>
                        <li><strong>Exchange/Return not accepted</strong> for overseas orders.</li>
                    </ul>

                    <h4 className="mt-5">Exchange Due to Size Issues</h4>
                    <p>
                        Please refer to the size chart mentioned on each product page before confirming your order. 
                        In case you are unsure about your size, we would love to assist you in finding the perfect fit.
                    </p>
                    <p>
                        If you still face issues with the size once you receive the product, please raise an email to 
                        <a href="mailto:labelpatolabypurvicreation@gmail.com"> labelpatolabypurvicreation@gmail.com</a> 
                        mentioning your order ID and the issue within <strong>2 days</strong> of receiving your order.
                    </p>
                    <p>
                        Our team will assist you on a case-to-case basis. Kindly note, we cannot assure an exchange as it depends on 
                        the availability of your size in the same design at that time. Additionally, it will involve an 
                        <strong> INR 200 additional charge per item</strong> to cover logistics expenses for reverse pickup and re-dispatch.
                    </p>

                    <h4 className="mt-5">Exchange Due to Damaged Products</h4>
                    <p>
                        It’s extremely unlikely for you to receive a damaged, defective, or incorrect product as our QC team 
                        carefully checks all outfits before dispatching them. However, in rare cases, if you face such issues, 
                        we would be happy to assist you with an exchange.
                    </p>
                    <p>
                        Please send us an email at 
                        <a href="mailto:labelpatolabypurvicreation@gmail.com"> labelpatolabypurvicreation@gmail.com</a> 
                        with details of the issue along with product images within <strong>7 days</strong> of receiving your order. 
                        All returns are subject to verification.
                    </p>
                    <p>
                        Once your return request is received, verified, and approved, we will provide the address for return and 
                        dispatch a replacement of the same product if available. In case it’s not available, 
                        we will issue a <strong>store credit of the same amount</strong>, valid for <strong>60 days</strong>.
                    </p>

                    <h4 className="mt-5">Returns / Exchanges For International Orders</h4>
                    <p>
                        Kindly note that <strong>orders received from overseas are not eligible for returns or exchange.</strong>
                    </p>

                </div>
            </section>

            <Footer />
        </>
    );
};

export default CancellationReturnExchangePolicy;
