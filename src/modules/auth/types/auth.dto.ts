// ============================================
// Login
// ============================================

export interface LoginRequestDto {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginResponseDto {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

// ============================================
// Register
// ============================================

export interface RegisterRequestDto {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterResponseDto {
  message: string;
}

// ============================================
// Forgot Password
// ============================================

export interface ForgotPasswordRequestDto {
  email: string;
}

export interface ForgotPasswordResponseDto {
  message: string;
}

// ============================================
// Reset Password
// ============================================

export interface ResetPasswordRequestDto {
  token: string;
  password: string;
  confirmPassword: string;
}

export interface ResetPasswordResponseDto {
  message: string;
}

// ============================================
// Verify Email
// ============================================

export interface VerifyEmailRequestDto {
  token: string;
}

export interface VerifyEmailResponseDto {
  message: string;
}

// ============================================
// Refresh Token
// ============================================

export interface RefreshTokenRequestDto {
  refreshToken: string;
}

export interface RefreshTokenResponseDto {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

// ============================================
// Logout
// ============================================

export interface LogoutRequestDto {
  refreshToken: string;
}

export interface LogoutResponseDto {
  message: string;
}