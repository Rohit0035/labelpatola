import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import RecommendedProductsSlider from '../components/RecommendedProductsSlider';
import { useDispatch, useSelector } from 'react-redux';
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
import ShareLink from '../components/ShareLink';

const isInStock = (variation) => Number(variation.stock_quantity) > 0;

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
    const [instagramFeeds, setInstagramFeeds] = useState([]);
    const [discounts, setDiscounts] = useState([]);
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
    const incrementQuantity = () => {
        if (!selectedVariation) return;

        const maxAllowed =
            selectedVariation.stock_quantity - cartQtyForVariation;

        if (quantity >= maxAllowed) {
            showToast(
                "error",
                `Only ${selectedVariation.stock_quantity} item(s) available. You already added ${cartQtyForVariation}.`
            );
            return;
        }

        setQuantity(prev => prev + 1);
    };
    const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : quantity);

    const cart = useSelector((state) => state.cart?.cart) || {};
    const cartItems = cart.items || [];
    const cartQtyForVariation = selectedVariation
        ? cartItems.find(
            item => item.product_variation_id === selectedVariation.id
        )?.quantity || 0
        : 0;

    const isStockLimitReached =
        selectedVariation &&
        cartQtyForVariation >= selectedVariation.stock_quantity;


    const getProduct = async () => {
        dispatch(showLoader());
        try {
            const data = await fetchProductDetails(slug);
            if (data.success) {
                setProductImages([]); // Clear images before setting new ones
                setProduct(data.data.product);
                setRecommendedProducts(data.data.relatedProducts || []);
                setInstagramFeeds(data.data.instagramFeeds || []);
                setDiscounts(data.data.discounts || []);
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
        if (!product?.product_variations?.length) return;

        // 1️⃣ first in-stock variation OR fallback to first
        const initialVariation =
            product.product_variations.find(isInStock) ||
            product.product_variations[0];

        setSelectedVariation(initialVariation);
        setSelectedColor(initialVariation?.color || null);
        setSelectedSize(initialVariation?.size || null);

        // 2️⃣ images fallback-safe
        const images = [];

        if (initialVariation?.image) {
            images.push(initialVariation.image);
        }

        if (product.feature_image) {
            images.push(product.feature_image);
        }

        if (product.product_gallery?.length) {
            images.push(...product.product_gallery.map(g => g.image));
        }

        setProductImages(images);

        setActiveTabId(product?.product_additional_infos?.[0]?.id);

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

        const firstAvailableSize = product.product_variations.find(
            (v) => v.color.id === color.id && isInStock(v)
        )?.size;

        setSelectedSize(firstAvailableSize || null);
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
        if (!selectedVariation) {
            showToast("error", "Please select variation");
            return;
        }

        if (quantity + cartQtyForVariation > selectedVariation.stock_quantity) {
            showToast(
                "error",
                `Only ${selectedVariation.stock_quantity} item(s) available. You already added ${cartQtyForVariation}.`
            );
            return;
        }

        dispatch(addToCart(product, selectedVariation, quantity));
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

    const isSelectedOutOfStock =
        !selectedVariation || Number(selectedVariation?.stock_quantity) <= 0;




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
                                    <a href="/" className="breadcrumb-link">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right" />
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="/shop" className="breadcrumb-link">
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
                                    <p className='small'>(Inclusive of All Taxes)</p>
                                    <p className="product-short-desc mt-3 mb-0">
                                        <p className="text-gray-700 mb-24" dangerouslySetInnerHTML={{ __html: product?.short_description }}></p>
                                    </p>
                                    <div className="product-colors mt-4">
                                        <p className="mb-2">Select Color</p>
                                        <div className="product-color-list d-flex align-items-center gap-3">
                                            {uniqueColors.map((color) => {
                                                const colorInStock = product.product_variations.some(
                                                    (v) => v.color.id === color.id && isInStock(v)
                                                );

                                                return (
                                                    <div className="product-color-list-item" key={color.id}>
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="options-color"
                                                            id={`color-option${color.id}`}
                                                            checked={selectedColor?.id === color.id}
                                                            disabled={!colorInStock}
                                                            onChange={() => handleColorSelection(color)}
                                                        />

                                                        <label
                                                            className="btn btn-product-color"
                                                            htmlFor={`color-option${color.id}`}
                                                            style={{
                                                                backgroundColor: color.code,
                                                                opacity: colorInStock ? 1 : 0.3,
                                                                cursor: colorInStock ? "pointer" : "not-allowed",
                                                            }}
                                                            title={!colorInStock ? "Out of stock" : ""}
                                                        />
                                                    </div>
                                                );
                                            })}
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
                                            {availableSizesForSelectedColor.map((size) => {
                                                const sizeInStock = product.product_variations.some(
                                                    (v) =>
                                                        v.size.id === size.id &&
                                                        v.color.id === selectedColor?.id &&
                                                        isInStock(v)
                                                );

                                                return (
                                                    <div className="product-size-list-item" key={size.id}>
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="options-size"
                                                            id={`size-option${size.id}`}
                                                            checked={selectedSize?.id === size.id}
                                                            disabled={!sizeInStock}
                                                            onChange={() => handleSizeSelection(size)}
                                                        />

                                                        <label
                                                            className={`btn btn-outline-dark btn-product-size ${!sizeInStock ? "disabled" : ""
                                                                }`}
                                                            style={{
                                                                opacity: sizeInStock ? 1 : 0.35,
                                                                cursor: sizeInStock ? "pointer" : "not-allowed",
                                                            }}
                                                            htmlFor={`size-option${size.id}`}
                                                        >
                                                            {size.code}
                                                        </label>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div className="product-quantity mt-4">
                                        <p className="mb-2">Quantity</p>

                                        <div className="input-group input-group-lg">
                                            <button
                                                className="btn border border-2 border-end-0"
                                                onClick={decrementQuantity}
                                                disabled={isSelectedOutOfStock}
                                            >
                                                <i className="bi bi-dash" />
                                            </button>

                                            <input
                                                className="form-control border-2 text-center"
                                                type="number"
                                                value={quantity}
                                                readOnly
                                                disabled={isSelectedOutOfStock}
                                            />

                                            <button
                                                className="btn border border-2"
                                                onClick={incrementQuantity}
                                                disabled={isSelectedOutOfStock || isStockLimitReached}
                                            >
                                                <i className="bi bi-plus" />
                                            </button>
                                        </div>

                                        {isSelectedOutOfStock && (
                                            <p className="text-danger small mt-1">
                                                Out of stock
                                            </p>
                                        )}
                                    </div>
                                    <div className="product-cart-buttons d-grid d-md-flex align-items-center gap-3 mt-4">
                                        <button
                                            type="button"
                                            disabled={isSelectedOutOfStock}
                                            className={`btn border border-2 rounded-5 py-2 px-5 d-flex align-items-center justify-content-center gap-2 w-100
        ${isSelectedOutOfStock ? "btn-secondary" : "btn-dark border-dark"}
    `}
                                            onClick={handleAddToCart}
                                        >
                                            {isSelectedOutOfStock ? (
                                                <>
                                                    <i className="bi bi-x-circle" />
                                                    Out of stock
                                                </>
                                            ) : (
                                                <>
                                                    <i className="bi bi-cart-plus" />
                                                    Add to cart
                                                </>
                                            )}
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
                                        </div>
                                    </div>
                                    {/* Specifications close */}


                                    {/* coupon code start */}
                                    {
                                        discounts.length > 0 &&

                                        <div className='mt-4'>
                                            <h4 className='mb-3'>Don't miss additional savings</h4>
                                            <div className='row'>
                                                {
                                                    discounts.map((discount, index) => (
                                                        <div className='col-12'>
                                                            <div className="p-2 mb-2 border rounded d-flex align-items-center justify-content-between bg-light">
                                                                <p className="fs-6 mb-0 fw-bold">{discount.title}</p>
                                                                <span className="d-flex align-items-center">
                                                                    <Link className="ms-2 text-dark">
                                                                        Auto Apply
                                                                    </Link>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    }
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
                                    {/* <Link className="mb-0 mt-4 fs-6 d-flex align-items-center gap-2 font-14">
                                        <i className="bi bi-share" />
                                        <span>Share this </span>
                                    </Link> */}
                                    <ShareLink />
                                    {/* share close */}

                                </div>
                            </div>
                        </div>
                        {/*end row*/}
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

                <InstagramGallery instagramFeeds={instagramFeeds} />

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