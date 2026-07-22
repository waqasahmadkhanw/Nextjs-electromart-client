/**
 * ============================================================
 * Auth Storage Utilities
 * ============================================================
 * Browser storage helper functions.
 * Pure storage operations only.
 * No React.
 * No API calls.
 * No business logic.
 * ============================================================
 */

const STORAGE_KEYS = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  USER: "user",
} as const;

/**
 * Save access token.
 */
export const saveAccessToken = (token: string): void => {
  localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
};

/**
 * Get access token.
 */
export const getAccessToken = (): string | null => {
  return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
};

/**
 * Remove access token.
 */
export const removeAccessToken = (): void => {
  localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
};

/**
 * Save refresh token.
 */
export const saveRefreshToken = (token: string): void => {
  localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, token);
};

/**
 * Get refresh token.
 */
export const getRefreshToken = (): string | null => {
  return localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
};

/**
 * Remove refresh token.
 */
export const removeRefreshToken = (): void => {
  localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
};

/**
 * Save authenticated user.
 */
export const saveUser = <T>(user: T): void => {
  localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
};

/**
 * Get authenticated user.
 */
export const getUser = <T>(): T | null => {
  const data = localStorage.getItem(STORAGE_KEYS.USER);

  if (!data) return null;

  try {
    return JSON.parse(data) as T;
  } catch {
    return null;
  }
};

/**
 * Remove authenticated user.
 */
export const removeUser = (): void => {
  localStorage.removeItem(STORAGE_KEYS.USER);
};

/**
 * Clear authentication storage.
 */
export const clearAuthStorage = (): void => {
  removeAccessToken();
  removeRefreshToken();
  removeUser();
};