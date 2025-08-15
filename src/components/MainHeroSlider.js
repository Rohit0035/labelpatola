import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Image Imports
import SliderMobile from "../assets/images/common/pro-1-mob.jpg";
import SliderMobile2 from "../assets/images/common/slider-2.jpg";
import SliderMobile3 from "../assets/images/common/slider-3.jpg";
import { Link } from "react-router-dom";
import { IMAGE_URL } from "../utils/api-config";

const MainHeroSlider = ({ banners = [] }) => {
  return (
    <section className="main-slider-wrapper position-relative">
      <Swiper
        modules={[Autoplay]} //   nextEl: '.main-slider-icon-right', // navigation={{
        //   prevEl: '.main-slider-icon-left',
        // }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        className="main-slider position-relative mob-view"
      >
        {banners.length > 0 &&
          banners.map((banner, index) =>
            <SwiperSlide key={index} >
              <div className="slider-content position-absolute top-50 start-0 end-0 translate-middle-y">
                <div className="container px-3">
                  <p className="sub-title mb-0">
                    {banner.title}
                  </p>
                  <h2 className="large-title">
                    {banner.description}
                  </h2>
                  <div className="slide-btn mt-lg-3">
                    <Link
                      to="/shop"
                      className="btn btn-dark px-md-5 py-md-3 rounded-5"
                    >
                      Explore Collection
                    </Link>
                  </div>
                </div>
              </div>
              <img
                src={`${IMAGE_URL}/${banner.image}`}
                className="img-fluid rounded-0 d-none d-sm-block"
                alt="Slide 1"
              />
               <img
                src={SliderMobile}
                className="img-fluid rounded-0 d-block d-sm-none"
                alt="Slide 1"
              />
            </SwiperSlide>
          )}
      </Swiper>

      {/* Custom Navigation Buttons */}
      {/* <div className="swiper-nav d-flex align-items-center justify-content-between gap-3 position-absolute end-0 start-0 mx-3 top-0 d-none d-lg-flex">
        <div className="slide-icon main-slider-icon-left">
          <i className="bi bi-arrow-left"></i>
        </div>
        <div className="slide-icon main-slider-icon-right">
          <i className="bi bi-arrow-right"></i>
        </div>
      </div> */}
    </section>
  );
};

export default MainHeroSlider;
