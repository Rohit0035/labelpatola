import React from "react";
import { IMAGE_URL } from "../utils/api-config";
import { addToCart } from "../actions/cartActions";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../actions/wishlistActions";

const WishlistProductCard = ({ product, product_variation,wishlistId ,removeFromWishlist}) => {
  const dispatch = useDispatch();
  return (
    <div className="col">
      <div className="product-card rounded-3">
        <div className="d-flex flex-column gap-3">
          <div className="position-relative">
            <a href={`/product-detail/${product.slug}`}>
              <img
                src={`${IMAGE_URL}/${product.feature_image}`}
                className="product-img img-fluid rounded-3"
                alt=""
              />
            </a>
            <div className="position-absolute top-0 end-0 m-3 product-actions">
              <div className="d-flex flex-column gap-2">
                <a href="javascript:;" className="btn btn-action"
                  onClick={() => removeFromWishlist(wishlistId)}
                >
                  <i className="bi bi-trash" />
                </a>
              </div>
            </div>
            <div className="position-absolute bottom-0 start-0 end-0 m-3 product-cart">
              <a
                href="javascript:;"
                className="btn btn-dark rounded-5 d-flex align-items-center justify-content-center gap-2 py-2"
                onClick={() =>
                      dispatch(addToCart(product, product_variation, 1))}
              >
                <i className="bi bi-basket2" />
                <span>Add to Cart</span>
              </a>
            </div>
          </div>
          <div className="">
            <h3
              className="product-name mb-1"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              data-bs-title="Wishlist"
            >
              {product.name}
            </h3>
            <p className="mb-0 product-price">
            <span className="sale-price">
              ₹{product_variation?.sale_price}
            </span>/
            <span className="sale-price text-decoration-line-through text-danger ms-2">
              ₹{product_variation?.regular_price}
            </span>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistProductCard;
