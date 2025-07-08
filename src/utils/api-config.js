const API_BASE_URL = "http://127.0.0.1:8000/api/v2";
export const IMAGE_URL = "http://localhost:8000/storage";

// const API_BASE_URL = "https://admissions-direct.in/graceofcows-backend/api/v2";
// export const IMAGE_URL = "https://admissions-direct.in/graceofcows-backend/storage";

const getToken = ()=>{
  return localStorage.getItem("token")?.replace(/^"(.*)"$/, "$1");
}

export const API_CONFIG = {
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
};

export const API_CONFIG_AUTH =()=> ({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`
  }
});

export const API_MULTIPART_CONFIG = {
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "multipart/form-data"
  }
};


