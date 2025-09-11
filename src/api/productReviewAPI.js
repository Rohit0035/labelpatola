// authApi.js
import { API_CONFIG } from "../utils/api-config";
import axios from "axios";
import fetchWithAuth from "../utils/apiAthurization";

export const submitProductReview = async (data) => {
  try {
    const response = await fetchWithAuth(
          `${API_CONFIG.baseURL}/save-product-review`, 'POST', data
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


