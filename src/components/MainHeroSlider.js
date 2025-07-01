import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Image Imports
import Slider1 from '../assets/images/common/slider-1.jpg';
import Slider2 from '../assets/images/common/slider-2.jpg';
import Slider3 from '../assets/images/common/slider-3.jpg';

const MainHeroSlider = () => {
  return (
    <section className="main-slider-wrapper position-relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: '.main-slider-icon-right',
          prevEl: '.main-slider-icon-left',
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        className="main-slider position-relative mob-view"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="slider-content position-absolute top-50 start-0 end-0 translate-middle-y">
            <div className="container px-3">
              <p className="sub-title mb-lg-3">Elegance Redefined</p>
              <h2 className="large-title">
                Stay Confident! <br />
                Shop the latest trends now
              </h2>
              <div className="slide-btn mt-lg-5">
                <a href="#" className="btn btn-dark px-md-5 py-md-3 rounded-5">
                  Explore Collection
                </a>
              </div>
            </div>
          </div>
          <img src={Slider1} className="img-fluid rounded-0" alt="Slide 1" />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="slider-content position-absolute top-50 start-0 end-0 translate-middle-y">
            <div className="container py-4 px-3">
              <p className="sub-title mb-lg-3">The Chic Closet</p>
              <h2 className="large-title">
                Casual Fashion <br /> Dress up, feel amazing
              </h2>
              <div className="slide-btn mt-lg-5">
                <button className="btn btn-dark px-md-5 py-md-3 rounded-5">
                  Explore Collection
                </button>
              </div>
            </div>
          </div>
          <img src={Slider2} className="img-fluid rounded-0" alt="Slide 2" />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="slider-content position-absolute top-50 start-0 end-0 translate-middle-y">
            <div className="container py-4 px-3">
              <p className="sub-title mb-lg-3">Gypsy Soul Styles</p>
              <h2 className="large-title">
                Step Up Your Fashion <br /> Discover statement pieces today
              </h2>
              <div className="slide-btn mt-lg-5">
                <button className="btn btn-dark px-md-5 py-md-3 rounded-5">
                  Explore Collection
                </button>
              </div>
            </div>
          </div>
          <img src={Slider3} className="img-fluid rounded-0" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-nav d-flex align-items-center justify-content-between gap-3 position-absolute end-0 start-0 mx-3 top-0 d-none d-lg-flex">
        <div className="slide-icon main-slider-icon-left">
          <i className="bi bi-arrow-left"></i>
        </div>
        <div className="slide-icon main-slider-icon-right">
          <i className="bi bi-arrow-right"></i>
        </div>
      </div>
    </section>
  );
};

export default MainHeroSlider;
