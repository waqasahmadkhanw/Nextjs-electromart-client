/**
 * Authentication Store Types
 */

export type AuthStatus =
  | "idle"
  | "loading"
  | "authenticated"
  | "unauthenticated";

export interface AuthState {
  /**
   * Authentication status
   */
  isAuthenticated: boolean;

  /**
   * JWT Access Token
   */
  accessToken: string | null;

  /**
   * JWT Refresh Token
   */
  refreshToken: string | null;

  /**
   * Logged-in user id
   */
  userId: string | null;

  /**
   * User roles
   * Example: ["admin", "user"]
   */
  roles: string[];

  /**
   * User permissions
   * Example: ["users.read", "users.create"]
   */
  permissions: string[];

  /**
   * Current authentication state
   */
  status: AuthStatus;

  /**
   * Authentication error message
   */
  error: string | null;
}

export interface LoginPayload {
  accessToken: string;
  refreshToken?: string | null;
  userId: string;
  roles?: string[];
  permissions?: string[];
}

export interface UpdateAccessTokenPayload {
  accessToken: string;
}

export interface UpdateRolesPayload {
  roles: string[];
}

export interface UpdatePermissionsPayload {
  permissions: string[];
}