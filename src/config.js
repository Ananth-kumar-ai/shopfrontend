export const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://shopbackend-1dp2.onrender.com' 
  : 'http://localhost:8000';

// Add a trailing slash if not present
export const getApiUrl = () => {
  return API_BASE_URL.endsWith('/') ? API_BASE_URL : $`{API_BASE_URL}/`;
};