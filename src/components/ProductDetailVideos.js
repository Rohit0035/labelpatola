import React from 'react';
import g2Video from '../assets/images/common/vd-1.mp4';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import pro1 from '../assets/images/common/pro-1.jpeg';
import { IMAGE_URL } from '../utils/api-config';
import { addToCart } from '../actions/cartActions';
import { useDispatch } from 'react-redux';

const slidesreel = [
    { video: g2Video, title: 'Pink Poppy Flora', price: '₹3,595' },
    { video: g2Video, title: 'Ayqat Cotton Floral A-line Pant Set', price: '₹2,195' },
    { video: g2Video, title: 'Ayqat Cotton Floral A-line Pant Set', price: '₹2,195' },
    { video: g2Video, title: 'Ayqat Cotton Floral A-line Pant Set', price: '₹2,195' },
    { video: g2Video, title: 'Ayqat Cotton Floral A-line Pant Set', price: '₹2,195' },
    { video: g2Video, title: 'Ayqat Cotton Floral A-line Pant Set', price: '₹2,195' },

];

const ProductDetailVideos = ({recommendedProducts=[]}) => {
    const dispatch = useDispatch();
    return (
        <>
            <section className="watch-love-shop pb-5 pt-0">
                <div className="container">
                    <div className="text-center mb-4">
                        <h2 className="section-title">YOU DO NOT WANT TO MISS THIS</h2>
                        <hr className="section__heading-line text-black" />
                    </div>
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        spaceBetween={10}
                        slidesPerView={6}
                        centeredSlides={false}
                        loop={true}
                        breakpoints={{
                            320: { slidesPerView: 2 },
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 4 },
                            1024: { slidesPerView: 6 },
                        }}
                        className="shopSwiper position-relative"
                    >
                        {recommendedProducts.map((product, index) => (
                            <SwiperSlide key={index}>
                                <a href="#" className="text-decoration-none text-dark" data-bs-toggle="modal"
                                    data-bs-target="#videoSliderReelModal">
                                    <div className="shop-card border rounded overflow-hidden shadow-sm">
                                        {/* Replace with static image or video */}
                                        <video
                                            src={`${IMAGE_URL}/${product.video}`} // Assuming 'video' property for the source
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="w-100"
                                        />
                                        <div className="shop-info p-2 d-flex align-items-center">
                                            <img
                                                src={pro1}
                                                className="rounded me-2"
                                                style={{ width: 35, height: 35 }}
                                                alt="Thumb"
                                            />
                                            <div>
                                                <div className="small st-pro-name">{product.name}</div>
                                                <div className="fw-bold">₹{product?.product_variations?.[0]?.sale_price}</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                        {/* Navigation Buttons */}
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </Swiper>
                </div>
            </section>


            {/* Modal reel video list*/}
            <div className="modal fade" id="videoSliderReelModal" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div
                        className="modal-content border-0"
                        style={{ backgroundColor: "unset !important" }}
                    >
                        <div className="modal-body p-0 position-relative">
                            {/* Swiper */}
                            <div className="video-swiper-slider">
                                <Swiper
                                    modules={[Navigation, EffectCoverflow]}
                                    navigation={{
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev',
                                    }}
                                    effect="coverflow"
                                    grabCursor={true}
                                    centeredSlides={true}
                                    slidesPerView={1.2}
                                    loop={true}
                                    coverflowEffect={{
                                        rotate: 30,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: true,
                                    }}
                                    breakpoints={{
                                        640: { slidesPerView: 1.2 },
                                        768: { slidesPerView: 2 },
                                        1024: { slidesPerView: 3 },
                                    }}
                                    spaceBetween={20}
                                >
                                    {recommendedProducts.map((product, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="video-box">
                                                <video
                                                    src={`${IMAGE_URL}/${product.video}`}
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                    className="w-100"
                                                />
                                            </div>
                                            <div className="video-caption">
                                                <h6>{product.name}</h6>
                                                <div className="price mb-2">₹{product?.product_variations?.[0]?.sale_price}</div>
                                                <button className="btn btn-dark rounded-5 w-100" onClick={()=>dispatch(addToCart(product, product.product_variations?.[0], 1))}>ADD TO CART</button>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* Custom navigation arrows */}
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetailVideos;