import React from 'react';

const AccordionFeatur = () => {
    return (
        <div className="accordion" id="accordionPanelsStayOpenExample">

            {/* Occasion */}
            <div className="accordion-item border-0">
                <h2 className="accordion-header" id="headingOccasion">
                    <button
                        className="accordion-button py-2 px-1"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOccasion"
                        aria-expanded="true"
                        aria-controls="collapseOccasion"
                    >
                        Occasion
                    </button>
                </h2>
                <div
                    id="collapseOccasion"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOccasion"
                >
                    <div className="accordion-body">
                        <p  className="mb-1">Office Wear and Casual Wear</p>
                    </div>
                </div>
            </div>

            {/* Garment Care */}
            <div className="accordion-item border-0">
                <h2 className="accordion-header" id="headingGarmentCare">
                    <button
                        className="accordion-button collapsed py-2 px-1"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseGarmentCare"
                        aria-expanded="false"
                        aria-controls="collapseGarmentCare"
                    >
                        Garment Care
                    </button>
                </h2>
                <div
                    id="collapseGarmentCare"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingGarmentCare"
                >
                    <div className="accordion-body">
                        <ul>
                            <li>Only Dry Cleaning For Delicate Fabrics / Embroidery work Outfits</li>
                            <li>Second time onwards Gentle Handwash or Dry Cleaning</li>
                            <li>Avoid Soaking</li>
                            <li>Use Light Iron / Steam Iron</li>
                            <li>Do Not Dry in Direct Sunlight</li>
                            <li>Cold Gentle Machine Wash with Similar Colors</li>
                            <li>Line Dry On Reverse in Shade</li>
                            <li>Do Not Soak or Bleach</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Return & Exchange Policy */}
            <div className="accordion-item border-0">
                <h2 className="accordion-header" id="headingReturnExchange">
                    <button
                        className="accordion-button collapsed py-2 px-1"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseReturnExchange"
                        aria-expanded="false"
                        aria-controls="collapseReturnExchange"
                    >
                        Return & Exchange Policy
                    </button>
                </h2>
                <div
                    id="collapseReturnExchange"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingReturnExchange"
                >
                    <div className="accordion-body">
                        <p  className="mb-1">
                            We gladly offer exchanges for items that remain in their original condition – unworn, unused, unwashed, unaltered, undamaged, and with all original tags intact. Please ensure that you request an exchange within 48 Hours from the date of delivery.
                        </p>
                        <p  className="mb-1">This size exchange is only applicable for</p>
                        <ul>
                            <li>Products received in a damaged condition</li>
                            <li>Incorrect products delivered (whether by style or size)</li>
                        </ul>
                        <p  className="mb-1">Each product includes a Size Guide. If the size doesn’t fit you, a ₹120 per product reverse pickup fee is applicable.</p>
                        <p  className="mb-1">To read the return and exchange policy in detail, please click here Return & Exchange Policy</p>
                        <p  className="mb-1">For more details, please reach out to us on support@labelpatola.com</p>
                    </div>
                </div>
            </div>

            {/* Shipping and Delivery Policy */}
            <div className="accordion-item border-0">
                <h2 className="accordion-header" id="headingShipping">
                    <button
                        className="accordion-button collapsed py-2 px-1"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseShipping"
                        aria-expanded="false"
                        aria-controls="collapseShipping"
                    >
                        Shipping and Delivery Policy
                    </button>
                </h2>
                <div
                    id="collapseShipping"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingShipping"
                >
                    <div className="accordion-body">
                        <p  className="mb-1">We offer free shipping on all our products throughout India for orders above 1500 INR.</p>
                        <p  className="mb-1">Orders are typically processed and dispatched within 1-2 business days.</p>
                        <p  className="mb-1">However, unusual circumstances may lead to delays beyond the specified period. In case of delay (product not dispatched within the estimated time period), you can contact us.</p>
                        <p  className="mb-1">To ensure that the order reaches you in a good condition, in the shortest span of time, we ship through reputed logistics companies.</p>
                        <p  className="mb-1">You can track your order here. If your enquiry is urgent, please email us at support@labelpatola.com  and one of our team members will be in touch with you at the earliest.</p>
                        <p  className="mb-1">Please note that Saturdays, Sundays and Public Holidays are not considered as working days for standard deliveries.</p>
                    </div>
                </div>
            </div>

            {/* Seller Information */}
            <div className="accordion-item border-0">
                <h2 className="accordion-header" id="headingSellerInfo">
                    <button
                        className="accordion-button collapsed py-2 px-1"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSellerInfo"
                        aria-expanded="false"
                        aria-controls="collapseSellerInfo"
                    >
                        Seller Information
                    </button>
                </h2>
                <div
                    id="collapseSellerInfo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSellerInfo"
                >
                    <div className="accordion-body">
                        <p  className="mb-1">The Label Patola Private Limited</p>
                        <p  className="mb-1">The Label Patola ®</p>
                        <p  className="mb-1">T1-604, 6th Floor, Mahima Sansar, Opposite Radha Swami Satsang, Sahara City Homes, Beelwa Kalan Jaipur Rajasthan - 302022</p>
                        <p  className="mb-1">+91-7337604842</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccordionFeatur;
