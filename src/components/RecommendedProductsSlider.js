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

    <>
      <section className='pb-5 pt-0'>
        <div className='container'>
          <div className="text-center mb-4">
            <h2 className="section-title">
              You May Also Like
            </h2>
            <hr className="section__heading-line text-black" />
          </div>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={15}
            breakpoints={{
              320: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 4 },
            }}
          >
            {recommendedProducts.length > 0 &&
              recommendedProducts.map(product =>
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              )}
          </Swiper>
        </div>

      </section>
    </>
  );
};

export default RecommendedProductsSlider;
