import { apiClient } from "@/shared/api";
import { AUTH_ENDPOINTS } from "./auth.endpoints";
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ForgotPasswordResponse,
  ResetPasswordResponse,
  VerifyEmailResponse,
  RefreshTokenResponse,
} from "../types";

export const loginApi = (data: LoginRequest) =>
  apiClient.post<LoginResponse>(AUTH_ENDPOINTS.LOGIN, data);

export const registerApi = (data: RegisterRequest) =>
  apiClient.post<RegisterResponse>(AUTH_ENDPOINTS.REGISTER, data);

export const logoutApi = () =>
  apiClient.post(AUTH_ENDPOINTS.LOGOUT);

export const currentUserApi = () =>
  apiClient.get(AUTH_ENDPOINTS.ME);

export const refreshTokenApi = () =>
  apiClient.post<RefreshTokenResponse>(AUTH_ENDPOINTS.REFRESH_TOKEN);

export const forgotPasswordApi = (data: unknown) =>
  apiClient.post<ForgotPasswordResponse>(AUTH_ENDPOINTS.FORGOT_PASSWORD, data);

export const resetPasswordApi = (data: unknown) =>
  apiClient.post<ResetPasswordResponse>(AUTH_ENDPOINTS.RESET_PASSWORD, data);

export const verifyEmailApi = (data: unknown) =>
  apiClient.post<VerifyEmailResponse>(AUTH_ENDPOINTS.VERIFY_EMAIL, data);

export const resendVerificationApi = () =>
  apiClient.post(AUTH_ENDPOINTS.RESEND_VERIFICATION);

export const changePasswordApi = (data: unknown) =>
  apiClient.post(AUTH_ENDPOINTS.CHANGE_PASSWORD, data);

export const updateProfileApi = (data: unknown) =>
  apiClient.put(AUTH_ENDPOINTS.ME, data);

export const uploadAvatarApi = (data: unknown) =>
  apiClient.post(AUTH_ENDPOINTS.ME + "/avatar", data);

export const deleteAccountApi = (data: unknown) =>
  apiClient.post("/auth/delete-account", data);

export const enableTwoFactorApi = (data: unknown) =>
  apiClient.post("/auth/2fa/enable", data);

export const disableTwoFactorApi = (data: unknown) =>
  apiClient.post("/auth/2fa/disable", data);
