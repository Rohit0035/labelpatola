import axios from "axios";
import { API_CONFIG } from "../utils/api-config";
import fetchWithAuth from "../utils/apiAthurization";

// 🛒 1️⃣ Fetch User Cart from Database
export const placeOrder = async (data) => {
  try {
    const response = await fetchWithAuth(
          `${API_CONFIG.baseURL}/place-order`, 'POST', data
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