import apiClient from "./client";
import { API_ENDPOINTS } from "./endpoints";

/**
 * ============================
 * Types
 * ============================
 */

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface ResetPasswordPayload {
  token: string;
  password: string;
  confirmPassword: string;
}

export interface ChangePasswordPayload {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface AuthResponse {
  user: unknown;
  accessToken: string;
  refreshToken: string;
}

/**
 * ============================
 * Authentication API
 * ============================
 */

export const authApi = {
  /**
   * Login
   */
  login(data: LoginPayload) {
    return apiClient.post<AuthResponse>(
      API_ENDPOINTS.AUTH.LOGIN,
      data
    );
  },

  /**
   * Register
   */
  register(data: RegisterPayload) {
    return apiClient.post<AuthResponse>(
      API_ENDPOINTS.AUTH.REGISTER,
      data
    );
  },

  /**
   * Logout
   */
  logout() {
    return apiClient.post<void>(
      API_ENDPOINTS.AUTH.LOGOUT
    );
  },

  /**
   * Get Current User
   */
  getProfile() {
    return apiClient.get(
      API_ENDPOINTS.AUTH.PROFILE
    );
  },

  /**
   * Forgot Password
   */
  forgotPassword(data: ForgotPasswordPayload) {
    return apiClient.post(
      API_ENDPOINTS.AUTH.FORGOT_PASSWORD,
      data
    );
  },

  /**
   * Reset Password
   */
  resetPassword(data: ResetPasswordPayload) {
    return apiClient.post(
      API_ENDPOINTS.AUTH.RESET_PASSWORD,
      data
    );
  },

  /**
   * Change Password
   */
  changePassword(data: ChangePasswordPayload) {
    return apiClient.post(
      API_ENDPOINTS.AUTH.CHANGE_PASSWORD,
      data
    );
  },

  /**
   * Refresh Token
   */
  refreshToken() {
    return apiClient.post<AuthResponse>(
      API_ENDPOINTS.AUTH.REFRESH_TOKEN
    );
  },
};

export default authApi;