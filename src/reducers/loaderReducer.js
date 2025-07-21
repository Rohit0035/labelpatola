import { SHOW_LOADER, HIDE_LOADER } from "../actions/loaderActions";

const initialState = {
  isLoading: false
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      console.log("action", action);
      return {
        ...state,
        isLoading: true
      };
    case HIDE_LOADER:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default loaderReducer;
