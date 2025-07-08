// authApi.js
import { API_CONFIG } from "../utils/api-config";
import axios from "axios";

export const fetchHomePageData = async () => {
  try {
    const response = await axios.get(
      `${API_CONFIG.baseURL}/home-page-data`,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    return error.response?.data;
    // throw new Error(error.response?.data?.message || "No banner found");
  }
};

export const fetchBanners = async () => {
  try {
    const response = await axios.get(
      `${API_CONFIG.baseURL}/banners`,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    return error.response?.data;
    // throw new Error(error.response?.data?.message || "No banner found");
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(
      `${API_CONFIG.baseURL}/categories`,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    return error.response?.data;
    // throw new Error(error.response?.data?.message || "No category found");
  }
};

export const fetchBestSellers = async () => {
  try {
    const response = await axios.get(
      `${API_CONFIG.baseURL}/products`,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    return error.response?.data;
    // throw new Error(error.response?.data?.message || "No best seller found");
  }
};

export const fetchNewArrivals = async () => {
  try {
    const response = await axios.get(
      `${API_CONFIG.baseURL}/products`,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    return error.response?.data;
    // throw new Error(error.response?.data?.message || "No new arrivals found");
  }
};

export const fetchTimelessTechniques = async () => {
  try {
    const response = await axios.get(
      `${API_CONFIG.baseURL}/timeless-techniques`,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    return error.response?.data;
    // throw new Error(error.response?.data?.message || "No new arrivals found");
  }
};

export const submitPopupData = async (data) => {
  try {
    const response = await axios.post(
      `${API_CONFIG.baseURL}/submit-popup-data`,
      data,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    return error.response?.data;
    // throw new Error(error.response?.data?.message || "No new arrivals found");
  }
};

