import axios, {AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import BASE_URL, {API_CONFIG} from '../config/api';
import {store} from '../redux/store';

/**
 * Centralized Axios instance for future API integration.
 * BaseURL and timeout are pre-configured.
 * No API requests are made here.
 */
const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: API_CONFIG.HEADERS,
});

/**
 * Request Interceptor:
 * Prepared for future authentication token handling.
 * Automatically attaches the Bearer token from the Redux auth state if available.
 */
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    try {
      const state = store.getState();
      const token = state?.auth?.token;
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      // Prepared for safety in case store is not yet accessible
      console.warn('Unable to attach auth token to request:', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

/**
 * Response Interceptor:
 * Prepared for future centralized error handling (e.g. 401 unauthorized handling).
 */
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default apiClient;
