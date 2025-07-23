import axios from "axios";
import { API_CONFIG } from "../utils/api-config";
import fetchWithAuth from "../utils/apiAthurization";

// 🛒 1️⃣ Fetch User Cart from Database
export const getUserAddresses = async () => {
  try {
    const response = await fetchWithAuth(
        `${API_CONFIG.baseURL}/customer-addresses`,'GET'
      );
    return response.data;
  } catch (error) {
    return { 
      status: "error", 
      message: error?.message || "Failed to fetch addresses",
      statusCode: error.response?.status || 500 // Preserve status code
    };
  }
};

// 🛒 3️⃣ Add Item to Cart in Database
export const addUserAddress = async data => {
  console.log(data);
  try {
    const response = await fetchWithAuth(
        `${API_CONFIG.baseURL}/customer-addresses`,'POST',data
      );
    return response.data;
  } catch (error) {
    return { 
      status: "error", 
      message: error?.message || "Failed to add address",
      statusCode: error.response?.status || 500 // Preserve status code
    };
  }
};

// 🛒 4️⃣ Update Cart Quantity in Database
export const updateUserAddress = async (id,data) => {
  try {
    const response = await fetchWithAuth(
        `${API_CONFIG.baseURL}/customer-addresses/${id}`,'PATCH',data
      );
    return response.data;
  } catch (error) {
    return { 
      status: "error", 
      message: error?.message || "Failed to update address",
      statusCode: error.response?.status || 500 // Preserve status code
    };
  }
};

// 🛒 5️⃣ Remove Item from Database Cart
export const deleteUserAddress = async id => {
  try {
    const response = await fetchWithAuth(
        `${API_CONFIG.baseURL}/customer-addresses/${id}`,'DELETE'
      );
    return response.data;
  } catch (error) {
    return { 
      status: "error", 
      message: error?.message || "Failed to delete address",
      statusCode: error.response?.status || 500 // Preserve status code
    };
  }
};
