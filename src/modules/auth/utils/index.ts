/**
 * ============================================================
 * Auth Utils Exports
 * ============================================================
 * Central export file for all authentication utilities.
 * ============================================================
 */

// Re-export everything except UserRole to avoid duplication
export * from "./auth.helper";
export * from "./auth.mapper";
export * from "./auth.storage";
export * from "./auth.cookie";
export * from "./auth.token";
export * from "./auth.session";

// Export from auth.permission (skip UserRole, re-exported from redirect)
export {
  hasRole,
  hasAnyRole,
  hasAllRoles,
  hasPermission,
  hasAnyPermission,
  hasAllPermissions,
  canAccess,
} from "./auth.permission";
export type { AuthUser as PermissionAuthUser } from "./auth.permission";

// Export from auth.redirect (skip UserRole which conflicts with auth.permission)
export {
  getLoginRedirect,
  getDashboardRedirect,
  getLogoutRedirect,
  getRegisterRedirect,
  getResetPasswordRedirect,
  getVerifyEmailRedirect,
  getUnauthorizedRedirect,
  getUnauthenticatedRedirect,
} from "./auth.redirect";
export type { RedirectOptions, RedirectOptions as AuthRedirectOptions } from "./auth.redirect";

// Re-export UserRole from auth.redirect only (avoids conflict with auth.permission)
export type { UserRole } from "./auth.redirect";
