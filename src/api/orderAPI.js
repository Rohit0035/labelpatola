import axios from "axios";
import { API_CONFIG_AUTH } from "../utils/api-config";

// 🛒 1️⃣ Fetch User Cart from Database
export const placeOrder = async () => {
  try {
    const config = API_CONFIG_AUTH();
    const response = await axios.post(`${config.baseURL}/place-order`, 
      {},
      {headers: config.headers}
    );
    return response.data;
  } catch (error) {
    return error.response?.data;
    // console.error("❌ Error fetching user cart:", error);
    // return [];
  }
};