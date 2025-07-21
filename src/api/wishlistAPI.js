import axios from "axios";
import { API_CONFIG, API_CONFIG_AUTH } from "../utils/api-config";
import fetchWithAuth from "../utils/apiAthurization";

// 🛒 1️⃣ Fetch User wishlist from Database
export const fetchUserWishlist = async () => {
  try {
    const response = await fetchWithAuth(
      `${API_CONFIG.baseURL}/get-wishlists`
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


// 🛒 3️⃣ Add Item to wishlist in Database
export const addToUserWishlist = async data => {
  console.log(data);
  try {
    
    const response = await fetchWithAuth(
      `${API_CONFIG.baseURL}/add-wishlist`,'POST',data
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

// 🛒 5️⃣ Remove Item from Database wishlist
export const removeFromUserWishlist = async data => {
  try {
    
    const response = await fetchWithAuth(
      `${API_CONFIG.baseURL}/delete-wishlist`,'POST',data
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
