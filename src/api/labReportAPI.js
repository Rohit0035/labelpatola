// authApi.js
import { API_CONFIG } from "../utils/api-config";
import axios from "axios";

export const fetchLabReports = async () => {
  try {
    const response = await axios.get(
      `${API_CONFIG.baseURL}/lab-reports`,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    return error.response?.data;
    // throw new Error(error.response?.data?.message || "No banner found");
  }
};