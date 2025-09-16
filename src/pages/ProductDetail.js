import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import RecommendedProductsSlider from '../components/RecommendedProductsSlider';
import { useDispatch } from 'react-redux';
import { fetchProductDetails } from '../api/productAPI';
import { Link, useParams } from 'react-router-dom';
import { IMAGE_URL } from '../utils/api-config';
import { addToCart } from '../actions/cartActions';
import ProductReviews from '../components/productReviews';
import { showToast } from '../components/ToastifyNotification';
import { addToWishlist, removeFromWishlist } from '../actions/wishlistActions';
import { hideLoader, showLoader } from '../actions/loaderActions';
import SizeChart from '../assets/images/common/size-chart.jpg'
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import ProductDetailVideos from '../components/ProductDetailVideos';
import InstagramGallery from '../components/InstagramSlider';
import ServiceFeature from '../components/ServiceFeature';
import SizeGuide from '../components/SizeGuide';
import { CopyToClipboard } from "react-copy-to-clipboard";
import IconFeatures from '../components/IconFeatures';
import AccordionFeatur from '../components/AccordionFeatur';
import ProductBannerSlider from '../components/ProductBannerSlider';
import CustomerReview from '../components/CustomerReview';

const ProductDetail = () => {

    const [text] = useState("WELCOME100");
    const [copied, setCopied] = useState(false);

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const [isSidebarOpen, setSidebarOpen] = useState(false);



    const { slug } = useParams();
    const [productImages, setProductImages] = useState([]);
    const [recommendedProducts, setRecommendedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});
    const dispatch = useDispatch();

    const [selectedColor, setSelectedColor] = useState(null); // New state for selected color
    const [selectedSize, setSelectedSize] = useState(null); // New state for selected size
    const [selectedVariation, setSelectedVariation] = useState(null);
    const [discountedPrice, setDiscountedPrice] = useState(null);
    const [activeTabId, setActiveTabId] = useState();

    // increment & decrement
    const [quantity, setQuantity] = useState(1);
    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : quantity);


    const getProduct = async () => {
        dispatch(showLoader());
        try {
            const data = await fetchProductDetails(slug);
            if (data.success) {
                setProductImages([]); // Clear images before setting new ones
                setProduct(data.data.product);
                setRecommendedProducts(data.data.relatedProducts);
            }
        } catch (error) {
            console.error("Error fetching Product:", error);
        } finally {
            dispatch(hideLoader());
            setLoading(false);
        }
    };

    useEffect(() => {
        getProduct(slug);
    }, [slug]);

    useEffect(() => {
        if (product && product.product_variations) {
            // Set initial selected variation to the first one if available
            const initialVariation = product.product_variations[0];
            setSelectedVariation(initialVariation);
            if (initialVariation) {
                setSelectedColor(initialVariation.color);
                setSelectedSize(initialVariation.size);
            }

            // Populate productImages from variations, feature image, and gallery
            const images = [];
            if (initialVariation && initialVariation.image) {
                images.push(initialVariation.image);
            }
            if (product.feature_image) {
                images.push(product.feature_image);
            }
            if (product.product_gallery) {
                images.push(...product.product_gallery.map((gallery) => gallery.image));
            }
            setProductImages(images);

            setActiveTabId(product?.product_additional_infos?.[0]?.id);
        }
    }, [product]);

    // Effect to update selectedVariation when selectedColor or selectedSize changes
    useEffect(() => {
        if (selectedColor && selectedSize && product?.product_variations) {
            const foundVariation = product.product_variations.find(
                (variation) =>
                    variation.color.id === selectedColor.id &&
                    variation.size.id === selectedSize.id
            );
            setSelectedVariation(foundVariation);
            if (foundVariation) {
                setDiscountedPrice(foundVariation.sale_price - 100); // Example discount
                // Update main image based on selected variation
                setProductImages([
                    foundVariation.image,
                    ...(product.product_gallery?.map((gallery) => gallery.image) || [])
                ]);
            }
        }
        else if (selectedColor && !selectedSize && product?.product_variations) {
            // If only color is selected, try to find a variation with that color and any size
            const foundVariation = product.product_variations.find(
                (variation) => variation.color.id === selectedColor.id
            );
            setSelectedVariation(foundVariation);
            if (foundVariation) {
                setDiscountedPrice(foundVariation.sale_price - 100);
                setProductImages([
                    foundVariation.image,
                    ...(product.product_gallery?.map((gallery) => gallery.image) || [])
                ]);
            }
        }
    }, [selectedColor, selectedSize, product]);


    // Handle color selection
    const handleColorSelection = (color) => {
        setSelectedColor(color);
        setSelectedSize(null); // Reset selected size when color changes
    };

    // Handle size selection
    const handleSizeSelection = (size) => {
        setSelectedSize(size);
    };

    // Get unique colors for display
    const uniqueColors = product?.product_variations
        ? Array.from(new Set(product.product_variations.map(v => v.color.id)))
            .map(id => product.product_variations.find(v => v.color.id === id).color)
        : [];

    // Get available sizes based on selected color
    const availableSizesForSelectedColor = product?.product_variations
        ? product.product_variations.filter(
            (variation) => selectedColor && variation.color.id === selectedColor.id
        ).map(v => v.size)
        : [];

    const handleAddToCart = () => {
        if (selectedVariation && selectedColor && selectedSize) {
            dispatch(addToCart(product, selectedVariation, 1));
        } else {
            showToast("error", "Please select color and size!");
        }
    };

    const handleAddToWishlist = () => {
        if (selectedVariation && selectedColor && selectedSize) {
            dispatch(addToWishlist(product, selectedVariation));
        } else {
            showToast("error", "Please select color and size!");
        }
    };

    const handleRemoveFromWishlist = () => {
        if (selectedVariation && selectedColor && selectedSize) {
            dispatch(removeFromWishlist(product?.wishlist_id));
        } else {
            showToast("error", "Please select color and size!");
        }
    };

    if (!product) {
        return <p className="text-center py-40">Product not found.</p>;
    }


    // Prepare slides for lightbox (convert image URLs)
    const lightboxSlides = productImages.map((img) => ({ src: `${IMAGE_URL}/${img}` }));

    // Handler when main image clicked, open lightbox with clicked index
    const handleImageClick = (index) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };


    return (
        <>
            <Header />
            {/*start main content*/}
            <main className="main-content">
                {/*start breadcrumb*/}
                <section className="py-4 section-breadcrumb">
                    <div className="container px-3">
                        <h2 className="d-none">Product Details</h2>
                        <nav>
                            <ol className="breadcrumb mb-0 gap-2">
                                <li className="breadcrumb-item">
                                    <a href="javascript:;" className="breadcrumb-link">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right" />
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="javascript:;" className="breadcrumb-link">
                                        shop
                                    </a>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right" />
                                </li>
                                <li className="breadcrumb-item breadcrumb-active">
                                    Product Detail
                                </li>
                            </ol>
                        </nav>
                    </div>
                </section>
                {/*end breadcrumb*/}
                {/*start product details*/}
                <section className="pb-5  product-details">
                    <div className="container px-3">
                        <div className="row g-4 g-lg-5">
                            <div className="col-12 col-lg-6">
                                <div className="product-images">
                                    {/* Main Swiper */}
                                    <Swiper
                                        modules={[Navigation, Thumbs]}
                                        navigation
                                        thumbs={{ swiper: thumbsSwiper }}
                                        spaceBetween={10}
                                        className="product-images-swiper swp-slide"
                                    >
                                        {productImages.map((image, index) => (
                                            <SwiperSlide key={index}>
                                                <img
                                                    src={`${IMAGE_URL}/${image}`}
                                                    className="rounded-3"
                                                    alt={image}
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => handleImageClick(index)}
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                    {/* Thumbnail Swiper */}
                                    <Swiper
                                        onSwiper={setThumbsSwiper}
                                        modules={[Thumbs]}
                                        slidesPerView={6}
                                        spaceBetween={10}
                                        watchSlidesProgress
                                        className="product-images-swiper-thumbnail mt-3"
                                    >
                                        {productImages.map((image, index) => (
                                            <SwiperSlide key={index}>
                                                <img src={`${IMAGE_URL}/${image}`} className="rounded-3 thumb-st" alt={image} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                    {/* Lightbox */}
                                    <Lightbox
                                        plugins={[Zoom]}
                                        open={lightboxOpen}
                                        close={() => setLightboxOpen(false)}
                                        slides={lightboxSlides}
                                        index={lightboxIndex}
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="product-details">
                                    <p className="mb-1">{product?.category?.name}</p>
                                    <h2 className="mb-0">{product?.name}</h2>
                                    <div className="d-flex align-items-center gap-2 my-3">
                                        <span className="ratings text-warning">
                                            <a href='#rv_list'>
                                                {[...Array(5)].map((_, index) => (
                                                    <i
                                                        key={index}
                                                        className={
                                                            index < Math.round(product?.review_details?.average_rating)
                                                                ? "bi bi-star-fill text-warning"
                                                                : "bi bi-star text-warning"
                                                        }
                                                    />
                                                ))}
                                            </a>
                                        </span>
                                        <span className="font-14">({product?.review_details?.total_reviews} reviews)</span>
                                    </div>
                                    <div className="product-price d-flex align-items-center gap-2">
                                        <span className="fs-3 fw-semibold">₹{selectedVariation?.sale_price || product?.product_variations?.[0]?.sale_price}</span>
                                        <span className="fs-6 text-decoration-line-through text-body-tertiary text-opacity-50">
                                            ₹{selectedVariation?.regular_price || product?.product_variations?.[0]?.regular_price}
                                        </span>
                                        {
                                            selectedVariation && parseFloat(selectedVariation.regular_price) > parseFloat(selectedVariation.sale_price) &&
                                            <span className="badge badge-pill bg-success rounded-5">
                                                -{((selectedVariation?.regular_price - selectedVariation?.sale_price) / selectedVariation?.regular_price * 100).toFixed(2)}% OFF
                                            </span>
                                        }
                                    </div>
                                    <p className="product-short-desc mt-3 mb-0">
                                        <p className="text-gray-700 mb-24" dangerouslySetInnerHTML={{ __html: product?.short_description }}></p>
                                    </p>
                                    <div className="product-colors mt-4">
                                        <p className="mb-2">Select Color</p>
                                        <div className="product-color-list d-flex align-items-center gap-3">
                                            {
                                                uniqueColors.map((color) =>
                                                    <div className="product-color-list-item" key={color.id}>
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="options-color"
                                                            id={`color-option${color.id}`}
                                                            checked={selectedColor?.id === color.id}
                                                            onChange={() => handleColorSelection(color)}
                                                        />
                                                        <label
                                                            style={{ backgroundColor: color.name }}
                                                            className="btn btn-product-color"
                                                            htmlFor={`color-option${color.id}`}
                                                        />
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="product-size mt-4">
                                        <p className="mb-2 d-flex align-items-center justify-content-between">
                                            Select Size{" "}
                                            <span>
                                                <Link
                                                    data-bs-toggle="offcanvas"
                                                    data-bs-target="#sizeGuideOffcanvas">
                                                    Size Guide
                                                </Link>
                                            </span>
                                        </p>
                                        <div className="product-size-list d-flex align-items-center gap-3">
                                            {
                                                availableSizesForSelectedColor.map((size) =>
                                                    <div className="product-size-list-item" key={size.id}>
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="options-size"
                                                            id={`size-option${size.id}`}
                                                            checked={selectedSize?.id === size.id}
                                                            onChange={() => handleSizeSelection(size)}
                                                        />
                                                        <label
                                                            className="btn btn-outline-dark btn-product-size"
                                                            htmlFor={`size-option${size.id}`}
                                                        >
                                                            {size.name}
                                                        </label>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="product-quantity mt-4">
                                        <p className="mb-2">Quantity</p>
                                        <div className="input-group input-group-lg">
                                            <button
                                                className="btn border border-2 border-end-0"
                                                data-decrement=""
                                                type="button"
                                                onClick={decrementQuantity}
                                            >
                                                <i className="bi bi-dash" />
                                            </button>
                                            <input
                                                type="number"
                                                className="form-control border-2 text-center"
                                                min={0}
                                                defaultValue={1}
                                                readOnly
                                                name="quantity"
                                                value={quantity}
                                            />
                                            <button
                                                className="btn border border-2 border-start-0"
                                                data-increment=""
                                                type="button"
                                                onClick={incrementQuantity}
                                            >
                                                <i className="bi bi-plus" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="product-cart-buttons d-grid d-md-flex align-items-center gap-3 mt-4">
                                        <button
                                            type="button"
                                            className="btn btn-dark border border-2 rounded-5 border-dark py-2 px-5 d-flex align-items-center justify-content-center gap-2 w-100"
                                            onClick={handleAddToCart} // Disable if no variation is selected
                                        >
                                            <i className="bi bi-cart-plus" />
                                            Add to cart
                                        </button>
                                        <button
                                            type="button"
                                            className="btn border border-2 py-2 px-5 rounded-5 d-flex align-items-center justify-content-center gap-2"
                                            onClick={() =>
                                                product?.is_wishlisted
                                                    ? handleRemoveFromWishlist()
                                                    : handleAddToWishlist()
                                            }
                                        >
                                            {
                                                product?.is_wishlisted
                                                    ? <i className="bi bi-heart-fill text-danger" />
                                                    : <i className="bi bi-heart" />
                                            }
                                            wishlist
                                        </button>
                                    </div>


                                    {/* Specifications start */}
                                    <div className='mt-4'>
                                        <h4 className='mb-3'>Specifications</h4>
                                        <div className="row">
                                            {
                                                product?.specifications &&
                                                JSON.parse(product.specifications).map((specification, index) => (
                                                    <div className="col-6" key={index}>
                                                        <div className="border-bottom py-2">
                                                            <p className="text-secondary m-0 fs-6">{specification.label}</p>
                                                            <p className="mb-0 fs-6 fw-bold">{specification.value}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            {/* <div className="col-6">
                                                <div className='border-bottom py-2'>
                                                    <p className='text-secondary m-0 fs-6'>Neck</p>
                                                    <p className='mb-0 fs-6 fw-bold'>Round</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className='border-bottom py-2'>
                                                    <p className='text-secondary m-0 fs-6'>Sleeves</p>
                                                    <p className='mb-0 fs-6 fw-bold'>10 inch</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className='border-bottom py-2'>
                                                    <p className='text-secondary m-0 fs-6'>Kurta Length</p>
                                                    <p className='mb-0 fs-6 fw-bold'>45”</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className='border-bottom py-2'>
                                                    <p className='text-secondary m-0 fs-6'>Pant Length</p>
                                                    <p className='mb-0 fs-6 fw-bold'>36”</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className='border-bottom py-2'>
                                                    <p className='text-secondary m-0 fs-6'>Kurta Fit
                                                    </p>
                                                    <p className='mb-0 fs-6 fw-bold'>A-line
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className='border-bottom py-2'>
                                                    <p className='text-secondary m-0 fs-6'>Pant Fit
                                                    </p>
                                                    <p className='mb-0 fs-6 fw-bold'>Plazo
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className='border-bottom py-2'>
                                                    <p className='text-secondary m-0 fs-6'>Kurta Fabric
                                                    </p>
                                                    <p className='mb-0 fs-6 fw-bold'>Cotton</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className='border-bottom py-2'>
                                                    <p className='text-secondary m-0 fs-6'>Pant Fabric
                                                    </p>
                                                    <p className='mb-0 fs-6 fw-bold'>Cotton</p>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    {/* Specifications close */}


                                    {/* coupon code start */}
                                    <div className='mt-4'>
                                        <h4 className='mb-3'>Don't miss additional savings</h4>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <div className="p-2 mb-2 border rounded d-flex align-items-center justify-content-between bg-light">
                                                    <p className="fs-6 mb-0 fw-bold">100 off on First purchase</p>
                                                    <span className="d-flex align-items-center">
                                                        {text}
                                                        <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
                                                            <Link className="ms-2">
                                                                <i className="bi bi-clipboard-fill"></i>
                                                            </Link>
                                                        </CopyToClipboard>
                                                        {copied && <span className="ms-2 text-success">✅ Copied!</span>}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='col-12'>
                                                <div className="p-2 mb-2 border rounded d-flex align-items-center justify-content-between bg-light">
                                                    <p className="fs-6 mb-0 fw-bold">250 off on Purchase of 2999</p>
                                                    <span className="d-flex align-items-center">
                                                        <Link className="ms-2 text-dark">
                                                            Auto Apply
                                                        </Link>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='col-12'>
                                                <div className="p-2 mb-2 border rounded d-flex align-items-center justify-content-between bg-light">
                                                    <p className="fs-6 mb-0 fw-bold">500 off on Purchase of 4999</p>
                                                    <span className="d-flex align-items-center">
                                                        <Link className="ms-2 text-dark">
                                                            Auto Apply
                                                        </Link>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='col-12'>
                                                <div className="p-2 mb-2 border rounded d-flex align-items-center justify-content-between bg-light">
                                                    <p className="fs-6 mb-0 fw-bold">850 off on Purchase of 6999</p>
                                                    <span className="d-flex align-items-center">
                                                        <Link className="ms-2 text-dark">
                                                            Auto Apply
                                                        </Link>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* coupon code close*/}

                                    {/* icon-feature start */}
                                    <div className='mt-4'>
                                        <IconFeatures />
                                    </div>
                                    {/* icon-feature close */}

                                    {/* description start */}
                                    <div className='mt-4'>
                                        <p>
                                            {/* {product?.description} */}
                                            <div
                                                className="prose"
                                                dangerouslySetInnerHTML={{ __html: product?.description }}
                                            />
                                        </p>
                                    </div>
                                    {/* description close */}

                                    {/* accordion faeture start */}
                                    <AccordionFeatur product={product} />
                                    {/* accordion faeture close */}

                                    {/* productbanner slide start */}

                                    <ProductBannerSlider recommendedProducts={recommendedProducts} />

                                    {/* produtbanner slide close */}

                                    {/* share start */}
                                    <Link className="mb-0 mt-4 fs-6 d-flex align-items-center gap-2 font-14">
                                        <i className="bi bi-share" />
                                        <span>Share this </span>
                                    </Link>
                                    {/* share close */}

                                </div>
                            </div>
                        </div>
                        {/*end row*/}
                        {/* <div className="tabular-product-details mt-5">
                            <div className="table-responsive">
                                <ul className="nav nav-pills mb-4 overflow-x-auto justify-content-center gap-3">
                                    <li className="nav-item">
                                        <button
                                            className="nav-link rounded-5 px-5 fw-semibold"
                                            data-bs-toggle="pill"
                                            data-bs-target="#description"
                                            type="button"
                                        >
                                            Description
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className="nav-link active rounded-5 px-5 fw-semibold"
                                            data-bs-toggle="pill"
                                            data-bs-target="#customer-reviews"
                                            type="button"
                                        >
                                            Customer Reviews
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className="nav-link rounded-5 px-5 fw-semibold"
                                            data-bs-toggle="pill"
                                            data-bs-target="#shipping-returns"
                                            type="button"
                                        >
                                            Shipping Returns
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className="nav-link rounded-5 px-5 fw-semibold"
                                            data-bs-toggle="pill"
                                            data-bs-target="#return-policy"
                                            type="button"
                                        >
                                            Return Policy
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content border p-4 rounded-3">
                                <div className="tab-pane fade show" id="description">
                                    <p className="text-gray-700 mb-24" dangerouslySetInnerHTML={{ __html: product?.description }}></p>
                                </div>
                                <div className="tab-pane fade show active" id="customer-reviews">
                                    <ProductReviews product={product} />
                                </div>
                                <div className="tab-pane fade show" id="shipping-returns">
                                    <p className="text-gray-700 mb-24" dangerouslySetInnerHTML={{ __html: product?.shipping_return }}></p>

                                </div>
                                <div className="tab-pane fade show" id="return-policy">
                                    <p className="text-gray-700 mb-24" dangerouslySetInnerHTML={{ __html: product?.return_policy }}></p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>
                {/*end product details*/}

                {/* video section start */}

                <ProductDetailVideos recommendedProducts={recommendedProducts} />

                {/* video section close */}



                {/* Customer Review start */}

                <CustomerReview product={product} />

                {/* customer review close */}



                {/* Insatgram Feed */}

                <InstagramGallery />

                {/* Insatgram Feed */}

                {/*start Recommended product*/}
                {/* <RecommendedProductsSlider recommendedProducts={recommendedProducts} /> */}
                {/*end Recommended product*/}

                {/* service feature start */}
                <ServiceFeature />
                {/* service feature close */}

                {/* Size Guide Offcanvas */}
                <SizeGuide />


            </main>
            {/*end main content*/}

            <Footer />
        </>

    );
};

export default ProductDetail;