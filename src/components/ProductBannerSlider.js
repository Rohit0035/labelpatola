import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import product1 from '../assets/images/common/pro-1.jpeg'
import product2 from '../assets/images/common/pro-2.jpeg'
import product3 from '../assets/images/common/pro-3.jpeg'
import QuickBuySidebar from './QuickBuySidebar';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../utils/api-config';
import { addToCart } from '../actions/cartActions';
import { useDispatch } from 'react-redux';

const products = [
    {
        title: "'Amisha' Velvet Hand Embroidered Pant Set",
        image: product1,
    },
    {
        title: "'Naira' Silk Kurta with Embellishments",
        image: product2,
    },
    {
        title: "'Zoya' Handcrafted Anarkali Set",
        image: product3,
    },
];

const ProductBannerSlider = ({recommendedProducts=[]}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const dispatch = useDispatch();

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <>
            <div className="mt-3">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000, // time in ms between slides
                        disableOnInteraction: false, // keeps autoplay running after user swipes
                    }}
                    className="mySwiper"
                >
                    {recommendedProducts.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div className=" p-3 bg-light rounded slide-card">
                                <div className='row'>
                                    <div className='col-9'>
                                        <div className='ps-2'>
                                            <div className="text-muted small mb-2">Buy It With</div>
                                            <h5 className="mb-3">{product.name}</h5>
                                            <Link onClick={()=>dispatch(addToCart(product, product.product_variations?.[0], 1))} className="btn btn-outline-dark btn-sm">BUY NOW</Link>
                                        </div>
                                    </div>
                                    <div className='col-3 p-0'>
                                        <div className='h-100'>
                                            <img
                                                src={`${IMAGE_URL}/${product.product_variations[0].image}`}
                                                alt={product.name}
                                                className="rounded img-fluid slide-image"
                                                style={{ width: '180%', height: '100%' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* <QuickBuySidebar /> */}

            <QuickBuySidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </>

    );
};

export default ProductBannerSlider;
