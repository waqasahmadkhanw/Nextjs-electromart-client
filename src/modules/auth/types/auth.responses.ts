// ============================================
// Base API Response
// ============================================

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data: T;
}

// ============================================
// Authentication Response
// ============================================

export interface AuthResponse<T = unknown> extends ApiResponse<T> {
  timestamp?: string;
}

// ============================================
// Login Response
// ============================================

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    avatar?: string;
    isVerified: boolean;
  };
}

// ============================================
// Register Response
// ============================================

export interface RegisterResponse {
  message: string;
}

// ============================================
// Refresh Token Response
// ============================================

export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

// ============================================
// Logout Response
// ============================================

export interface LogoutResponse {
  message: string;
}

// ============================================
// Verify Email Response
// ============================================

export interface VerifyEmailResponse {
  message: string;
}

// ============================================
// Forgot Password Response
// ============================================

export interface ForgotPasswordResponse {
  message: string;
}

// ============================================
// Reset Password Response
// ============================================

export interface ResetPasswordResponse {
  message: string;
}