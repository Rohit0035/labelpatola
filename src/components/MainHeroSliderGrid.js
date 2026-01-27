import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { IMAGE_URL } from "../utils/api-config";

const MainHeroSliderGrid = ({ banners = [] }) => {
  return (
    <section className="main-slider-wrapper position-relative">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        spaceBetween={5}
        slidesPerView={1}
        breakpoints={{
          576: { slidesPerView: 1 }, // mobile
          768: { slidesPerView: 2 }, // tablet
          992: { slidesPerView: 3 }, // desktop
        }}
        className="main-slider"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <Link to="/shop" className="d-block h-100">
              <div className="st-img-video-card">
                {/* Desktop */}
                {banner.image ? (
                  <img
                    src={`${IMAGE_URL}/${banner.image}`}
                    className="img-fluid w-100 h-100 object-fit-fill d-none d-sm-block"
                    alt="Slide"
                  />
                ) : (
                  <video
                    src={`${IMAGE_URL}/${banner.desktop_video}`}
                    className="w-100 h-100 object-fit-fill d-none d-sm-block"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                )}

                {/* Mobile */}
                {banner.mobile_image ? (
                  <img
                    src={`${IMAGE_URL}/${banner.mobile_image}`}
                    className="img-fluid w-100 h-100 object-fit-cover d-block d-sm-none"
                    alt="Slide"
                  />
                ) : (
                  <video
                    src={`${IMAGE_URL}/${banner.mobile_video}`}
                    className="w-100 h-100 object-fit-cover d-block d-sm-none"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                )}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MainHeroSliderGrid;
