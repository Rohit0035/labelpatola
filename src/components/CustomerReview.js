import React, { useState } from "react";
import { IMAGE_URL } from "../utils/api-config";
import { addToCart } from "../actions/cartActions";
import { useDispatch } from "react-redux";
import ReviewForm from "./ReviewForm";
import CustomerReviewsList from "./CustomerReviewsList";

const CustomerReview = ({ product }) => {
    const dispatch = useDispatch();
    const [showReviewForm, setShowReviewForm] = useState(false); // State to toggle form

    // Function to toggle form visibility
    const toggleReviewForm = () => {
        setShowReviewForm(!showReviewForm);
    };

    // Function to calculate time ago
    const timeAgo = createdAt => {
        const reviewDate = new Date(createdAt);
        const now = new Date();
        const diffTime = now.getTime() - reviewDate.getTime();

        if (diffTime < 60 * 1000) return "Just now";
        if (diffTime < 60 * 60 * 1000) return `${Math.floor(diffTime / (60 * 1000))} Minute${Math.floor(diffTime / (60 * 1000)) > 1 ? "s" : ""} ago`;
        if (diffTime < 24 * 60 * 60 * 1000) return `${Math.floor(diffTime / (60 * 60 * 1000))} Hour${Math.floor(diffTime / (60 * 60 * 1000)) > 1 ? "s" : ""} ago`;

        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const reviewDay = new Date(reviewDate.getFullYear(), reviewDate.getMonth(), reviewDate.getDate());
        if (reviewDay.getTime() === today.getTime()) return "Today";

        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        return `${diffDays} Day${diffDays > 1 ? "s" : ""} ago`;
    };

    const totalReviews = product?.product_reviews?.length;
    const ratingCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    product?.product_reviews?.forEach(review => {
        ratingCounts[review.rating]++;
    });

    return (
        <section className="pb-5 pt-0" id="rv_list">
            <div className="container">
                <div className="card border-0 shadow-sm">
                    <div className="card-body">
                        <h5 className="mb-4 fs-2 text-center">Customer Reviews</h5>

                        {/* Rating Summary */}
                        <div className="row">
                            <div className="col-md-3">
                                <div className="text-center flex-shrink-0 mb-2">
                                    <div id="rating-number">
                                        <h2 className="mb-2">{product?.review_details?.average_rating}</h2>
                                        <div className="rating-star">
                                            {[...Array(5)].map((_, index) => (
                                                <i
                                                    key={index}
                                                    className={
                                                        index < Math.round(product?.review_details?.average_rating)
                                                            ? "bi bi-star-fill text-warning"
                                                            : "bi bi-star text-warning"
                                                    }
                                                />
                                            ))}
                                        </div>
                                        <p className="mb-0">({product?.review_details?.total_reviews} Ratings)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="vr d-none d-lg-flex" />
                                <div className="w-100">
                                    {[5, 4, 3, 2, 1].map(star => (
                                        <div className="d-flex align-items-center gap-2" key={star}>
                                            <i className="bi bi-star-fill text-warning" />
                                            <span>{star}</span>
                                            <div
                                                className="progress w-100"
                                                role="progressbar"
                                                aria-valuenow={75}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ height: 7 }}
                                            >
                                                <div
                                                    className="progress-bar bg-dark"
                                                    style={{
                                                        width: `${(ratingCounts[star] / totalReviews) * 100 || 0}%`
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="text-center mt-4">
                                    <button
                                        type="button"
                                        className="btn btn-outline-dark px-4 py-2"
                                        onClick={toggleReviewForm}
                                    >
                                        {showReviewForm ? "Cancel" : "Write a review"}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Review Form */}
                        {showReviewForm && (
                            <div className="review-form mt-4">
                                <ReviewForm />
                            </div>
                        )}


                        {/* customer review list start */}

                        <CustomerReviewsList/>

                        {/* customer review list close*/}


                        {/* Customer Reviews List */}
                        {/* <div className="customer-reviews-list mt-5">
                            {product?.product_reviews?.map((review, index) => (
                                <div className="customer-reviews-list-item border-top py-4" key={index}>
                                    <div className="d-flex align-items-start gap-3">
                                        <div className="customer-pic">
                                            <span>{review?.customer?.full_name?.charAt(0)}</span>
                                        </div>
                                        <div className="flex-grow-1">
                                            {[...Array(5)].map((_, idx) => (
                                                <i
                                                    key={idx}
                                                    className={
                                                        idx < Math.round(review?.rating)
                                                            ? "bi bi-star-fill text-warning"
                                                            : "bi bi-star text-warning"
                                                    }
                                                />
                                            ))}
                                            <h6 className="mb-0 customer-name">{review?.customer?.full_name}</h6>
                                        </div>
                                        <div className="review-date">
                                            <span>{timeAgo(review?.created_at)}</span>
                                        </div>
                                    </div>
                                    <div className="review-description mt-2">
                                        <p className="mb-0">{review?.description}</p>
                                        <div className="d-flex align-items-center justify-content-end gap-3">
                                            <span>Helpful?</span>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-light rounded-3 border d-flex align-items-center gap-1"
                                            >
                                                <i className="bi bi-hand-thumbs-up" />
                                                <span>6</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerReview;
