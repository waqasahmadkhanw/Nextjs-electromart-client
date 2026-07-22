import apiClient from "@/shared/api/api-client";
import { AUTH_ENDPOINTS } from "./auth.endpoints";
import {
  LoginRequest,
  LoginResponse,
} from "./auth.types";

export const loginApi = (data: LoginRequest) =>
  apiClient.post<LoginResponse>(AUTH_ENDPOINTS.LOGIN, data);

export const registerApi = (data: RegisterRequest) =>
  apiClient.post(AUTH_ENDPOINTS.REGISTER, data);

export const logoutApi = () =>
  apiClient.post(AUTH_ENDPOINTS.LOGOUT);

export const currentUserApi = () =>
  apiClient.get(AUTH_ENDPOINTS.ME);

export const refreshTokenApi = () =>
  apiClient.post(AUTH_ENDPOINTS.REFRESH_TOKEN);

export const forgotPasswordApi = (data: unknown) =>
  apiClient.post(AUTH_ENDPOINTS.FORGOT_PASSWORD, data);

export const resetPasswordApi = (data: unknown) =>
  apiClient.post(AUTH_ENDPOINTS.RESET_PASSWORD, data);

export const verifyEmailApi = (data: unknown) =>
  apiClient.post(AUTH_ENDPOINTS.VERIFY_EMAIL, data);

export const resendVerificationApi = () =>
  apiClient.post(AUTH_ENDPOINTS.RESEND_VERIFICATION);

export const changePasswordApi = (data: unknown) =>
  apiClient.post(AUTH_ENDPOINTS.CHANGE_PASSWORD, data);