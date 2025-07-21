import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import your images
import pro1 from "../assets/images/common/pro-1.jpeg";
import pro2 from "../assets/images/common/pro-2.jpeg";
import pro3 from "../assets/images/common/pro-3.jpeg";
import pro4 from "../assets/images/common/pro-4.jpeg";
import pro5 from "../assets/images/common/pro-5.jpeg";
import pro6 from "../assets/images/common/pro-6.jpeg";
import ProductCard from "./productCard";

const RecommendedProductsSlider = ({ recommendedProducts = [] }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const productList = [
    { image: pro1, name: "Grey Venish Pant", price: "$499" },
    { image: pro2, name: "Grey Venish Pant", price: "$499" },
    { image: pro3, name: "Grey Venish Pant", price: "$499" },
    { image: pro4, name: "Grey Venish Pant", price: "$499" },
    { image: pro5, name: "Grey Venish Pant", price: "$499" },
    { image: pro6, name: "Grey Venish Pant", price: "$499" }
  ];

  return (
    <section className="py-5">
      <div className="container px-3">
        <div className="d-flex align-items-center justify-content-between mb-5">
          <h2 className="section-title">Recommended Products</h2>
          <div className="recommended-products-swiper-nav d-flex align-items-center gap-3">
            <div
              ref={prevRef}
              className="slide-icon recommended-products-slider-icon-left"
            >
              <i className="bi bi-arrow-left" />
            </div>
            <div
              ref={nextRef}
              className="slide-icon recommended-products-slider-icon-right"
            >
              <i className="bi bi-arrow-right" />
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={swiper => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 4 }
          }}
          className="recommended-products-slider"
        >
          {recommendedProducts.length > 0 &&
            recommendedProducts.map(product =>
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
                {/* <div className="product-card border rounded-3 p-3">
                  <div className="d-flex flex-column gap-3">
                    <div className="position-relative">
                      <a href="#">
                        <img
                          src={product.image}
                          className="product-img img-fluid rounded-3"
                          alt={product.name}
                        />
                      </a>
                      <div className="position-absolute top-0 end-0 m-3 product-actions">
                        <div className="d-flex flex-column gap-2">
                          <a href="#" className="btn btn-action">
                            <i className="bi bi-heart" />
                          </a>
                          <a href="#" className="btn btn-action">
                            <i className="bi bi-funnel" />
                          </a>
                          <a href="#" className="btn btn-action">
                            <i className="bi bi-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                        <a href="#" className="btn btn-dark rounded-5 w-100">
                          Add to cart
                        </a>
                      </div>
                    </div>
                    <div>
                      <h3 className="product-name mb-1">
                        {product.name}
                      </h3>
                      <p className="mb-0 product-price">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div> */}
              </SwiperSlide>
            )}
        </Swiper>
      </div>
    </section>
  );
};

export default RecommendedProductsSlider;
