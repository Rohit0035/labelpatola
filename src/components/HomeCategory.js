import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import product1 from "../assets/images/common/pro-1.jpeg";
import product2 from "../assets/images/common/pro-2.jpeg";
import product3 from "../assets/images/common/pro-3.jpeg";
import product4 from "../assets/images/common/pro-4.jpeg";
import product5 from "../assets/images/common/pro-5.jpeg";
import { IMAGE_URL } from "../utils/api-config";

// const categories = [
//   {
//     title: "Co-ord Set",
//     img: product1,
//     link: "/shop"
//   },
//   {
//     title: "Pant Sets",
//     img: product2,
//     link: "/shop"
//   },
//   {
//     title: "Dupatta Sets",
//     img: product3,
//     link: "/shop"
//   },
//   {
//     title: "Short Tops",
//     img: product4,
//     link: "/shop"
//   },
//   {
//     title: "Dresses",
//     img: product1,
//     link: "/shop"
//   },
//   {
//     title: "Dresses",
//     img: product5,
//     link: "/shop"
//   }
// ];

const HomeCategory = ({ categories = [] }) => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="section-title">
            Find exactly what you're looking for
          </h2>
          <hr className="section__heading-line text-black" />
        </div>

        <Swiper
          className="d-none d-sm-block"
          modules={[Navigation]}
          navigation
          spaceBetween={15}
          breakpoints={{
            320: { slidesPerView: 2 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 5 }
          }}
        >
          {categories.length > 0 &&
            categories.map((cat, index) =>
              <SwiperSlide key={index}>
                <Link
                  to={`/shop?category=${cat.name}`}
                  className="text-decoration-none"
                >
                  <div className="card border-0  h-100">
                    <img
                      src={`${IMAGE_URL}/${cat.image}`}
                      className="card-img-top"
                      alt={cat.name}
                      style={{ borderRadius: "12px" }}
                    />
                    <div className="card-body p-2 text-center">
                      <h6 className="mt-2 text-primary fs-5">
                        {cat.name}
                      </h6>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            )}
        </Swiper>

        {/* for mobile  */}
        <div className="d-block d-sm-none">
          <div className="row">
            {categories.map((cat, index) =>
              <div className="col-6 p-1" key={index}>
                <Link
                  to={`/shop?category=${cat.name}`}
                  className="text-decoration-none"
                >
                  <div className="card border-0 h-100">
                    <img
                      src={`${IMAGE_URL}/${cat.image}`}
                      className="card-img-top"
                      alt={cat.title}
                      style={{ borderRadius: "12px" }}
                    />
                    <div className="card-body p-2 text-center">
                      <h6 className="mt-0 text-primary fs-5">
                        {cat.name}
                      </h6>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCategory;
