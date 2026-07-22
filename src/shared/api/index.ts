// =========================================
// Axios
// =========================================
export { default as axiosInstance } from "./axios";

// =========================================
// API Client
// =========================================
export { default as apiClient } from "./client";

// =========================================
// Endpoints
// =========================================
export { API_ENDPOINTS } from "./endpoints";

// =========================================
// Request Helpers
// =========================================
export {
  request,
  get,
  post,
  put,
  patch,
  remove,
} from "./request";

// =========================================
// Response Helpers
// =========================================
export {
  handleSuccess,
  handleError,
  isSuccess,
  getMessage,
} from "./response";

// =========================================
// Authentication
// =========================================
export { default as authApi } from "./auth";

// =========================================
// File Upload
// =========================================
export { default as uploadApi } from "./upload";

// =========================================
// Refresh Token
// =========================================
export {
  refreshAccessToken,
  getRefreshToken,
} from "./refreshToken";

// =========================================
// Interceptors
// =========================================
export {
  setupInterceptors,
} from "./interceptor";

// =========================================
// Cancel Request Manager
// =========================================
export {
  default as cancelRequestManager,
} from "./cancelToken";

// =========================================
// API Error
// =========================================
export {
  ApiError,
} from "./apiError";

// =========================================
// API Success
// =========================================
export {
  createSuccess,
  createPaginatedSuccess,
  getResponseData,
  getResponseMessage,
  isApiSuccess,
} from "./apiSuccess";

// =========================================
// Types
// =========================================
export type {
  ApiResponse,
  ApiErrorResponse,
} from "./response";

export type {
  ApiSuccess,
  PaginatedApiSuccess,
  PaginationMeta,
} from "./apiSuccess";

export type {
  LoginPayload,
  RegisterPayload,
  ForgotPasswordPayload,
  ResetPasswordPayload,
  ChangePasswordPayload,
  AuthResponse,
} from "./auth";

export type {
  UploadResponse,
} from "./upload";