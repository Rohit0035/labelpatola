import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import Slider1 from '../assets/images/common/slider-1.jpg'
import Slider2 from '../assets/images/common/slider-2.jpg'
import g2Video from '../assets/images/common/g-2.mp4';
import gvVideo from '../assets/images/common/g-v.mp4';
import product1 from '../assets/images/common/pro-1.jpeg'
import product2 from '../assets/images/common/pro-2.jpeg'
import product3 from '../assets/images/common/pro-3.jpeg'
import product4 from '../assets/images/common/pro-4.jpeg'
import product5 from '../assets/images/common/pro-5.jpeg'
import pro1Img from '../assets/images/common/pro-5.jpeg'

// Import all category images
import pro1 from '../assets/images/common/pro-1.jpeg';
import pro2 from '../assets/images/common/pro-2.jpeg';
import pro3 from '../assets/images/common/pro-3.jpeg';
import pro4 from '../assets/images/common/pro-4.jpeg';
import pro5 from '../assets/images/common/pro-5.jpeg';
import pro6 from '../assets/images/common/pro-6.jpeg';
import ReviewHome from '../components/ReviewHome';
import InstagramSlider from '../components/InstagramSlider';
import ServiceFeature from '../components/ServiceFeature';
import SpecialOfferSection from '../components/SpecialOfferSection';
import MainHeroSlider from '../components/MainHeroSlider';
import { fetchHomePageData } from '../api/homeAPI';
import ProductCard from '../components/productCard';
import { IMAGE_URL } from '../utils/api-config';
import { addToCart } from '../actions/cartActions';
import { useDispatch } from 'react-redux';
import { hideLoader, showLoader } from '../actions/loaderActions';
import HomeCategory from '../components/HomeCategory';


const categories = [
	{ img: pro1, title: 'Co-ord Set' },
	{ img: pro2, title: 'Co-ord Set' },
	{ img: pro3, title: 'Co-ord Set' },
	{ img: pro4, title: 'Co-ord Set' },
	{ img: pro5, title: 'Co-ord Set' },
	{ img: pro6, title: 'Co-ord Set' },
	{ img: pro1, title: 'Co-ord Set' },
];


const slidesreel = [
	{ video: g2Video, title: 'Pink Poppy Flora', price: '₹3,595' },
	{ video: gvVideo, title: 'Floral Kurti Set', price: '₹2,995' },
	{ video: gvVideo, title: 'Boho Kaftan', price: '₹2,499' },
	{ video: g2Video, title: 'Ayqat Cotton Floral A-line Pant Set', price: '₹2,195' },
	{ video: gvVideo, title: 'Ayqat Cotton Floral A-line Pant Set', price: '₹2,195' },
	{ video: gvVideo, title: 'Ayqat Cotton Floral A-line Pant Set', price: '₹2,195' },
	{ video: gvVideo, title: 'Ayqat Cotton Floral A-line Pant Set', price: '₹2,195' },
	{ video: gvVideo, title: 'Ayqat Cotton Floral A-line Pant Set', price: '₹2,195' },
	{ video: gvVideo, title: 'Ayqat Cotton Floral A-line Pant Set', price: '₹2,195' },
	{ video: gvVideo, title: 'Ayqat Cotton Floral A-line Pant Set', price: '₹2,195' },
];

