/**
 * ============================================================
 * Auth Redirect Utilities
 * ============================================================
 * Pure redirect helper functions.
 * No React.
 * No Next.js Router.
 * No API calls.
 * No side effects.
 * ============================================================
 */

export type UserRole =
  | "super-admin"
  | "admin"
  | "manager"
  | "staff"
  | "user"
  | string;

export interface RedirectOptions {
  callbackUrl?: string;
  defaultPath?: string;
}

/**
 * Returns login redirect path.
 */
export const getLoginRedirect = (
  options: RedirectOptions = {}
): string => {
  const {
    callbackUrl,
    defaultPath = "/dashboard",
  } = options;

  return callbackUrl || defaultPath;
};

/**
 * Returns dashboard path based on user role.
 */
export const getDashboardRedirect = (
  role?: UserRole
): string => {
  switch (role) {
    case "super-admin":
      return "/dashboard/super-admin";

    case "admin":
      return "/dashboard/admin";

    case "manager":
      return "/dashboard/manager";

    case "staff":
      return "/dashboard/staff";

    case "user":
    default:
      return "/dashboard";
  }
}

/**
 * Returns logout redirect path.
 */
export const getLogoutRedirect = (): string => {
  return "/login";
};

/**
 * Returns redirect path after registration.
 */
export const getRegisterRedirect = (
  emailVerificationRequired = true
): string => {
  return emailVerificationRequired
    ? "/verify-email"
    : "/login";
};

/**
 * Returns redirect path after password reset.
 */
export const getResetPasswordRedirect = (): string => {
  return "/login";
};

/**
 * Returns redirect path after email verification.
 */
export const getVerifyEmailRedirect = (): string => {
  return "/login";
};

/**
 * Returns redirect path for unauthorized users.
 */
export const getUnauthorizedRedirect = (): string => {
  return "/403";
};

/**
 * Returns redirect path for unauthenticated users.
 */
export const getUnauthenticatedRedirect = (
  callbackUrl?: string
): string => {
  if (!callbackUrl) {
    return "/login";
  }

  return `/login?callbackUrl=${encodeURIComponent(
    callbackUrl
  )}`;
}

