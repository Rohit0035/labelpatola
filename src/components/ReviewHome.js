import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Reviewpic from "../assets/images/common/review-cus.jpg";
import { Link } from "react-router-dom";

// Import Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { IMAGE_URL } from "../utils/api-config";

const reviews = [
  {
    author: "Priya S.",
    verified: true,
    rating: 5,
    text: "My fifth dress from this store within 6 months… best comfortable and affordable for daily office wear. Love the collection! The fit is perfect and the fabric feels great on my skin. The delivery was quick, and packaging was neat. I am already planning my next order.",
    address: "The Label Patola",
  },
  {
    author: "Meenal R.",
    verified: false,
    rating: 4,
    text: "Vibrant colors and fast delivery. Highly recommend! The customer support was responsive and helped me with sizing. Will be buying more soon.",
    address: "The Label Patola",
  },
  {
    author: "Priya S.",
    verified: true,
    rating: 5,
    text: "My fifth dress from this store within 6 months… best comfortable and affordable for daily office wear. Love the collection! The fit is perfect and the fabric feels great on my skin. The delivery was quick, and packaging was neat. I am already planning my next order.",
    address: "The Label Patola",
  },
];

const ReviewHome = ({ customerReviews = [] }) => {
  const [selectedReview, setSelectedReview] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleReadMore = (review) => {
    setSelectedReview(review);
    const modal = new window.bootstrap.Modal(
      document.getElementById("reviewModal")
    );
    modal.show();
  };

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  return (
    <section className="review-section pt-0 pb-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="section-title">
            Customer Reviews
          </h2>
          <hr className="section__heading-line text-black" />
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".review-swiper-next",
            prevEl: ".review-swiper-prev",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="review-swiper"
        >
          {customerReviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="card shadow-sm rounded-3 h-100">
                {
                  review.images?.split(",")[0] == null && (
                    <img
                      src={Reviewpic}
                      alt={review.title}
                      className="rounded-top-3 w-100"
                      style={{ height: "280px", objectFit: "cover" }}
                    />
                  )
                }
                <div className="card-body text-center mt-3">
                  <div className="mb-2 text-warning fs-5">
                    {[...Array(review.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill me-1"></i>
                    ))}
                  </div>
                  <h5 className="card-title text-primary">
                    {review?.customer?.full_name}{" "}
                    {review.status == 'Approved' && (
                      <span
                        className="badge bg-success ms-1"
                        style={{ fontSize: "12px" }}
                      >
                        Verified
                      </span>
                    )}
                  </h5>

                  {/* 3-line clamp text */}
                  <p className="card-text clamp-3-lines mb-1 fw-bold">{review.title}</p>
                  <p className="card-text clamp-3-lines mb-1">{review.description.slice(0, 100)}</p>
                  <span>
                    <Link onClick={() => handleReadMore(review)}>Read More</Link>
                  </span>
                  <p className="card-text mb-1 mt-3">
                    <b>{review.address}</b>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev review-swiper-prev" />
          <div className="swiper-button-next review-swiper-next" />
        </Swiper>
      </div>

      {/* Review Modal */}
      <div
        className="modal fade"
        id="reviewModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content bg-transparent shadow-none border-none">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close bg-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body bg-white">
              <div className="mb-2 text-warning fs-5">
                {[...Array(selectedReview?.rating || 0)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill me-1"></i>
                ))}
              </div>
              <div className="d-flex">
                <span>
                  <i class="bi bi-person-circle me-2 fs-1 text-primary"></i>
                </span>
                <h5 className="modal-title mt-2">
                  {selectedReview?.customer?.full_name}{" "}
                  {selectedReview?.status == 'Approved' && (
                    <span
                      className="badge bg-success ms-1"
                      style={{ fontSize: "12px" }}
                    >
                      Verified
                    </span>
                  )}
                </h5>
              </div>
              <p className="mb-1 fw-bold">{selectedReview?.title}</p>
              <p className="">{selectedReview?.description}</p>
              {/* Image clickable to open lightbox */}

              <div className="row">
                <div className="col-md-3">
                  {selectedReview?.images && selectedReview?.images
                    ?.split(",") // turn comma-separated string into array
                    .map((img, idx) => (
                      <img
                        key={idx}
                        src={`${IMAGE_URL}/${img}`}
                        alt={selectedReview?.title}
                        className="rounded w-100 mb-3"
                        style={{ height: "100px", objectFit: "cover", cursor: "pointer" }}
                        onClick={() => {openLightbox(idx);setSelectedImage(img)}} // pass index if needed
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={[{ src: `${IMAGE_URL}/${selectedImage}` }]}
      />
    </section>
  );
};

export default ReviewHome;
