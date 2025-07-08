import axios from "axios";
import { API_CONFIG_AUTH } from "../utils/api-config";

// 🛒 1️⃣ Fetch User Cart from Database
export const fetchUserCart = async () => {
  try {
    const config = API_CONFIG_AUTH();
    const response = await axios.get(`${config.baseURL}/get-carts`, 
      {headers: config.headers}
    );
    return response.data;
  } catch (error) {
    return error.response?.data;
    // console.error("❌ Error fetching user cart:", error);
    // return [];
  }
};

// 🛒 2️⃣ Sync Local Cart with Database (On Login)
export const syncLocalCartToDB = async (cart) => {
  try {
    const config = API_CONFIG_AUTH();
    const response = await axios.post(
      `${config.baseURL}/cart-sync`,
      { cart } ,
      { headers: config.headers }
    );
    return response.data; // Return success message
  } catch (error) {
    return error.response?.data;
    // console.error("❌ Error syncing cart:", error);
    // return { message: "Failed to sync cart" };
  }
};

// 🛒 3️⃣ Add Item to Cart in Database
export const addToUserCart = async data => {
  console.log(data);
  try {
    const config = API_CONFIG_AUTH();
    const response = await axios.post(
      `${config.baseURL}/add-cart`,
      data,
      { headers: config.headers }
    );
    return response.data;
  } catch (error) {
    return error.response?.data;
    // console.error("❌ Error adding item to cart:", error);
  }
};

// 🛒 4️⃣ Update Cart Quantity in Database
export const updateUserCart = async data => {
  try {
    const config = API_CONFIG_AUTH();
    const response = await axios.post(
      `${config.baseURL}/update-cart`,
      data,
      { headers: config.headers }
    );
    return response.data;
  } catch (error) {
    return error.response?.data;
    // console.error("❌ Error updating cart:", error);
  }
};

// 🛒 5️⃣ Remove Item from Database Cart
export const removeFromUserCart = async data => {
  try {
    const config = API_CONFIG_AUTH();
    const response = await axios.post(
      `${config.baseURL}/delete-cart`,
      data,
      {
        headers: config.headers
      }
    );
    return response.data;
  } catch (error) {
    return error.response?.data;
    // console.error("❌ Error removing item from cart:", error);
  }
};
