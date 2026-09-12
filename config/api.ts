/**
 * Centralized API Configuration
 *
 * Keep the backend URL in this single location for the entire project.
 */

const BASE_URL = 'https://shopnest-backend-api-1.onrender.com';

export const API_CONFIG = {
  BASE_URL,
  TIMEOUT: 15000,
  HEADERS: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

export default BASE_URL;
