import axios from 'axios';
import {Platform, ToastAndroid, Alert} from 'react-native';
import {store} from '../redux/store';

export const BASE_URL = 'https://shopnest-backend-api-1.onrender.com';

export const showToast = (message: string) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else {
    Alert.alert('', message);
  }
};

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

api.interceptors.request.use((config) => {
  try {
    const token = store.getState()?.auth?.token;
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    // ignore
  }
  return config;
});

export const ROUTES = {
  REGISTER: '/api/register',
  SEND_OTP: '/api/send-otp',
  VERIFY_OTP: '/api/verify-otp',
  LOGIN: '/api/login',
  FORGOT_PASSWORD: '/api/forgot-password',
};

export const registerUser = async (data: {email: string; password: string}) => {
  const response = await api.post(ROUTES.REGISTER, data);
  return response.data;
};

export const sendOTP = async (data: {email: string}) => {
  const response = await api.post(ROUTES.SEND_OTP, data);
  return response.data;
};

export const verifyOTP = async (data: {email: string; otp: string}) => {
  const response = await api.post(ROUTES.VERIFY_OTP, data);
  return response.data;
};

export const loginUser = async (data: {email: string; password: string}) => {
  const response = await api.post(ROUTES.LOGIN, data);
  return response.data;
};

export default api;
