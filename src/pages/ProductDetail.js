import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import RecommendedProductsSlider from '../components/RecommendedProductsSlider';
import { useDispatch } from 'react-redux';
import { fetchProductDetails } from '../api/productAPI';
import { useParams } from 'react-router-dom';
import { IMAGE_URL } from '../utils/api-config';
import { addToCart } from '../actions/cartActions';
import ProductReviews from '../components/productReviews';
import { showToast } from '../components/ToastifyNotification';
import { addToWishlist } from '../actions/wishlistActions';
import { hideLoader, showLoader } from '../actions/loaderActions';
import SizeChart from '../assets/images/common/size-chart.jpg'

const ProductDetail = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

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


    if (!product) {
        return <p className="text-center py-40">Product not found.</p>;
    }

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
                <section className="py-5 product-details">
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
                                        className="product-images-swiper"
                                    >
                                        {
                                            productImages.map((image, index) =>
                                                <SwiperSlide key={index}>
                                                    <img src={`${IMAGE_URL}/${image}`} className="rounded-3" alt={image} />
                                                </SwiperSlide>
                                            )
                                        }
                                    </Swiper>

                                    {/* Thumbnail Swiper */}
                                    <Swiper
                                        onSwiper={setThumbsSwiper}
                                        modules={[Thumbs]}
                                        slidesPerView={4}
                                        spaceBetween={10}
                                        watchSlidesProgress
                                        className="product-images-swiper-thumbnail mt-3"
                                    >
                                        {
                                            productImages.map((image, index) =>
                                                <SwiperSlide key={index}>
                                                    <img src={`${IMAGE_URL}/${image}`} className="rounded-3" alt={image} />
                                                </SwiperSlide>
                                            )
                                        }
                                    </Swiper>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="product-details">
                                    <p className="mb-1">{product?.category?.name}</p>
                                    <h2 className="mb-0">{product?.name}</h2>
                                    <div className="d-flex align-items-center gap-2 my-3">
                                        <span className="ratings text-warning">
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
                                            onClick={handleAddToWishlist}
                                        >
                                            <i className="bi bi-heart" />
                                            wishlist
                                        </button>
                                    </div>
                                    <div className="mt-4">
                                            <img src={SizeChart} alt="size chart" className="w-100" />
                                    </div>
                                    <div className="mt-4">
                                        <p className="mb-2 d-flex align-items-center gap-2 font-14">
                                            <i className="bi bi-truck" />
                                            <span>
                                                <span className="fw-semibold">
                                                    Free shipping:
                                                </span>{" "}
                                                Enjoy free shipping all over the India!
                                            </span>
                                        </p>
                                        <p className="mb-2 d-flex align-items-center gap-2 font-14">
                                            <i className="bi bi-alarm" />
                                            <span>
                                                <span className="fw-semibold">Estimated Delivery:</span>
                                                International: 10-15 days | United States: 8-10 days
                                            </span>
                                        </p>
                                        <p className="mb-0 mt-3 d-flex align-items-center gap-2 font-14">
                                            <i className="bi bi-share" />
                                            <span>Share this product</span>
                                        </p>
                                        <div className="mt-2 d-flex align-items-center gap-2 product-share-link">
                                            <a
                                                href="javascript:;"
                                                className="btn btn-sm btn-outline-dark border"
                                            >
                                                <i className="bi bi-facebook" />
                                            </a>
                                            <a
                                                href="javascript:;"
                                                className="btn btn-sm btn-outline-dark border"
                                            >
                                                <i className="bi bi-twitter-x" />
                                            </a>
                                            <a
                                                href="javascript:;"
                                                className="btn btn-sm btn-outline-dark border"
                                            >
                                                <i className="bi bi-linkedin" />
                                            </a>
                                            <a
                                                href="javascript:;"
                                                className="btn btn-sm btn-outline-dark border"
                                            >
                                                <i className="bi bi-instagram" />
                                            </a>
                                            <a
                                                href="javascript:;"
                                                className="btn btn-sm btn-outline-dark border"
                                            >
                                                <i className="bi bi-snapchat" />
                                            </a>
                                        </div>
                                    </div>
                                    <hr className="my-4 border-dark border-opacity-50" />
                                    <div className="">
                                        <p className="mb-2 font-14">
                                            <span className="fw-semibold">Available: </span> {selectedVariation?.stock_status || 'N/A'}
                                        </p>
                                        <p className="mb-2 font-14">
                                            <span className="fw-semibold">Categories: </span>
                                            <a href="javascript:;" className="link-secondary">
                                                {product?.category?.name}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end row*/}
                        <div className="tabular-product-details mt-5">
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
                                    <ProductReviews product={product}/>
                                </div>
                                <div className="tab-pane fade show" id="shipping-returns">
                                    <p className="text-gray-700 mb-24" dangerouslySetInnerHTML={{ __html: product?.shipping_return }}></p>

                                </div>
                                <div className="tab-pane fade show" id="return-policy">
                                    <p className="text-gray-700 mb-24" dangerouslySetInnerHTML={{ __html: product?.return_policy }}></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*end product details*/}
                {/*start Recommended product*/}
                 <RecommendedProductsSlider recommendedProducts={recommendedProducts}/>
                {/*end Recommended product*/}
            </main>
            {/*end main content*/}

            <Footer />
        </>

    );
};

export default ProductDetail;