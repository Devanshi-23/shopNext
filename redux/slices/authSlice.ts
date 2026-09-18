import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  pendingEmail: string | null;
  resetToken: string | null;
  isLoading: boolean;
  error: string | null;
  otpVerified: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  pendingEmail: null,
  resetToken: null,
  isLoading: false,
  error: null,
  otpVerified: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearError: (state) => {
      state.error = null;
    },
    setPendingEmail: (state, action: PayloadAction<string>) => {
      state.pendingEmail = action.payload;
    },
    loginSuccess: (
      state,
      action: PayloadAction<{user: User; token: string}>,
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
    },
    signUpSuccess: (state, action: PayloadAction<{email: string}>) => {
      state.pendingEmail = action.payload.email;
      state.isLoading = false;
      state.error = null;
      state.otpVerified = false;
    },
    otpVerifiedSuccess: (
      state,
      action: PayloadAction<{resetToken?: string}>,
    ) => {
      state.otpVerified = true;
      state.resetToken = action.payload?.resetToken || null;
      state.isLoading = false;
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.pendingEmail = null;
      state.resetToken = null;
      state.isLoading = false;
      state.error = null;
      state.otpVerified = false;
    },
  },
});

export const {
  setLoading,
  setError,
  clearError,
  setPendingEmail,
  loginSuccess,
  signUpSuccess,
  otpVerifiedSuccess,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
