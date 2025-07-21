// authApi.js
import { API_CONFIG } from "../utils/api-config";
import axios from "axios";


export const fetchProducts = async (filters = {}, page = 1, perPage = 10) => {
  try {
    // Ensure that page is explicitly added to the filters object for buildQueryString
    const requestBody = {
        ...filters, // This includes categories, sizes, colors, availability, priceRange
        page: page,
        per_page: perPage, // Add per_page to the body
    };
    const response = await axios.post(
      `${API_CONFIG.baseURL}/products`,
      requestBody,
      { headers: API_CONFIG.headers }
    );
    return response.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const fetchProductDetails = async (slug) => {
  try {
    const response = await axios.post(
      `${API_CONFIG.baseURL}/product-details`,
      {slug},
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    return error.response?.data;
    // throw new Error(error.response?.data?.message || "No blog details found");
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



