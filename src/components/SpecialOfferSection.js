import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Example product image and deals (You should replace these with your real data/images)
import pro1 from '../assets/images/common/pro-1.jpeg';

const deals = [
  {
    img: pro1,
    title: 'Grey Venish Pant',
    price: '$348',
  },
  {
    img: pro1,
    title: 'Black Linen Set',
    price: '$299',
  },
  {
    img: pro1,
    title: 'Summer Cotton Dress',
    price: '$199',
  },
];

const SpecialOfferSection = () => {
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
                      nextEl: '.deal-slide-icon-right',
                      prevEl: '.deal-slide-icon-left',
                    }}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    breakpoints={{
                      576: { slidesPerView: 1 },
                      768: { slidesPerView: 1 },
                      1024: { slidesPerView: 1 },
                    }}
                    className="position-relative"
                  >
                    {deals.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className="text-center position-relative">
                          <div className="product-card border rounded-3 p-3">
                            <div className="d-flex flex-column gap-3">
                              {/* Product Image */}
                              <div className="position-relative">
                                <a href="#">
                                  <img
                                    src={item.img}
                                    className="product-img img-fluid rounded-3"
                                    alt={item.title}
                                  />
                                </a>

                                {/* Action Icons */}
                                <div className="position-absolute top-0 end-0 m-3 product-actions">
                                  <div className="d-flex flex-column gap-2">
                                    <a href="#" className="btn btn-action">
                                      <i className="bi bi-heart"></i>
                                    </a>
                                    <a href="#" className="btn btn-action">
                                      <i className="bi bi-funnel"></i>
                                    </a>
                                    <a href="#" className="btn btn-action">
                                      <i className="bi bi-eye"></i>
                                    </a>
                                  </div>
                                </div>

                                {/* Add to Cart Button */}
                                <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                                  <a href="#" className="btn btn-dark rounded-5 w-100">
                                    Add to cart
                                  </a>
                                </div>
                              </div>

                              {/* Product Info */}
                              <div>
                                <h3 className="product-name mb-1">{item.title}</h3>
                                <p className="mb-0 product-price">{item.price}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Navigation Buttons */}
                  <div className="swiper-nav d-flex align-items-center justify-content-center gap-3 mt-5">
                    <div className="slide-icon deal-slide-icon-left">
                      <i className="bi bi-arrow-left"></i>
                    </div>
                    <div className="slide-icon deal-slide-icon-right">
                      <i className="bi bi-arrow-right"></i>
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
