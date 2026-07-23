export * from "./auth.service";
export * from "./token.service";
export * from "./session.service";
export * from "./cookie.service";

// Re-export individual API functions for mutation hooks
import {
  registerApi,
  loginApi,
  logoutApi,
  refreshTokenApi,
  forgotPasswordApi,
  resetPasswordApi,
  verifyEmailApi,
  resendVerificationApi,
  changePasswordApi,
  updateProfileApi,
  uploadAvatarApi,
  deleteAccountApi,
  enableTwoFactorApi,
  disableTwoFactorApi,
} from "../api/auth.api";

export const login = loginApi;
export const register = registerApi;
export const logout = logoutApi;
export const refreshToken = refreshTokenApi;
export const forgotPassword = forgotPasswordApi;
export const resetPassword = resetPasswordApi;
export const verifyEmail = verifyEmailApi;
export const resendVerification = resendVerificationApi;
export const changePassword = changePasswordApi;
export const updateProfile = updateProfileApi;
export const uploadAvatar = uploadAvatarApi;
export const deleteAccount = deleteAccountApi;
export const enableTwoFactor = enableTwoFactorApi;
export const disableTwoFactor = disableTwoFactorApi;
