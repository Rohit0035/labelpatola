// authApi.js
import { API_CONFIG } from "../utils/api-config";
import axios from "axios";
import fetchWithAuth from "../utils/apiAthurization";


export const fetchProducts = async (filters = {}, page = 1, perPage = 10) => {
  try {
    const requestBody = {
        ...filters,
        page: page,
        per_page: perPage,
    };

    // CHANGE: Use fetchWithAuth instead of axios.post
    const response = await fetchWithAuth(
      `${API_CONFIG.baseURL}/products`, 
      'POST', 
      requestBody
    );
    
    return response.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const fetchProductDetails = async (slug) => {
  try {
    // const response = await axios.post(
    //   `${API_CONFIG.baseURL}/product-details`,
    //   {slug},
    //   { headers: API_CONFIG.headers } // Pass headers correctly
    // );
    // return response.data; // Axios automatically parses JSON
    const response = await fetchWithAuth(
          `${API_CONFIG.baseURL}/product-details`, 'POST', {slug}
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

export const fetchFilters = async () => {
  try {
    const response = await axios.get(
      `${API_CONFIG.baseURL}/get-filters`,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    return error.response?.data;
    // throw new Error(error.response?.data?.message || "No blog details found");
  }
};



