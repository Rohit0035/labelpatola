import axios from "axios";
import { API_CONFIG, API_CONFIG_AUTH } from "../utils/api-config";
import fetchWithAuth from "../utils/apiAthurization";

// 🛒 1️⃣ Fetch User Cart from Database
export const fetchUserCart = async () => {
  try {
    const response = await fetchWithAuth(
      `${API_CONFIG.baseURL}/get-carts`,'GET'
    );
    return response.data;
  } catch (error) {
    return { 
      status: "error", 
      message: error?.message || "signup failed",
      statusCode: error.response?.status || 500 // Preserve status code
    };
  }
};

// 🛒 2️⃣ Sync Local Cart with Database (On Login)
export const syncLocalCartToDB = async (cart) => {
  try {
    const response = await fetchWithAuth(
      `${API_CONFIG.baseURL}/cart-sync`,'POST',cart
    );
    return response.data; // Return success message
  } catch (error) {
    return { 
      status: "error", 
      message: error?.message || "signup failed",
      statusCode: error.response?.status || 500 // Preserve status code
    };
  }
};

// 🛒 3️⃣ Add Item to Cart in Database
export const addToUserCart = async data => {
  console.log(data);
  try {
    const response = await fetchWithAuth(
      `${API_CONFIG.baseURL}/add-cart`,'POST',data
    );
    return response.data;
  } catch (error) {
    return { 
      status: "error", 
      message: error?.message || "signup failed",
      statusCode: error.response?.status || 500 // Preserve status code
    };
  }
};

// 🛒 4️⃣ Update Cart Quantity in Database
export const updateUserCart = async data => {
  try {
    
    const response = await fetchWithAuth(
      `${API_CONFIG.baseURL}/update-cart`,'POST',data
    );
    return response.data;
  } catch (error) {
    return { 
      status: "error", 
      message: error?.message || "signup failed",
      statusCode: error.response?.status || 500 // Preserve status code
    };
  }
};

// 🛒 5️⃣ Remove Item from Database Cart
export const removeFromUserCart = async data => {
  try {
    
    const response = await fetchWithAuth(
      `${API_CONFIG.baseURL}/delete-cart`,'POST',data
    );
    return response.data;
  } catch (error) {
    return { 
      status: "error", 
      message: error?.message || "signup failed",
      statusCode: error.response?.status || 500 // Preserve status code
    };
  }
};
