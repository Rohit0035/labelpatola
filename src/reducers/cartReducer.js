import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  SET_CART,
  APPLY_DISCOUNT,
  TOGGLE_CART_SIDEBAR,
  CLEAR_CART
} from "../actions/cartActions";
import { LOGOUT } from "./authReducer";

// Load cart from localStorage
const loadCartFromLocalStorage = () => {
  try {
    const savedCart = localStorage.getItem("cart");
    return savedCart
      ? JSON.parse(savedCart)
      : {
          items: [],
          sub_total: "0.00",
          tax: "0.00",
          discount: "0.00",
          total: "0.00",
          coupon_code: ""
        };
  } catch (error) {
    console.error("Error loading cart from localStorage", error);
    return {
      items: [],
      sub_total: "0.00",
      tax: "0.00",
      discount: "0.00",
      total: "0.00",
      coupon_code: ""
    };
  }
};

// Save cart to localStorage
const saveCartToLocalStorage = cart => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart to localStorage", error);
  }
};

const initialState = {
  cart: loadCartFromLocalStorage(),
  isSidebarOpen: false
};

const calculateTotalWithDiscount = (subTotal, discount) => {
  return (parseFloat(subTotal) - parseFloat(discount)).toFixed(2);
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { product, product_variation, quantity } = action.payload;

      let updatedItems = [...state.cart.items];

      const existingItemIndex = updatedItems.findIndex(
        item =>
          item.product_id === product.id &&
          item.product_variation_id === product_variation.id
      );

      if (existingItemIndex !== -1) {
        updatedItems = updatedItems.map(
          (item, index) =>
            index === existingItemIndex
              ? {
                  ...item,
                  quantity: (parseFloat(item.quantity) + quantity).toString(),
                  sub_total: (parseFloat(item.sale_price) *
                    (parseFloat(item.quantity) + quantity)).toFixed(2),
                  total: (parseFloat(item.sale_price) *
                    (parseFloat(item.quantity) + quantity)).toFixed(2)
                }
              : item
        );
      } else {
        updatedItems.push({
          id: "",
          cart_id: state.cart.id || null,
          product_id: product.id,
          product_variation_id: product_variation.id,
          product,
          product_variation: product_variation,
          quantity: quantity.toString(),
          regular_price: product_variation.regular_price,
          sale_price: product_variation.sale_price,
          sub_total: (parseFloat(product_variation.sale_price) *
            quantity).toFixed(2),
          tax: "0.00",
          total: (parseFloat(product_variation.sale_price) * quantity).toFixed(
            2
          )
        });
      }

      const newSubTotal = updatedItems
        .reduce((total, item) => total + parseFloat(item.sub_total), 0)
        .toFixed(2);
      const newTotal = calculateTotalWithDiscount(
        newSubTotal,
        state.cart.discount
      );

      const updatedCart = {
        ...state.cart,
        items: updatedItems,
        sub_total: newSubTotal,
        total: newTotal
      };

      saveCartToLocalStorage(updatedCart);
      return { ...state, cart: updatedCart, isSidebarOpen: true };
    }

    case REMOVE_FROM_CART: {
      const updatedItems = state.cart.items.filter(
        item =>
          !(
            item.product_id === action.payload.productId &&
            item.product_variation_id === action.payload.product_variation.id
          )
      );

      const newSubTotal = updatedItems
        .reduce((total, item) => total + parseFloat(item.sub_total), 0)
        .toFixed(2);
      const newTax = updatedItems
        .reduce((total, item) => total + parseFloat(item.tax), 0)
        .toFixed(2);
      const newTotal = calculateTotalWithDiscount(
        newSubTotal,
        state.cart.discount
      );

      const updatedCart = {
        ...state.cart,
        items: updatedItems,
        sub_total: newSubTotal,
        tax: newTax,
        total: newTotal
      };

      saveCartToLocalStorage(updatedCart);
      return { ...state, cart: updatedCart };
    }

    case UPDATE_CART_QUANTITY: {
      const updatedItems = state.cart.items.map(
        item =>
          item.product_id === action.payload.productId &&
          item.product_variation_id === action.payload.product_variation.id
            ? {
                ...item,
                quantity: action.payload.quantity.toString(),
                sub_total: (parseFloat(item.sale_price) *
                  action.payload.quantity).toFixed(2),
                total: (parseFloat(item.sale_price) *
                  action.payload.quantity).toFixed(2)
              }
            : item
      );

      const newSubTotal = updatedItems
        .reduce((total, item) => total + parseFloat(item.sub_total), 0)
        .toFixed(2);
      const newTotal = calculateTotalWithDiscount(
        newSubTotal,
        state.cart.discount
      );

      const updatedCart = {
        ...state.cart,
        items: updatedItems,
        sub_total: newSubTotal,
        total: newTotal
      };

      saveCartToLocalStorage(updatedCart);
      return { ...state, cart: updatedCart };
    }

    case APPLY_DISCOUNT: {
      const { discount, coupon_code } = action.payload;
      const newTotal = calculateTotalWithDiscount(
        state.cart.sub_total,
        discount
      );

      const updatedCart = {
        ...state.cart,
        discount: discount.toFixed(2),
        coupon_code,
        total: newTotal
      };

      saveCartToLocalStorage(updatedCart);
      return { ...state, cart: updatedCart };
    }

    case SET_CART: {
      const updatedCart = action.payload.updatedCart;
      saveCartToLocalStorage(updatedCart);
      return { ...state, cart: updatedCart };
    }

    case LOGOUT: {
      const emptyCart = {
        items: [],
        sub_total: "0.00",
        tax: "0.00",
        discount: "0.00",
        total: "0.00",
        coupon_code: ""
      };
      localStorage.removeItem("cart");
      return { ...state, cart: emptyCart };
    }

    case CLEAR_CART: {
      const emptyCart = {
        items: [],
        sub_total: "0.00",
        tax: "0.00",
        discount: "0.00",
        total: "0.00",
        coupon_code: ""
      };
      localStorage.removeItem("cart");
      return { ...state, cart: emptyCart };
    }

    case TOGGLE_CART_SIDEBAR: {
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    }

    default:
      return state;
  }
};

export default cartReducer;
