import {
  loginApi,
  registerApi,
  forgotPasswordApi,
  resetPasswordApi,
  verifyEmailApi,
  logoutApi,
  refreshTokenApi,
  currentUserApi,
} from "../api/auth.api";

export const authService = {
  login: loginApi,
  register: registerApi,
  forgotPassword: forgotPasswordApi,
  resetPassword: resetPasswordApi,
  verifyEmail: verifyEmailApi,
  logout: logoutApi,
  refreshToken: refreshTokenApi,
  getCurrentUser: currentUserApi,
  getSession: currentUserApi,
  getPermissions: currentUserApi,
  getRoles: currentUserApi,
};
