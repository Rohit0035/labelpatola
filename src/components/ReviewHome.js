import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const reviews = [
  {
    text: '“Absolutely love the fit and fabric! Got tons of compliments.”',
    author: 'Priya S.',
  },
  {
    text: '“Vibrant colors and fast delivery. Highly recommend!”',
    author: 'Meenal R.',
  },
  {
    text: '“The material is so breathable and comfy. Perfect for summers!”',
    author: 'Ritika M.',
  },
  {
    text: '“Excellent customer service and quality. Will buy again!”',
    author: 'Anjali K.',
  },
];

const ReviewHome = () => {
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
            nextEl: '.review-swiper-next',
            prevEl: '.review-swiper-prev',
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="review-swiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="review-card p-3 shadow rounded h-100 my-3">
                <p>{review.text}</p>
                <div className="review-author mt-3 d-flex align-items-center">
                  <i className="bi bi-person-circle me-2 user-icon"></i>
                  <strong>{review.author}</strong>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Optional Navigation Buttons */}
          <div className="swiper-button-prev review-swiper-prev"></div>
          <div className="swiper-button-next review-swiper-next"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewHome;