const Home = () => {

	const dispatch = useDispatch();
	const [homePageData, setHomePageData] = useState(null);
	const [loading, setLoading] = useState(true);
	// New state to hold the videos for the modal
	const [modalVideos, setModalVideos] = useState([]);

	const getHomePageData = async () => {
		dispatch(showLoader())
		try {
			const data = await fetchHomePageData();
			if (data.success) {
				setHomePageData(data.data);
				console.log(data.data);
			}
		} catch (error) {
			console.error("Error fetching Home Page Data:", error);
		} finally {
			dispatch(hideLoader())
			setLoading(false);
		}
	};

	useEffect(() => {
		getHomePageData();
	}, []);

	// This array will now be populated dynamically based on clicks
	const slides = [
		{
			src: g2Video,
			title: 'Pink Poppy Flora',
			price: '₹3,595',
		},
		{
			src: gvVideo,
			title: 'Floral Kurti Set',
			price: '₹2,995',
		},
		{
			src: gvVideo,
			title: 'Boho Kaftan',
			price: '₹2,499',
		},
		{
			src: gvVideo,
			title: 'Boho Kaftan',
			price: '₹2,499',
		},
		{
			src: gvVideo,
			title: 'Boho Kaftan',
			price: '₹2,499',
		},
	];

	// Function to handle category click and set modal videos
	const handleCategoryClick = (categoryType) => {
		let videosToDisplay = [];
		// Assuming your homePageData contains video arrays for each category
		// e.g., homePageData.topPicksVideos, homePageData.newMeVideos, etc.
		// For demonstration, I'll use placeholders if the actual data structure isn't available.
		switch (categoryType) {
			case 'topPicked':
				videosToDisplay = homePageData?.topPicked || []; // Use slidesreel as fallback
				break;
			case 'newMe':
				videosToDisplay = homePageData?.newMe || []; // Replace with actual new me videos from API
				break;
			case 'allTimeFav':
				videosToDisplay = homePageData?.allTimeFav || []; // Replace with actual all time fav videos from API
				break;
			case 'plusSize':
				videosToDisplay = homePageData?.plusSize || []; // Replace with actual plus size videos from API
				break;
			default:
				videosToDisplay = slidesreel; // Default fallback
		}
		setModalVideos(videosToDisplay);
	};


	return (
		<>
			<Header />
			{/*start main content*/}
			<main className="main-content">

				{/*start slider*/}
				<MainHeroSlider banners={homePageData?.banners} />
				{/*end slider*/}

				{/* home bcategory */}
				<HomeCategory categories={homePageData?.categories}/>

				{/* freedom sale start*/}
				<section className='pb-5 pt-0'>
					<div className='container'>
						<div className="text-center mb-4">
							<h2 className="section-title">
								{homePageData?.commonSettings?.sale_name}
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
							{
								homePageData?.sale?.map((product, index) => (
									<SwiperSlide key={index}>
										<ProductCard product={product} className="product-img-long" />
									</SwiperSlide>
								))}
						</Swiper>
					</div>

				</section>

				{/* freedom sale close */}


				{/* section for new arrival start */}
				<section className='pb-5 pt-0'>
					<div className='container'>
						<div className="text-center mb-4">
							<h2 className="section-title">
								New Arrivals
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
							{
								homePageData?.newArrivals?.map((product, index) => (
									<SwiperSlide key={index}>
										<ProductCard product={product} className="product-img-long" />
									</SwiperSlide>
								))}
						</Swiper>
					</div>

				</section>
				{/* section new arrivel close */}


				{/* video section */}
				<section className="watch-love-shop pb-5 pt-0">
					<div className="container">
						<div className="text-center mb-4">
							<h2 className="section-title text-primary">WATCH . LOVE . SHOP</h2>
							<hr className="section__heading-line text-black" />
						</div>
						<Swiper
							modules={[Navigation]}
							navigation={{
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev',
							}}
							spaceBetween={10}
							slidesPerView={1}
							centeredSlides={false}
							loop={homePageData?.watchLoveShop?.length > 7}
							breakpoints={{
								320: { slidesPerView: 2 },
								640: { slidesPerView: 2 },
								768: { slidesPerView: 4 },
								1024: { slidesPerView: 7 },
							}}
							className="shopSwiper position-relative"
						>

							{homePageData?.watchLoveShop?.map((product, index) => (
								<SwiperSlide key={index}>
									<a href={`/product-detail/${product.slug}`} data-bs-toggle="modal"
										data-bs-target="#videoSliderReelModal" className="text-decoration-none text-dark">
										<div className="shop-card border rounded overflow-hidden shadow-sm">
											{
												product.video === null ?
													<img src={`${IMAGE_URL}/${product.feature_image}`} className="w-100" alt={product.name} />
													: <video
														src={`${IMAGE_URL}/${product.video}`} // Assuming 'video' property for the source
														autoPlay
														muted
														loop
														playsInline
														className="w-100"
													/>
											}
											<div className="shop-info p-2 d-flex align-items-center">
												<img
													src={pro1Img}
													className="rounded me-2"
													style={{ width: 35, height: 35 }}
													alt="Thumb"
												/>
												<div>
													<div className="small st-pro-name">{product?.name}</div>
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
				{/* video section close */}


				{/* best seller section start */}
				<section className='pb-5 pt-0'>
					<div className='container'>
						<div className="text-center mb-4">
							<h2 className="section-title">
								Best Sellers
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
							{
								homePageData?.bestSellers?.map((product, index) => (
									<SwiperSlide key={index}>
										<ProductCard product={product} />
									</SwiperSlide>

								))
							}
						</Swiper>
					</div>

				</section>
				{/* best seller sectuion close */}


				{/* best seller section start */}
				<section className='pb-5 pt-0'>
					<div className='container'>
						<div className="text-center mb-4">
							<h2 className="section-title">
								Trending Co-ord Sets
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
							{
								homePageData?.trending?.map((product, index) => (
									<SwiperSlide key={index}>
										<ProductCard product={product} />
									</SwiperSlide>

								))
							}
						</Swiper>
					</div>

				</section>

				{/*start shop Instagram*/}
				<InstagramSlider instagramFeeds={homePageData?.instagramFeeds} />
				{/*end shop Instagram*/}

				{/*start Review*/}
				<ReviewHome customerReviews={homePageData?.customerReviews} />
				{/*end Review*/}

				{/*services*/}
				<ServiceFeature />
				{/*end services*/}

			</main>
			{/*end main content*/}

			{/* Modal */}
			<div className="modal fade" id="videoSliderModal" tabIndex={-1}>
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
									loop={homePageData?.bestSellers?.length > 3}
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
									{/* Use modalVideos state here */}
									{modalVideos.map((product, index) => (
										<SwiperSlide key={index}>
											<div className="video-box">
												{
													product.video === null ?
														<img src={`${IMAGE_URL}/${product.feature_image}`} className="w-100" alt={product.name} />
														: <video
															src={`${IMAGE_URL}/${product.video}`} // Assuming 'video' property for the source
															autoPlay
															muted
															loop
															playsInline
															className="w-100"
														/>
												}

											</div>
											<div className="video-caption">
												<h6>{product.name}</h6>
												<div className="price mb-2">₹{product.product_variations?.[0]?.sale_price}</div>
												<button className="btn btn-dark rounded-5 w-100"
													onClick={() =>
														dispatch(addToCart(product, product?.product_variations?.[0], 1))}
												>
													ADD TO CART
												</button>
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
									loop={homePageData?.watchLoveShop?.length > 3}
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
									{homePageData?.watchLoveShop?.map((product, index) => (
										<SwiperSlide key={index}>
											<div className="video-box">
												{product.video === null ?
													<img src={`${IMAGE_URL}/${product.feature_image}`} className="w-100" alt={product.name} />
													: <video
														src={`${IMAGE_URL}/${product.video}`} // Assuming 'video' property for the source
														autoPlay
														muted
														loop
														playsInline
														className="w-100"
													/>}
												{/* <video
													src={`${IMAGE_URL}/${product.video}`}
													autoPlay
													muted
													loop
													playsInline
													className="w-100"
												/> */}
											</div>
											<div className="video-caption">
												<h6>{product.name}</h6>
												<div className="price mb-2">₹{product.product_variations?.[0]?.sale_price}</div>
												<button className="btn btn-dark rounded-5 w-100"
												onClick={() =>
														dispatch(addToCart(product, product?.product_variations?.[0], 1))}
												>ADD TO CART</button>
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

			<Footer />
		</>


	);
};

export default Home;