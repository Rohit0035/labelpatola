import React, { useEffect, useState } from "react";
import WishlistProductCard from "../wishlistProductCard";
import { removeFromUserWishlist } from "../../api/wishlistAPI";
import { useDispatch, useSelector } from "react-redux";
import { SET_WISHLIST_COUNT } from "../../actions/wishlistActions";
import { showToast } from "../ToastifyNotification";

const Wishlist = ({ wishlists = [] }) => {
  const [wishlistItems, setWishlistItems] = useState(wishlists);
  const currentCount = useSelector(state => state.wishlist.count);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // Sync prop with local state
  useEffect(
    () => {
      if (wishlists && wishlists.length > 0) {
        setWishlistItems(wishlists);
      }
    },
    [wishlists]
  );

  const removeFromWishlist = async wishlistId => {
    setLoading(true);
    try {
      const data = await removeFromUserWishlist({ wishlist_id: wishlistId });
      if (data.success) {
        showToast("success", "Item removed from wishlist!");
        dispatch({
          type: SET_WISHLIST_COUNT,
          payload: Math.max(currentCount - 1, 0)
        });

        setWishlistItems(prevItems =>
          prevItems.filter(item => item.id !== wishlistId)
        );
      }
    } catch (error) {
      console.error("Error removing from Wishlist:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="shop-wishlist p-2">
      <h5 className="mb-4">My Wishlist</h5>
      <hr />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-3 g-4">
        {wishlistItems.length > 0
          ? wishlistItems.map(wishlist =>
              <WishlistProductCard
                key={wishlist.id}
                product={wishlist.product}
                product_variation={wishlist.product_variation}
                wishlistId={wishlist.id}
                removeFromWishlist={removeFromWishlist}
              />
            )
          : <p className="text-center">No items in wishlist</p>}
      </div>
    </div>
  );
};

export default Wishlist;
