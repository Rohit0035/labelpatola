import { SET_WISHLIST_COUNT } from "../actions/wishlistActions";
import { LOGOUT } from "./authReducer";

const loadWishlistCountFromLocalStorage = () => {
  try {
    const count = localStorage.getItem("wishlistCount");
    return count ? parseInt(count, 10) : 0;
  } catch (error) {
    return 0;
  }
};

const saveWishlistCountToLocalStorage = count => {
  try {
    localStorage.setItem("wishlistCount", count.toString());
  } catch (error) {}
};

const initialState = {
  count: loadWishlistCountFromLocalStorage()
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WISHLIST_COUNT:
      saveWishlistCountToLocalStorage(action.payload);
      return { ...state, count: action.payload };

    case LOGOUT:
      localStorage.removeItem("wishlistCount");
      return { ...state, count: 0 };

    default:
      return state;
  }
};

export default wishlistReducer;
