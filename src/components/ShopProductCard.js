import React, { useState, useEffect } from "react";
import { IMAGE_URL } from "../utils/api-config";
import { addToCart } from "../actions/cartActions";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../actions/wishlistActions";
import { showToast } from "./ToastifyNotification";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedVariation, setSelectedVariation] = useState(null);

    const [imageSrc, setImageSrc] = useState(
        `${IMAGE_URL}/${product?.feature_image}`
    );

    /* ------------------ Initialize Image ------------------ */
    useEffect(() => {
        if (product?.product_variations?.length > 0) {
            setImageSrc(`${IMAGE_URL}/${product.product_variations[0].image}`);
        } else {
            setImageSrc(`${IMAGE_URL}/${product?.product_gallery?.[0].image || product.feature_image}`);
        }
    }, [product]);

    /* ------------------ Unique Colors ------------------ */
    const uniqueColors = product?.product_variations
        ? Array.from(
            new Set(product.product_variations.map(v => v.color.id))
        ).map(id =>
            product.product_variations.find(v => v.color.id === id).color
        )
        : [];

    /* ------------------ Auto select single color ------------------ */
    useEffect(() => {
        if (uniqueColors.length === 1) {
            setSelectedColor(uniqueColors[0]);
        }
    }, [uniqueColors]);

    /* ------------------ Available Sizes ------------------ */
    const availableSizesForSelectedColor = product?.product_variations
        ? product.product_variations
            .filter(v => selectedColor && v.color.id === selectedColor.id)
            .map(v => v.size)
        : [];

    /* ------------------ Variation Selection ------------------ */
    useEffect(() => {
        if (selectedColor && selectedSize) {
            const variation = product.product_variations.find(
                v =>
                    v.color.id === selectedColor.id &&
                    v.size.id === selectedSize.id
            );
            setSelectedVariation(variation);
            if (variation?.image) {
                setImageSrc(`${IMAGE_URL}/${variation.image}`);
            }
        }
    }, [selectedColor, selectedSize, product?.product_variations]);

    /* ------------------ Actions ------------------ */
    const handleAddToCart = () => {
        if (selectedVariation && selectedColor && selectedSize) {
            dispatch(addToCart(product, selectedVariation, 1));
        } else {
            showToast("error", "Please select color and size!");
        }
    };

    const handleAddToWishlist = () => {
        dispatch(addToWishlist(product, selectedVariation));
    };

    return (
        <div className="product-card rounded-3">
            <div className="d-flex flex-column gap-3">
                <div className="position-relative">
                    <Link to={`/product-detail/${product.slug}`}>
                        <img
                            src={imageSrc}
                            className="product-img pro-img-two img-fluid rounded-3"
                            alt={product.name}
                            onMouseEnter={() => setImageSrc(`${IMAGE_URL}/${product?.product_gallery[0].image || product.feature_image}`)}
                            onMouseLeave={() =>
                                setImageSrc(
                                    product?.product_variations?.length > 0
                                        ? `${IMAGE_URL}/${product?.product_variations[0].image}`
                                        : `${IMAGE_URL}/${product?.product_gallery[0].image || product.feature_image}`
                                )
                            }
                        />
                    </Link>

                    <div className="position-absolute top-0 end-0 m-3 product-actions">
                        <button
                            className="btn btn-action"
                            onClick={handleAddToWishlist}
                        >
                            <i
                                className={`bi bi-heart${product.is_wishlisted ? "-fill" : ""}`}
                                style={{ color: product.is_wishlisted ? "#ff0000" : "" }}
                            />
                        </button>
                    </div>

                    <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
                        <button
                            className="btn btn-dark rounded-5 w-100 st-mb-cart"
                            onClick={handleAddToCart}
                        >
                            Add to cart
                        </button>
                    </div>
                </div>

                <div>
                    <h3 className="product-name st-pro-name mb-1">
                        {product.name}
                    </h3>

                    {/* ------------------ Price ------------------ */}
                    <p className="product-price mt-2">
                        <span className="sale-price">
                            ₹{selectedVariation?.sale_price || product?.product_variations?.[0]?.sale_price}
                        </span>
                        {selectedVariation?.regular_price &&
                            selectedVariation.regular_price !==
                            selectedVariation.sale_price && (
                                <span className="text-decoration-line-through text-danger ms-2">
                                    ₹{selectedVariation.regular_price}
                                </span>
                            )}
                    </p>

                    {/* ------------------ Color & Size ------------------ */}
                    {/* ------------------ Color, Size & Buy Now ------------------ */}
                    {/* ------------------ Color, Size & Buy Now ------------------ */}
                    <div className="row g-2 align-items-end">
                        {/* Color */}
                        <div className="col-6 col-md-4" >
                            {uniqueColors.length === 1 ? (
                                <div className="st-pro-name form-control form-control-sm text-center d-flex align-items-center justify-content-start gap-1">
                                    <span
                                        style={{
                                            width: "10px",
                                            height: "9px",
                                            borderRadius: "50%",
                                            backgroundColor: uniqueColors[0].code,
                                            display: "inline-block",
                                        }}
                                    />
                                     <small className="st-pro-name text-start">{uniqueColors[0].name}</small>
                                </div>
                            ) : (
                                <select
                                    className="form-select form-select-sm"
                                    value={selectedColor?.id || ""}
                                    onChange={(e) => {
                                        const color = uniqueColors.find(
                                            c => c.id === parseInt(e.target.value)
                                        );
                                        setSelectedColor(color);
                                        setSelectedSize(null);
                                    }}
                                >
                                    <option value="">Color</option>
                                    {uniqueColors.map(color => (
                                        <option key={color.id} value={color.id}>
                                            {color.name}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>

                        {/* Size */}
                        <div className="col-6 col-md-4">
                            <select
                                className="form-select form-select-sm"
                                value={selectedSize?.id || ""}
                                onChange={(e) => {
                                    const size = availableSizesForSelectedColor.find(
                                        s => s.id === parseInt(e.target.value)
                                    );
                                    setSelectedSize(size);
                                }}
                                disabled={!selectedColor}
                            >
                                <option value="">Size</option>
                                {availableSizesForSelectedColor.map(size => (
                                    <option key={size.id} value={size.id}>
                                        {size.code}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Mobile line break */}
                        <div className="w-100 d-md-none"></div>

                        {/* Buy Now */}
                        <div className="col-12 col-md-4">
                            <button
                                className="btn btn-primary btn-sm w-100"
                                onClick={handleAddToCart}
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ProductCard;
