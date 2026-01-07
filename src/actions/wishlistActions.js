import { addToUserWishlist, removeFromUserWishlist } from "../api/wishlistAPI";
import { showToast } from "../components/ToastifyNotification";
import { hideLoader, showLoader } from "./loaderActions";

export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";
export const SET_WISHLIST_COUNT = "SET_WISHLIST_COUNT";

export const addToWishlist = (product) => async (dispatch, getState) => {
  const state = getState();
  if (state.auth?.isAuthenticated) {
    dispatch(showLoader());
    try {
      const response = await addToUserWishlist({
        product_id: product.id,
      });

      if (response.success) {
        showToast("success", `${product.name} added to wishlist!`);

        const currentCount = getState().wishlist.count;
        dispatch({ type: SET_WISHLIST_COUNT, payload: response.data });
        return { success: true }
      }
    } catch (error) {
      showToast("error", "Failed to add to wishlist");
    }finally{
      dispatch(hideLoader());
    }
  } else {
    showToast("error", "Please login to add to wishlist!");
  }
};

export const removeFromWishlist = (productId) => async (dispatch, getState) => {
  const state = getState();
  if (state.auth?.isAuthenticated) {
    try {
      dispatch(showLoader());
      const response = await removeFromUserWishlist({ product_id: productId });

      if (response.success) {
        showToast("success", "Item removed from wishlist!");

        const currentCount = getState().wishlist.count;
        dispatch({ type: SET_WISHLIST_COUNT, payload: response.data });

        return { success: true };
      }
    } catch (error) {
      showToast("error", "Failed to remove item");
    }finally{
      dispatch(hideLoader());
    }
  } else {
    showToast("error", "Please login to remove from wishlist!");
  }
};
