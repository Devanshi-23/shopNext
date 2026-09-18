import apiClient from './apiClient';
import {ENDPOINTS} from '../config/api';

export interface RegisterUserData {
  email: string;
  password: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  user?: {
    id: string;
    email: string;
    name?: string;
  };
  data?: any;
  errors?: Array<{
    field?: string;
    message: string;
  }>;
}

/**
 * Service function to register a new user using the backend API.
 * Endpoint: POST /api/register
 */
export const registerUser = async (
  userData: RegisterUserData,
): Promise<RegisterResponse> => {
  const response = await apiClient.post<RegisterResponse>(
    ENDPOINTS.AUTH.REGISTER,
    userData,
  );
  return response.data;
};

export interface SendOTPData {
  email: string;
}

export interface SendOTPResponse {
  success: boolean;
  message: string;
  expiresInMinutes?: number;
  data?: any;
}

export interface VerifyOTPData {
  email: string;
  otp: string;
}

export interface VerifyOTPResponse {
  success: boolean;
  message: string;
  resetToken?: string;
  data?: any;
}

/**
 * Service function to send OTP to user's email.
 * Endpoint: POST /api/send-otp
 */
export const sendOTP = async (
  data: SendOTPData,
): Promise<SendOTPResponse> => {
  const response = await apiClient.post<SendOTPResponse>(
    ENDPOINTS.AUTH.SEND_OTP,
    data,
  );
  return response.data;
};

/**
 * Service function to verify OTP and receive resetToken.
 * Endpoint: POST /api/verify-otp
 */
export const verifyOTP = async (
  data: VerifyOTPData,
): Promise<VerifyOTPResponse> => {
  const response = await apiClient.post<VerifyOTPResponse>(
    ENDPOINTS.AUTH.VERIFY_OTP,
    data,
  );
  return response.data;
};
