import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import the ProductCard component
import ProductCard from "./productCard"; // Assuming ProductCard.js is in the same directory or adjust the path

// Example product image (You should replace these with your real data/images)
import pro1 from "../assets/images/common/pro-1.jpeg";

const SpecialOfferSection = ({ justForYou = [] }) => {
  return (
    <section className="special-offer py-5">
      <div className="container px-3">
        <div className="d-flex align-items-center justify-content-center mb-4">
          <h2 className="section-title">Just for you</h2>
        </div>

        <div className="row g-4">
          {/* Left Side Image */}
          <div className="col-12 col-xl-6 d-flex">
            <div className="card w-100 border">
              <div className="card-body">
                <img src={pro1} alt="Special Offer" width="100%" />
              </div>
            </div>
          </div>

          {/* Right Side Swiper Slider */}
          <div className="col-12 col-xl-6 d-flex">
            <div className="card w-100 border">
              <div className="card-body">
                <div className="dealsSwiper position-relative">
                  <Swiper
                    modules={[Navigation]}
                    navigation={{
                      nextEl: ".deal-slide-icon-right",
                      prevEl: ".deal-slide-icon-left"
                    }}
                    spaceBetween={20}
                    slidesPerView={2}
                    loop={true}
                    breakpoints={{
                      576: { slidesPerView: 2 },
                      768: { slidesPerView: 2 },
                      1024: { slidesPerView: 1 }
                    }}
                    className="position-relative"
                  >
                    {justForYou.length > 0 &&
                      justForYou.map((product, index) =>
                        <SwiperSlide key={index}>
                          <div className="position-relative">
                            {/* Render the ProductCard component here */}
                            <ProductCard product={product} />
                          </div>
                        </SwiperSlide>
                      )}
                  </Swiper>

                  {/* Navigation Buttons */}
                  <div className="swiper-nav d-flex align-items-center justify-content-center gap-3 mt-5">
                    <div className="slide-icon deal-slide-icon-left">
                      <i className="bi bi-arrow-left" />
                    </div>
                    <div className="slide-icon deal-slide-icon-right">
                      <i className="bi bi-arrow-right" />
                    </div>
                  </div>
                </div>
                {/* swiper end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferSection;
