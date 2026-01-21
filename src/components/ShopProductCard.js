import React, { useState, useEffect } from "react";
import { IMAGE_URL } from "../utils/api-config";
import { addToCart } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../actions/wishlistActions";
import { showToast } from "./ToastifyNotification";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedVariation, setSelectedVariation] = useState(null);
  const [isWishlisted, setIsWishlisted] = useState(product.is_wishlisted);
  
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
  
    const [imageSrc, setImageSrc] = useState(
    `${IMAGE_URL}/${product?.feature_image}`
  );

  /* ------------------ Initialize Image ------------------ */
  useEffect(() => {
    if (product?.product_variations?.length > 0) {
      setImageSrc(`${IMAGE_URL}/${product.product_variations[0].image}`);
    } else {
      setImageSrc(
        `${IMAGE_URL}/${product?.product_gallery?.[0]?.image || product.feature_image}`
      );
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
    ? product.product_variations.filter(
        v => selectedColor && v.color.id === selectedColor.id
      )
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

  /* ------------------ Stock Logic ------------------ */
  const isOutOfStock =
    selectedVariation && selectedVariation.stock_quantity <= 0;

  /* ------------------ Add to Cart ------------------ */
  const handleAddToCart = () => {
  if (!selectedColor || !selectedSize || !selectedVariation) {
    showToast("error", "Please select color and size!");
    return;
  }

  const availableStock = selectedVariation.stock_quantity;
  const newQty = cartQtyForVariation + 1;

  if (newQty > availableStock) {
    showToast(
      "error",
      `Only ${availableStock} item(s) available. You already added ${cartQtyForVariation}.`
    );
    return;
  }

  dispatch(addToCart(product, selectedVariation, 1));
};

  /* ------------------ Wishlist Sync ------------------ */
  useEffect(() => {
    setIsWishlisted(product.is_wishlisted);
  }, [product.is_wishlisted]);

  const handleAddToWishlist = async () => {
    if (isWishlisted) {
      const removed = await dispatch(removeFromWishlist(product.id));
      if (removed) setIsWishlisted(false);
      return;
    }

    const added = await dispatch(addToWishlist(product, selectedVariation));
    if (added) setIsWishlisted(true);
  };

  return (
    <div className="product-card rounded-3">
      <div className="d-flex flex-column gap-3">
        <div className="position-relative">
          <Link to={`/product-detail/${product.slug}`}>
            <img
              loading="lazy"
              src={imageSrc}
              className="product-img img-fluid rounded-3"
              alt={product.name}
              onMouseEnter={() =>
                setImageSrc(
                  `${IMAGE_URL}/${product?.product_gallery?.[0]?.image || product.feature_image}`
                )
              }
              onMouseLeave={() =>
                setImageSrc(
                  selectedVariation?.image
                    ? `${IMAGE_URL}/${selectedVariation.image}`
                    : `${IMAGE_URL}/${product?.product_variations?.[0]?.image || product.feature_image}`
                )
              }
            />
          </Link>

          {/* Wishlist */}
          <div className="position-absolute top-0 end-0 m-3 product-actions">
            <button className="btn btn-action" onClick={handleAddToWishlist}>
              <i
                className={`bi bi-heart${isWishlisted ? "-fill" : ""}`}
                style={{ color: isWishlisted ? "#ff0000" : "" }}
              />
            </button>
          </div>

          {/* Add to cart */}
          <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
            <button
              className="btn btn-dark rounded-5 w-100 st-mb-cart"
              onClick={handleAddToCart}
              disabled={isOutOfStock || isStockLimitReached}
            >
              {isOutOfStock ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        </div>

        <div>
          <h3 className="product-name st-pro-name mb-1">
            {product.name}
          </h3>

          {/* Price */}
          <p className="product-price mt-2">
            <span className="sale-price">
              ₹{selectedVariation?.sale_price || product?.product_variations?.[0]?.sale_price}
            </span>
            {selectedVariation ? selectedVariation?.regular_price &&
              selectedVariation.regular_price !== selectedVariation.sale_price && (
                <span className="text-decoration-line-through text-danger ms-2">
                  ₹{selectedVariation.regular_price}
                </span>
              ):
              product?.product_variations?.[0]?.regular_price &&
              product?.product_variations?.[0]?.regular_price !==
                product?.product_variations?.[0]?.sale_price && (
                <span className="text-decoration-line-through text-danger ms-2">
                  ₹{product?.product_variations?.[0]?.regular_price}
                </span>
              )
            }
          </p>

          {/* Stock Info */}
          {selectedVariation && (
            <small
              className={`fw-semibold ${
                isOutOfStock ? "text-danger" : "text-success"
              }`}
            >
              {isOutOfStock
                ? "Out of stock"
                : `${selectedVariation.stock_quantity} left in stock`}
            </small>
          )}

          {/* Color, Size & Buy Now */}
          <div className="row g-2 align-items-end mt-2">
            {/* Color */}
            <div className="col-6 col-md-4">
              {uniqueColors.length === 1 ? (
                <div className="form-control form-control-sm d-flex align-items-center gap-2">
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      backgroundColor: uniqueColors[0].code
                    }}
                  />
                  <small>{uniqueColors[0].name}</small>
                </div>
              ) : (
                <select
                  className="form-select form-select-sm"
                  value={selectedColor?.id || ""}
                  onChange={e => {
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
                disabled={!selectedColor}
                onChange={e => {
                  const size = availableSizesForSelectedColor.find(
                    v => v.size.id === parseInt(e.target.value)
                  )?.size;
                  setSelectedSize(size);
                }}
              >
                <option value="">Size</option>
                {availableSizesForSelectedColor.map(v => (
                  <option
                    key={v.size.id}
                    value={v.size.id}
                    disabled={v.stock_quantity <= 0}
                  >
                    {v.size.code}
                    {v.stock_quantity <= 0 ? " (Out)" : ""}
                  </option>
                ))}
              </select>
            </div>

            {/* Buy Now */}
            <div className="col-12 col-md-4">
              <button
                className="btn btn-primary btn-sm w-100"
                onClick={handleAddToCart}
                disabled={isOutOfStock}
              >
                {isOutOfStock ? "Out of Stock" : "Buy Now"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
