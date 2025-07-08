import axios from "axios";
import { API_CONFIG_AUTH } from "../utils/api-config";

// 🛒 1️⃣ Verify couponss from Database
export const verifyCoupon = async (data) => {
  try {
    const config = API_CONFIG_AUTH();
    const response = await axios.post(`${config.baseURL}/verify-coupon`,
      data, 
      {headers: config.headers}
    );
    return response.data;
  } catch (error) {
    return error.response?.data;
    // console.error("❌ Error fetching user cart:", error);
    // return [];
  }
};