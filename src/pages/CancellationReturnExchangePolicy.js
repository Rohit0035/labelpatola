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
                        Please refer to size chart mentioned on each product page before confirming your order. In case
                        if you are not sure about your size, we would love to assist you in finding the perfect size for
                        you. If you still face issues with the size once you receive the product, please raise an email
                        on contact.  <a href="mailto:labelpatolabypurvicreation@gmail.com"> labelpatolabypurvicreation@gmail.com</a> mentioning order id number and the details mentioning
                        the issue you are facing within 2 days once you receive your order.
                    </p>
                    <p>
                        Our team will be assisting everyone on case to case basis.
                    </p>
                    <p>
                        Kindly take a note we can not assure you of offering the exchange as it depends
                        upon availability of your size in your design at that time. Additionally, it will
                        involve INR 200 additional charges per item to cover logistics expenses for re-dispatch.
                        We will provide you the return address for the product and same has to be couriered by the
                        client at their own cost.
                    </p>

                    <h4 className="mt-5">Exchange Due to Damaged Products</h4>
                    <p>
                        It’s extremely unlikely for you to receive damaged / defective or incorrect product, as we have
                        our QC team carefully checking all outfits before dispatching them. However, in rare scenario if
                        you face such issues, we would be happy to assist you with the exchange of the same.
                    </p>
                    <p>
                        Please send us an email on contact <a href="mailto:labelpatolabypurvicreation@gmail.com"> labelpatolabypurvicreation@gmail.com</a> with details of the issues 
                        you are facing along with product images within 2 days once you receive your order. All returns will 
                        be subject to our verification. Once your return request is received and verified and approved, we 
                        will provide the address for return and dispatch a replacement of the same product your way after we 
                        received the product if available. In case it’s not available we would provide you a store credit of 
                        the same amount. Validity of credit voucher issued will be of 15 days.
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
