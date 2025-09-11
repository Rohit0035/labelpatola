import React, { useState } from "react";
import { Link } from "react-router-dom";
import { saveProductReview } from "../api/userProfileAPI";
import { showToast } from "./ToastifyNotification";
// import './ReviewForm.css';

const ReviewForm = ({ product }) => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [form, setForm] = useState({
        title: "",
        description: ""
        // youtube: '',
        // name: '',
        // email: '',
    });

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleFileChange = e => {
        const files = Array.from(e.target.files);
        const newImages = files.map(file => ({
            file,
            preview: URL.createObjectURL(file)
        }));

        setImages(prev => [...prev, ...newImages]);
    };

    const removeImage = index => {
        const updated = [...images];
        URL.revokeObjectURL(updated[index].preview); // Clean memory
        updated.splice(index, 1);
        setImages(updated);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        let formData = new FormData();
        formData.append("product_id", product?.id);
        formData.append("rating", rating);
        formData.append("title", form.title);
        formData.append("description", form.description);

        // Append images one by one
        images.forEach(img => {
            formData.append("images[]", img.file);
        });
        for (let pair of formData.entries()) {
  console.log(pair[0], pair[1]);
}
        try {
            const data = await saveProductReview(formData);
            if (data.success) {
                showToast("success", "Review added successfully.");
                setForm({ title: "", description: "" });
                setRating(0);
                setImages([]);
            }
        } catch (error) {
            console.error("Error adding review:", error);
            showToast("error", "Failed to add review.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="mt-4">
            <div className="row">
                <div className="col-md-3" />
                <div className="col-md-6">
                    <h4 className="text-center mb-3">Write a review</h4>
                    {/* Star Rating */}
                    <div className="d-flex justify-content-center mb-3">
                        {[1, 2, 3, 4, 5].map(star =>
                            <i
                                key={star}
                                className={`bi ${(hoverRating || rating) >= star
                                    ? "bi-star-fill text-warning"
                                    : "bi-star text-secondary"} fs-4 mx-1`}
                                style={{ cursor: "pointer" }}
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHoverRating(star)}
                                onMouseLeave={() => setHoverRating(0)}
                            />
                        )}
                    </div>

                    <form onSubmit={handleSubmit}>
                        {/* Review Title */}
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Give your review a title"
                                name="title"
                                value={form.title}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        {/* Comments */}
                        <div className="mb-3">
                            <textarea
                                className="form-control"
                                placeholder="Write your comments here"
                                name="description"
                                rows="4"
                                value={form.description}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        {/* Upload Section */}
                        <div className="mb-3">
                            <label
                                htmlFor="fileUpload"
                                className="upload-box w-100 text-center"
                            >
                                <i
                                    className="bi bi-upload fs-1 text-secondary"
                                    style={{ cursor: "pointer" }}
                                />
                                <div>Upload Pictures (optional)</div>
                            </label>
                            <input
                                type="file"
                                id="fileUpload"
                                className="d-none"
                                onChange={handleFileChange}
                                multiple
                                accept="image/*,video/*"
                            />
                        </div>

                        {/* Image Preview */}
                        <div className="d-flex flex-wrap gap-3 mb-3">
                            {images.map((img, index) =>
                                <div
                                    key={index}
                                    className="position-relative image-preview-box"
                                >
                                    <img
                                        src={img.preview}
                                        alt={`preview-${index}`}
                                        className="img-thumbnail"
                                        style={{ width: "70px", height: "70px" }}
                                    />
                                    <i
                                        className="bi bi-x-circle-fill text-danger position-absolute top-0 end-0 m-1"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => removeImage(index)}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Buttons */}
                        <div className="d-flex justify-content-between mt-4">
                            <button type="submit" className="btn btn-outline-dark px-4 py-2">
                                Submit Review
                            </button>
                        </div>

                        {/* Terms */}
                        <p className="fs-6 text-muted mt-3">
                            How we use your data: We’ll only contact you about the review you
                            left, and only if necessary.
                        </p>
                    </form>
                </div>
                <div className="col-md-3" />
            </div>
        </div>
    );
};

export default ReviewForm;
