import React, { useState, useEffect } from "react";
import { IMAGE_URL } from "../utils/api-config";
import { addToCart } from "../actions/cartActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showToast } from "./ToastifyNotification";

const WishlistProductCard = ({
  product,
  wishlistId,
  removeFromWishlist,
}) => {
  const dispatch = useDispatch();

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedVariation, setSelectedVariation] = useState(null);
  const [imageSrc, setImageSrc] = useState(
    `${IMAGE_URL}/${product.feature_image}`
  );

  /* ------------------ Unique Colors ------------------ */
  const uniqueColors = product?.product_variations
    ? Array.from(
        new Set(product.product_variations.map(v => v.color.id))
      ).map(id =>
        product.product_variations.find(v => v.color.id === id).color
      )
    : [];

  /* ------------------ Auto-select single color ------------------ */
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

  /* ------------------ Resolve Variation ------------------ */
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
  }, [selectedColor, selectedSize, product.product_variations]);

  /* ------------------ Add to Cart ------------------ */
  const handleAddToCart = () => {
    if (!selectedVariation) {
      showToast("error", "Please select color and size");
      return;
    }
    dispatch(addToCart(product, selectedVariation, 1));
  };

  return (
    <div className="col">
      <div className="product-card rounded-3">
        <div className="d-flex flex-column gap-3">
          <div className="position-relative">
            <Link to={`/product-detail/${product.slug}`}>
              <img
                src={imageSrc}
                className="product-img img-fluid rounded-3"
                alt={product.name}
              />
            </Link>

            {/* Remove from Wishlist */}
            <div className="position-absolute top-0 end-0 m-3 product-actions">
              <button
                className="btn btn-action"
                onClick={() => removeFromWishlist(product.id)}
              >
                <i className="bi bi-trash" />
              </button>
            </div>

            {/* Add to Cart */}
            <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
              <button
                className="btn btn-dark rounded-5 w-100"
                onClick={handleAddToCart}
              >
                <i className="bi bi-basket2 me-2" />
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h3 className="product-name mb-1">{product.name}</h3>

            {/* Price */}
            <p className="product-price">
              <span className="sale-price">
                ₹
                {selectedVariation?.sale_price ||
                  product.product_variations?.[0]?.sale_price}
              </span>
              {selectedVariation?.regular_price &&
                selectedVariation.regular_price !==
                  selectedVariation.sale_price && (
                  <span className="text-decoration-line-through text-danger ms-2">
                    ₹{selectedVariation.regular_price}
                  </span>
                )}
            </p>

            {/* Color & Size */}
            <div className="row g-2">
              {/* Color */}
              <div className="col-6">
                {uniqueColors.length === 1 ? (
                  <div className="form-control form-control-sm text-center">
                    {uniqueColors[0].name}
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
              <div className="col-6">
                <select
                  className="form-select form-select-sm"
                  value={selectedSize?.id || ""}
                  disabled={!selectedColor}
                  onChange={e => {
                    const size = availableSizesForSelectedColor.find(
                      s => s.id === parseInt(e.target.value)
                    );
                    setSelectedSize(size);
                  }}
                >
                  <option value="">Size</option>
                  {availableSizesForSelectedColor.map(size => (
                    <option key={size.id} value={size.id}>
                      {size.code}
                    </option>
                  ))}
                </select>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistProductCard;
