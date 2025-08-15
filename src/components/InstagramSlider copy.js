import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import your images
import pro1 from '../assets/images/common/pro-1.jpeg';
import pro2 from '../assets/images/common/pro-2.jpeg';
import pro3 from '../assets/images/common/pro-3.jpeg';
import pro4 from '../assets/images/common/pro-4.jpeg';
import pro5 from '../assets/images/common/pro-5.jpeg';

const instagramImages = [pro1, pro2, pro3, pro4, pro5, pro1, pro2, pro5];

const InstagramSlider = () => {
  return (
    <section className="shop-instagram pt-0 pb-5">
      <div className="container px-3">
        <div className="d-flex align-items-center justify-content-center mb-4">
          <h2 className="section-title">Shop By Instagram</h2>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: '.instagram-slide-next',
            prevEl: '.instagram-slide-prev',
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={15}
          slidesPerView={2}
          loop={true}
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }}
          className="Instagram-Swiper"
        >
          {instagramImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="position-relative overflow-hidden rounded-3">
                <div className="instagram-block position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center">
                  <a href="#" className="instagram-logo">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
                <img src={img} className="img-fluid rounded-3" alt={`Insta ${index}`} />
              </div>
            </SwiperSlide>
          ))}

          {/* Optional Navigation Buttons */}
          <div className="swiper-button-prev instagram-slide-prev"></div>
          <div className="swiper-button-next instagram-slide-next"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default InstagramSlider;
