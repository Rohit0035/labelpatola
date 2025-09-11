import React from "react";

const AccordionFeatur = ({ product }) => {
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
                        <div
                            className="prose"
                            dangerouslySetInnerHTML={{ __html: product?.occasion }}
                        />
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
                        <div
                            className="prose"
                            dangerouslySetInnerHTML={{ __html: product?.garment_care }}
                        />
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
                        <div
                            className="prose"
                            dangerouslySetInnerHTML={{ __html: product?.return_policy }}
                        />
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
                        <div
                            className="prose"
                            dangerouslySetInnerHTML={{ __html: product?.shipping_return }}
                        />
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
                        <div
                            className="prose"
                            dangerouslySetInnerHTML={{ __html: product?.seller_information }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccordionFeatur;
