// ============================================
// Authentication Status
// ============================================

export enum AuthStatus {
  IDLE = "idle",
  LOADING = "loading",
  AUTHENTICATED = "authenticated",
  UNAUTHENTICATED = "unauthenticated",
  ERROR = "error",
}

// ============================================
// Authentication Provider
// ============================================

export enum AuthProvider {
  CREDENTIALS = "credentials",
  GOOGLE = "google",
  GITHUB = "github",
  FACEBOOK = "facebook",
  APPLE = "apple",
}

// ============================================
// Token Type
// ============================================

export enum TokenType {
  ACCESS = "access",
  REFRESH = "refresh",
}

// ============================================
// User Role
// ============================================

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

// ============================================
// Authentication Action
// ============================================

export enum AuthAction {
  LOGIN = "login",
  REGISTER = "register",
  LOGOUT = "logout",
  REFRESH_TOKEN = "refresh-token",
  VERIFY_EMAIL = "verify-email",
  FORGOT_PASSWORD = "forgot-password",
  RESET_PASSWORD = "reset-password",
}

// ============================================
// Session Storage Keys
// ============================================

export enum AuthStorageKey {
  ACCESS_TOKEN = "access_token",
  REFRESH_TOKEN = "refresh_token",
  USER = "user",
}