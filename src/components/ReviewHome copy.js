import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const reviews = [
  {
    text: "“Absolutely love the fit and fabric! Got tons of compliments.”",
    author: "Priya S."
  },
  {
    text: "“Vibrant colors and fast delivery. Highly recommend!”",
    author: "Meenal R."
  },
  {
    text: "“The material is so breathable and comfy. Perfect for summers!”",
    author: "Ritika M."
  },
  {
    text: "“Excellent customer service and quality. Will buy again!”",
    author: "Anjali K."
  }
];

const ReviewHome = ({ testimonials = [] }) => {
  return (
    <section className="review-section py-5">
      <div className="container">
        <h2 className="mb-4 text-center">Customer Reviews</h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".review-swiper-next",
            prevEl: ".review-swiper-prev"
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="review-swiper"
        >
          {testimonials.length > 0 &&
            testimonials.map((review, index) =>
              <SwiperSlide key={index}>
                <div className="review-card p-3 shadow rounded h-100 my-3">
                  <p
                    className="text-gray-700 mb-24"
                    dangerouslySetInnerHTML={{ __html: review.content }}
                  />

                  <div className="review-author mt-3 d-flex align-items-center">
                    <i className="bi bi-person-circle me-2 user-icon" />
                    <strong>
                      {review.name}
                    </strong>
                  </div>
                </div>
              </SwiperSlide>
            )}

          {/* Optional Navigation Buttons */}
          <div className="swiper-button-prev review-swiper-prev" />
          <div className="swiper-button-next review-swiper-next" />
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewHome;
