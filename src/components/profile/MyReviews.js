import React, { useState } from 'react';

const MyReviews = () => {
    const [reviews, setReviews] = useState([
        {
            id: 1,
            rating: 4,
            comment: 'Great quality and fast delivery!'
        },
        {
            id: 2,
            rating: 3,
            comment: 'Product is good, but packaging was not up to the mark.'
        },
        {
            id: 3,
            rating: 2,
            comment: 'Average experience, expected more features.'
        },
        {
            id: 4,
            rating: 5,
            comment: 'Absolutely loved it. Will order again!'
        }
    ]);

    const [newRating, setNewRating] = useState(0);
    const [newComment, setNewComment] = useState('');

    const handleAddReview = () => {
        if (newRating > 0 && newComment.trim() !== '') {
            const newReview = {
                id: reviews.length + 1,
                rating: newRating,
                comment: newComment
            };
            setReviews([newReview, ...reviews]);
            setNewRating(0);
            setNewComment('');
        }
    };

    const handleDelete = (id) => {
        const updated = reviews.filter((review) => review.id !== id);
        setReviews(updated);
    };

    const renderStars = (count) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <i
                    key={i}
                    className={`bi ${i <= count ? 'bi-star-fill text-warning' : 'bi-star'}`}
                ></i>
            );
        }
        return stars;
    };

    return (
        <div className="my-reviews border rounded-3 p-3">
            {/* Add Review Form */}
            <div className="mb-4">
                <h5>Add a Review</h5>
                <hr/>
                <div className="mb-3">
                    <label htmlFor="rating" className="form-label">
                        Rating
                    </label>
                    <select
                        className="form-select"
                        id="rating"
                        value={newRating}
                        onChange={(e) => setNewRating(parseInt(e.target.value))}
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
                    <label htmlFor="comment" className="form-label">
                        Comment
                    </label>
                    <textarea
                        className="form-control"
                        id="comment"
                        rows="3"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    ></textarea>
                </div>
                <button className="btn btn-dark" onClick={handleAddReview}>
                    Submit Review
                </button>
            </div>

            {/* Reviews Table */}
            <div className="table-responsive">
                <table className="table align-middle mb-0">
                    <thead className="table-light">
                        <tr>
                            <th>S. No</th>
                            <th>Rating</th>
                            <th>Comments</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map((review, index) => (
                            <tr key={review.id}>
                                <td>{index + 1}</td>
                                <td>
                                    <span className="text-warning">{renderStars(review.rating)}</span>
                                </td>
                                <td>{review.comment}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => handleDelete(review.id)}
                                    >
                                        <i className="bi bi-trash-fill"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;
