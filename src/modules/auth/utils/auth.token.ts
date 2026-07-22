/**
 * ============================================================
 * Auth Token Utilities
 * ============================================================
 * Pure JWT helper functions.
 * No React.
 * No API calls.
 * No business logic.
 * ============================================================
 */

export interface JwtPayload {
  sub?: string;
  id?: string;
  email?: string;
  role?: string;
  exp?: number;
  iat?: number;
  [key: string]: unknown;
}

/**
 * Decodes a JWT without verifying its signature.
 */
export const decodeToken = (
  token: string
): JwtPayload | null => {
  try {
    const payload = token.split(".")[1];

    if (!payload) {
      return null;
    }

    const decoded = atob(
      payload.replace(/-/g, "+").replace(/_/g, "/")
    );

    return JSON.parse(decoded) as JwtPayload;
  } catch {
    return null;
  }
};

/**
 * Returns token expiration timestamp.
 */
export const getTokenExpiry = (
  token: string
): number | null => {
  const payload = decodeToken(token);

  return payload?.exp ?? null;
};

/**
 * Returns token issued-at timestamp.
 */
export const getIssuedAt = (
  token: string
): number | null => {
  const payload = decodeToken(token);

  return payload?.iat ?? null;
};

/**
 * Checks if token is expired.
 */
export const isTokenExpired = (
  token: string
): boolean => {
  const expiry = getTokenExpiry(token);

  if (!expiry) {
    return true;
  }

  return Date.now() >= expiry * 1000;
};

/**
 * Returns seconds remaining before expiration.
 */
export const getRemainingTime = (
  token: string
): number => {
  const expiry = getTokenExpiry(token);

  if (!expiry) {
    return 0;
  }

  return Math.max(0, expiry * 1000 - Date.now());
};

/**
 * Returns true if token will expire soon.
 */
export const willExpireSoon = (
  token: string,
  threshold = 60
): boolean => {
  return getRemainingTime(token) <= threshold * 1000;
};

/**
 * Returns user id from token.
 */
export const getUserIdFromToken = (
  token: string
): string | null => {
  const payload = decodeToken(token);

  return (payload?.id || payload?.sub) as string | null;
};

/**
 * Returns user role from token.
 */
export const getUserRoleFromToken = (
  token: string
): string | null => {
  const payload = decodeToken(token);

  return payload?.role as string | null;
}

/**
 * Returns user email from token.
 */
export const getUserEmailFromToken = (
  token: string
): string | null => {
  const payload = decodeToken(token);

  return payload?.email as string | null;
}