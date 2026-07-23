// Auth Module - Public API
// Types - re-export (skip conflicting names with services/store)
export type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
  VerifyEmailRequest,
  VerifyEmailResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  LogoutRequest,
  LogoutResponse,
} from "./types";

export type {
  AuthUser,
  AuthSession,
  AuthContextValue,
  AuthState,
  SessionUser,
  SessionMetadata,
  ActiveSession,
  SessionConfig,
  SessionState,
  UserProfile,
  UserPreferences,
  UserAddress,
  UserContact,
  UserAvatar,
  PublicUser,
} from "./types";

export type {
  LoginFormValues,
  RegisterFormValues,
  ForgotPasswordFormValues,
  ResetPasswordFormValues,
  VerifyEmailFormValues,
  ChangePasswordFormValues,
  UpdateProfileFormValues,
  ResendVerificationEmailFormValues,
} from "./types";

export type {
  AuthStatus as AuthStatusType,
  AuthProvider as AuthProviderType,
  UserRole as UserRoleType,
} from "./types";

// Missing types for mutations
export type {
  ChangePasswordRequest,
  ChangePasswordResponse,
  DeleteAccountRequest,
  DeleteAccountResponse,
  DisableTwoFactorRequest,
  DisableTwoFactorResponse,
  EnableTwoFactorRequest,
  EnableTwoFactorResponse,
  ResendVerificationRequest,
  ResendVerificationResponse,
  UpdateProfileRequest,
  UpdateProfileResponse,
  UploadAvatarRequest,
  UploadAvatarResponse,
} from "./types";

export {
  AuthStatus,
  AuthProvider,
  UserRole,
  TokenType,
  AuthAction,
  AuthStorageKey,
} from "./types";

// Services
export * from "./services";

// Store - selectively re-export to avoid conflicts
export { authReducer, persistedAuthReducer } from "./store";
export type { AuthState as StoreAuthState, AuthStatus as StoreAuthStatus } from "./store";
export {
  loginStart,
  loginSuccess,
  loginFailure,
  updateAccessToken,
  updatePermissions,
  updateRoles,
  clearError,
  logout,
} from "./store";
export {
  selectAuth,
  selectIsAuthenticated,
  selectAccessToken,
  selectRefreshToken,
  selectUserId,
  selectRoles,
  selectPermissions,
  selectAuthStatus,
  selectAuthError,
  selectHasRole,
  selectHasPermission,
} from "./store";

// Hooks
export * from "./hooks";

// Components
export * from "./components";

// Pages
export * from "./pages";

// Mutations
export * from "./mutations";

// Queries
export * from "./queries";

// Utils
export * from "./utils";

// Validation
export * from "./validation";

