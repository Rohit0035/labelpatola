// authApi.js
import { API_CONFIG } from "../utils/api-config";
import axios from "axios";

const buildQueryString = (filters) => {
  return new URLSearchParams(filters).toString(); // Converts object to query string
};

export const fetchProducts = async (filters = {}, page = 1) => {
  try {
    const queryString = buildQueryString({ ...filters, page });
    const response = await axios.get(
      `${API_CONFIG.baseURL}/products?${queryString}`,
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



