// src/utils/axiosInstance.js
import axios from "axios";
import { showLoader, hideLoader } from "../actions/loaderActions"; // Adjust path if necessary
import store from "../store"; // Adjust path if necessary, ensure your store is exported

// Your API base URL from the provided config
const API_BASE_URL = "http://127.0.0.1:8000/api/v2";
// const API_BASE_URL = "https://admissions-direct.in/graceofcows-backend/api/v2"; // Uncomment if using production URL

// Create a new Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // From your API_CONFIG
  headers: {
    "Content-Type": "application/json" // From your API_CONFIG
  }
});

// Request interceptor: Show loader before any request is sent
api.interceptors.request.use(
  config => {
    store.dispatch(showLoader());
    return config;
  },
  error => {
    store.dispatch(hideLoader()); // Hide loader if request fails
    return Promise.reject(error);
  }
);

// Response interceptor: Hide loader after any response (success or error)
api.interceptors.response.use(
  response => {
    store.dispatch(hideLoader()); // Hide loader after successful response
    return response;
  },
  error => {
    store.dispatch(hideLoader()); // Hide loader after error response
    return Promise.reject(error);
  }
);

export default api;
