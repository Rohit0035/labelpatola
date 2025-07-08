import { API_CONFIG, API_MULTIPART_CONFIG } from './api-config';

const fetchWithAuth = async (url, method = 'GET', data = null, contentType = 'json') => {
  let config;
  if (contentType === 'json') {
    config = API_CONFIG;
  } else if (contentType === 'multipart') {
    config = API_MULTIPART_CONFIG;
  } else {
    throw new Error('Unsupported content type');
  }

  // Remove Content-Type for multipart to let browser set it correctly with boundary
  const headers = {
    ...config.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`
  };

  if (contentType === 'multipart') {
    delete headers['Content-Type']; // Remove Content-Type header for FormData
  }

  const requestOptions = {
    method,
    headers
  };

  if (data) {
    if (contentType === 'json') {
      requestOptions.body = JSON.stringify(data);
    } else if (contentType === 'multipart') {
      requestOptions.body = data; // Directly assign the FormData object
    }
  }

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
};

export default fetchWithAuth;
