export const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://shopbackend-1dp2.onrender.com'
  : 'http://localhost:8000';

// Return a base API origin (always ends with a slash). Do NOT include the
// `/api/` path here so callers can continue using `/api/...` in requests.
export const getApiUrl = () => {
  return API_BASE_URL.endsWith('/') ? API_BASE_URL : `${API_BASE_URL}/`;
};