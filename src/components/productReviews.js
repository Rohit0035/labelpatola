import React from "react";
import { IMAGE_URL } from "../utils/api-config";
import { addToCart } from "../actions/cartActions";
import { useDispatch } from "react-redux";

const ProductReviews = ({ product }) => {
  const dispatch = useDispatch();

  // Function to calculate time ago (simple example, you might want a more robust solution)
  const timeAgo = createdAt => {
    const reviewDate = new Date(createdAt);
    const now = new Date();
    const diffTime = now.getTime() - reviewDate.getTime(); // Use getTime() for millisecond difference

    // Less than a minute
    if (diffTime < 60 * 1000) {
      return "Just now";
    }
    // Less than an hour
    if (diffTime < 60 * 60 * 1000) {
      const minutes = Math.floor(diffTime / (60 * 1000));
      return `${minutes} Minute${minutes > 1 ? "s" : ""} ago`;
    }
    // Less than a day
    if (diffTime < 24 * 60 * 60 * 1000) {
      const hours = Math.floor(diffTime / (60 * 60 * 1000));
      return `${hours} Hour${hours > 1 ? "s" : ""} ago`;
    }

    // Check if it's "today" (same calendar day)
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const reviewDay = new Date(
      reviewDate.getFullYear(),
      reviewDate.getMonth(),
      reviewDate.getDate()
    );

    if (reviewDay.getTime() === today.getTime()) {
      return "Today";
    }

    // Days ago
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} Day${diffDays > 1 ? "s" : ""} ago`;
  };

  const totalReviews = product?.product_reviews?.length;
  const ratingCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  product?.product_reviews?.forEach(review => {
    ratingCounts[review.rating]++;
  });

  return (
    <div>
      <h5 className="mb-4">Customer Reviews</h5>
      <div className="hstack gap-md-5 gap-4 flex-column flex-lg-row">
        <div className="text-center flex-shrink-0">
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
        <div className="vr d-none d-lg-flex" />
        <div className="w-100">
          {[5,4,3,2,1].map((star) => (
            <div className="d-flex align-items-center gap-2">
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
                <div className="progress-bar bg-dark" style={{ width:  `${ratingCounts[star] / totalReviews * 100 ||
                            0}%` }} />
              </div>
            </div>
          ))}
        </div>
       
      </div>
      <div className="customer-reviews-list mt-5">
        {
          product?.product_reviews?.map((review, index) => (
            <div className="customer-reviews-list-item border-top py-4">
            <div className="d-flex align-items-start gap-3">
              <div className="customer-pic">
                <span>{review?.customer?.full_name?.charAt(0)}</span>
              </div>
              <div className="flex-grow-1">
              {[...Array(5)].map((_, index) => (
                <i
                  key={index}
                  className={
                    index < Math.round(review?.rating)
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
              <p className="mb-0">
                {review?.description}
              </p>
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
          ))
        }
        <div className="text-center mt-4">
          <a href="javascript:;" className="btn btn-outline-dark px-4 py-2">
            See All Reviews
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
