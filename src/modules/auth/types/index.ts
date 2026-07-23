// Individual file exports - skip auth.dto (we re-export with aliases below)
export * from "./auth.tokens";
export * from "./auth.session";
export * from "./auth.permissions";
export * from "./auth.errors";
export * from "./auth.forms";
export * from "./auth.user";
export * from "./auth.operation";

// Re-export responses selectively to avoid name conflicts with DTO aliases
export type {
  ApiResponse,
  AuthResponse,
  LoginResponse as AuthLoginResponse,
  RegisterResponse as AuthRegisterResponse,
  RefreshTokenResponse as AuthRefreshTokenResponse,
  LogoutResponse as AuthLogoutResponse,
  VerifyEmailResponse as AuthVerifyEmailResponse,
  ForgotPasswordResponse as AuthForgotPasswordResponse,
  ResetPasswordResponse as AuthResetPasswordResponse,
} from "./auth.responses";

// Explicit re-exports to avoid conflicts with enums/types that share names
export type {
  AuthStatus as AuthStatusEnum,
  AuthProvider as AuthProviderEnum,
  UserRole as UserRoleType,
} from "./auth.types";

// Re-export type-only interfaces from auth.types
export type { AuthContextValue, AuthState, AuthUser as AuthUserType, AuthSession as AuthSessionType } from "./auth.types";

// Re-export enums from auth.enums (takes precedence over auth.types type aliases)
export { AuthStatus, AuthProvider, UserRole, TokenType, AuthAction, AuthStorageKey } from "./auth.enums";

// ============================================
// Alias DTO types without "Dto" suffix for compatibility
// ============================================
export type {
  LoginRequestDto as LoginRequest,
  LoginResponseDto as LoginResponse,
  RegisterRequestDto as RegisterRequest,
  RegisterResponseDto as RegisterResponse,
  ForgotPasswordRequestDto as ForgotPasswordRequest,
  ForgotPasswordResponseDto as ForgotPasswordResponse,
  ResetPasswordRequestDto as ResetPasswordRequest,
  ResetPasswordResponseDto as ResetPasswordResponse,
  VerifyEmailRequestDto as VerifyEmailRequest,
  VerifyEmailResponseDto as VerifyEmailResponse,
  RefreshTokenRequestDto as RefreshTokenRequest,
  RefreshTokenResponseDto as RefreshTokenResponse,
  LogoutRequestDto as LogoutRequest,
  LogoutResponseDto as LogoutResponse,
} from "./auth.dto";

// Additional type aliases for form/hook compatibility
export type { ChangePasswordRequest } from "./auth.forms";
export type { UpdateProfileRequest } from "./auth.forms";

// ============================================
// Missing response types for mutation hooks
// (These are also re-exported from auth.operation for wider compatibility)
// ============================================

// User type for helper utilities (compatible with AuthUser)
export interface User {
  id: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  email: string;
  avatar?: string;
  role: string;
  isActive?: boolean;
  isEmailVerified?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
