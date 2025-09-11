import axios from "axios";
import { API_CONFIG } from "../utils/api-config";
import fetchWithAuth from "../utils/apiAthurization";

// 🛒 1️⃣ Fetch User Cart from Database
export const fetchUserProfileData = async () => {
  try {
    const response = await fetchWithAuth(
          `${API_CONFIG.baseURL}/get-user-profile-data`
        );
    return response.data;
  } catch (error) {
    return { 
      status: "error", 
      message: error?.message || "Failed to place order",
      statusCode: error.response?.status || 500 // Preserve status code
    };
  }
};

export const saveProductReview = async (data) => {
  try {
    const response = await fetchWithAuth(
          `${API_CONFIG.baseURL}/save-product-review`, 'POST',data,'multipart'
        );
    return response.data;
  } catch (error) {
    return { 
      status: "error", 
      message: error?.message || "Failed to save product review",
      statusCode: error.response?.status || 500 // Preserve status code
    };
  }
};

export const updateProfile = async (data) => {
  try {
    const response = await fetchWithAuth(
          `${API_CONFIG.baseURL}/update-profile`, 'POST',data
        );
    return response.data;
  } catch (error) {
    return { 
      status: "error", 
      message: error?.message || "Failed to save product review",
      statusCode: error.response?.status || 500 // Preserve status code
    };
  }
};

export const changePassword = async (data) => {
  try {
    const response = await fetchWithAuth(
          `${API_CONFIG.baseURL}/change-password`, 'POST',data
        );
    return response.data;
  } catch (error) {
    return { 
      status: "error", 
      message: error?.message || "Failed to save product review",
      statusCode: error.response?.status || 500 // Preserve status code
    };
  }
};