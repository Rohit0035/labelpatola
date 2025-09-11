import React, { useState, useEffect } from "react";
import { IMAGE_URL } from "../utils/api-config";
import { addToCart } from "../actions/cartActions";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../actions/wishlistActions";
import { showToast } from "./ToastifyNotification";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  // State to manage the selected color and size
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedVariation, setSelectedVariation] = useState(null);

  // State for image src, default to product.feature_image initially
  const [imageSrc, setImageSrc] = useState(
    `${IMAGE_URL}/${product?.feature_image}`
  );

  // Hardcoded hover image for now (replace with dynamic later)
  const hoverImage = "https://labelpatola.com/admin/storage/product/images/6921752673702.jpeg";

  // Initialize selected color, size, and variation when the product prop changes
  useEffect(() => {
    if (product?.product_variations?.length > 0) {
      const defaultVariation = product.product_variations[0];
      setSelectedVariation(defaultVariation);
      setSelectedColor(defaultVariation.color);
      setSelectedSize(defaultVariation.size);

      // Also update imageSrc to selectedVariation image initially
      setImageSrc(`${IMAGE_URL}/${defaultVariation.image}`);
    } else {
      // fallback to feature image if no variations
      setImageSrc(`${IMAGE_URL}/${product?.feature_image}`);
    }
  }, [product]);

  // Update selectedVariation when selectedColor or selectedSize changes
  useEffect(() => {
    if (selectedColor && selectedSize && product?.product_variations) {
      const foundVariation = product.product_variations.find(
        (variation) =>
          variation.color.id === selectedColor.id &&
          variation.size.id === selectedSize.id
      );
      setSelectedVariation(foundVariation);

      if (foundVariation?.image) {
        setImageSrc(`${IMAGE_URL}/${foundVariation.image}`);
      }
    } else if (selectedColor && product?.product_variations) {
      const foundVariation = product.product_variations.find(
        (variation) => variation.color.id === selectedColor.id
      );
      setSelectedVariation(foundVariation);

      if (foundVariation?.image) {
        setImageSrc(`${IMAGE_URL}/${foundVariation.image}`);
      }
    }
  }, [selectedColor, selectedSize, product?.product_variations]);

  // Get unique colors from product variations
  const uniqueColors = product?.product_variations
    ? Array.from(new Set(product.product_variations.map((v) => v.color.id))).map(
        (id) => product.product_variations.find((v) => v.color.id === id).color
      )
    : [];

  // Get available sizes based on the selected color
  const availableSizesForSelectedColor = product?.product_variations
    ? product.product_variations
        .filter((variation) => selectedColor && variation.color.id === selectedColor.id)
        .map((v) => v.size)
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

  return (
    <div className="product-card rounded-3">
      <div className="d-flex flex-column gap-3">
        <div className="position-relative">
          <Link to={`/product-detail/${product.slug}`}>
            <img
              src={imageSrc}
              className="product-img img-fluid rounded-3"
              alt={product.name}
              onMouseEnter={() => setImageSrc(`${IMAGE_URL}/${product.feature_image}`)}
              onMouseLeave={() =>
                setImageSrc(
                  selectedVariation
                    ? `${IMAGE_URL}/${selectedVariation.image}`
                    : `${IMAGE_URL}/${product.feature_image}`
                )
              }
            />
          </Link>
          <div className="position-absolute top-0 end-0 m-3 product-actions">
            <div className="d-flex flex-column gap-2">
              <Link
                to="javascript:;"
                className="btn btn-action"
                onClick={handleAddToWishlist}
              >
                <i className="bi bi-heart" />
              </Link>
              <Link to="javascript:;" className="btn btn-action st-hide">
                <i className="bi bi-funnel" />
              </Link>
              <Link to="javascript:;" className="btn btn-action st-hide">
                <i className="bi bi-eye" />
              </Link>
            </div>
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
          <h3
            className="product-name mb-1 st-pro-name"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            data-bs-title="Wishlist"
          >
            {product.name}
          </h3>

          {/* Color Selection */}
          {uniqueColors.length > 0 && (
            <div className="product-colors mt-2">
              <div className="d-flex gap-2">
                {uniqueColors.map((color) => (
                  <div
                    key={color.id}
                    className={`color-option st-mb-color ${
                      selectedColor?.id === color.id ? "selected" : ""
                    }`}
                    style={{
                      backgroundColor: color.name,
                      width: "15px",
                      height: "15px",
                      borderRadius: "50%",
                      cursor: "pointer",
                      border:
                        selectedColor?.id === color.id
                          ? "1px solid #000"
                          : "1px solid #ccc",
                    }}
                    onClick={() => {
                      setSelectedColor(color);
                      setSelectedSize(null); // Reset size when color changes
                    }}
                  ></div>
                ))}
              </div>
            </div>
          )}

          {/* Size Selection */}
          {/* {selectedColor && availableSizesForSelectedColor.length > 0 && (
            <div className="product-sizes mt-2">
              <div className="d-flex gap-2">
                {availableSizesForSelectedColor.map((size) => (
                  <button
                    key={size.id}
                    className={`btn btn-outline-dark btn-sm st-mb-size ${
                      selectedSize?.id === size.id ? "active" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size.name}
                  </button>
                ))}
              </div>
            </div>
          )} */}

          <p className="mb-0 product-price mt-2 st-mb-price">
            <span className="sale-price">
              ₹
              {selectedVariation?.sale_price ||
                product?.product_variations?.[0]?.sale_price}
            </span>
            {parseFloat(selectedVariation?.regular_price) !==
              parseFloat(selectedVariation?.sale_price) && (
              <span className="sale-price text-decoration-line-through text-danger ms-2">
                ₹{selectedVariation?.regular_price}
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
