import { authApi } from "../api/auth.api";

export const authService = {
  login: authApi.login,
  register: authApi.register,
  forgotPassword: authApi.forgotPassword,
  resetPassword: authApi.resetPassword,
  verifyEmail: authApi.verifyEmail,
  logout: authApi.logout,
  refreshToken: authApi.refreshToken,
  getCurrentUser: authApi.getCurrentUser,
  getSession: authApi.getSession,
  getPermissions: authApi.getPermissions,
  getRoles: authApi.getRoles,
};