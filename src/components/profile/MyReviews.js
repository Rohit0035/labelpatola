import React, { useEffect, useState } from "react";
import { showToast } from "../ToastifyNotification";
import { saveProductReview } from "../../api/userProfileAPI";

const MyReviews = ({ productReviews = [], purchasedProducts = [] }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const [newProduct, setNewProduct] = useState(0);
  const [newRating, setNewRating] = useState(0);
  const [newTitle, setNewTitle] = useState("");
  const [newComment, setNewComment] = useState("");

  useEffect(
    () => {
      if (productReviews && productReviews.length > 0) {
        setReviews(productReviews);
      }
    },
    [productReviews]
  );
  const handleAddReview = async e => {
    e.preventDefault();
    if (newRating > 0 && newComment.trim() !== "") {
      const newReview = {
        product_id: newProduct,
        title: newTitle,
        rating: newRating,
        description: newComment
      };
      try {
        const data = await saveProductReview(newReview);
        if (data.success) {
          showToast("success", "Review added successfully.");
          setReviews([...reviews, data.data]);
          setNewProduct(0);
          setNewRating(0);
          setNewTitle("");
          setNewComment("");
        }
      } catch (error) {
        console.error("Error adding review:", error);
      } finally {
        setLoading(false);
      }
    } else {
      showToast("error", "Please fill in all the required fields.");
    }
  };

  const renderStars = count => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`bi ${i <= count
            ? "bi-star-fill text-warning"
            : "bi-star"}`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="my-reviews border rounded-3 p-3">
      {/* Add Review Form */}
      <form onSubmit={handleAddReview}>
        <div className="mb-4">
          <h5>Add a Review</h5>
          <hr />
          <div className="mb-3">
            <label htmlFor="product" className="form-label">
              Product
            </label>
            <select
              className="form-select"
              id="product"
              value={newProduct}
              onChange={e => setNewProduct(parseInt(e.target.value))}
            >
              <option value="0">Select Rating</option>
              {purchasedProducts.map(product =>
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              )}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="rating" className="form-label">
              Rating
            </label>
            <select
              className="form-select"
              id="rating"
              value={newRating}
              onChange={e => setNewRating(parseInt(e.target.value))}
            >
              <option value="0">Select Rating</option>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <textarea
              className="form-control"
              id="title"
              rows="3"
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="comment" className="form-label">
              Comment
            </label>
            <textarea
              className="form-control"
              id="comment"
              rows="3"
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
            />
          </div>
          <button className="btn btn-dark" type="submit">
            Submit Review
          </button>
        </div>
      </form>

      {/* Reviews Table */}
      <div className="table-responsive">
        <table className="table align-middle mb-0">
          <thead className="table-light">
            <tr>
              <th>S. No</th>
              <th>Product</th>
              <th>Rating</th>
              <th>Title</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {reviews.length > 0
              ? reviews.map((review, index) =>
                  <tr key={review.id}>
                    <td>
                      {index + 1}
                    </td>
                    <td>
                      {review?.product?.name}
                    </td>
                    <td>
                      <span className="text-warning">
                        {renderStars(review.rating)}
                      </span>
                    </td>
                    <td>
                      {review.title}
                    </td>
                    <td>
                      {review.description}
                    </td>
                  </tr>
                )
              : <tr>
                  <td colSpan="5">No reviews found.</td>
                </tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
