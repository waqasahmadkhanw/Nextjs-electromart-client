// ============================================
// Auth Status
// ============================================

export type AuthStatus =
  | "idle"
  | "loading"
  | "authenticated"
  | "unauthenticated"
  | "error";

// ============================================
// Authentication Provider
// ============================================

export type AuthProvider =
  | "credentials"
  | "google"
  | "github"
  | "facebook"
  | "apple";

// ============================================
// User Role
// ============================================

export type UserRole = string;

// ============================================
// User
// ============================================

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: UserRole;
  isVerified: boolean;
  createdAt?: string;
  updatedAt?: string;
}

// ============================================
// Authentication State
// ============================================

export interface AuthState {
  user: AuthUser | null;
  accessToken: string | null;
  refreshToken: string | null;
  status: AuthStatus;
  isAuthenticated: boolean;
}

// ============================================
// Session
// ============================================

export interface AuthSession {
  user: AuthUser;
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

// ============================================
// Auth Context
// ============================================

export interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  login: () => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
}