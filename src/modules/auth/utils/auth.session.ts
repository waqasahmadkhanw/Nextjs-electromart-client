/**
 * ============================================================
 * Auth Session Utilities
 * ============================================================
 * Pure session helper functions.
 * No React.
 * No API calls.
 * No Redux.
 * No React Query.
 * ============================================================
 */

import {
  getAccessToken,
  getRefreshToken,
  clearAuthStorage,
} from "./auth.storage";
import {
  isTokenExpired,
  willExpireSoon,
} from "./auth.token";

/**
 * Returns true if an access token exists.
 */
export const hasSession = (): boolean => {
  return Boolean(getAccessToken());
};

/**
 * Returns true if the user is authenticated.
 */
export const isAuthenticated = (): boolean => {
  const accessToken = getAccessToken();

  if (!accessToken) {
    return false;
  }

  return !isTokenExpired(accessToken);
};

/**
 * Returns true if the session has expired.
 */
export const isSessionExpired = (): boolean => {
  const accessToken = getAccessToken();

  if (!accessToken) {
    return true;
  }

  return isTokenExpired(accessToken);
};

/**
 * Returns true if the access token should be refreshed.
 */
export const shouldRefreshSession = (
  thresholdInSeconds = 60
): boolean => {
  const accessToken = getAccessToken();

  if (!accessToken) {
    return false;
  }

  return willExpireSoon(accessToken, thresholdInSeconds);
};

/**
 * Returns true if a refresh token exists.
 */
export const hasRefreshToken = (): boolean => {
  return Boolean(getRefreshToken());
};

/**
 * Clears the current authentication session.
 */
export const clearSession = (): void => {
  clearAuthStorage();
};

/**
 * Returns current session information.
 */
export const getSession = () => {
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();

  return {
    accessToken,
    refreshToken,
    authenticated:
      accessToken !== null &&
      !isTokenExpired(accessToken),
    hasRefreshToken: refreshToken !== null,
  };
};