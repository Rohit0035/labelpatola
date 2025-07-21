import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import loaderReducer from "./loaderReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  loader: loaderReducer
});

export default rootReducer;
