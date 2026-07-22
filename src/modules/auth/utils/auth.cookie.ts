/**
 * ============================================================
 * Auth Cookie Utilities
 * ============================================================
 * Pure cookie helper functions.
 * No React.
 * No API calls.
 * No business logic.
 * ============================================================
 */

export interface CookieOptions {
  expires?: Date | number;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: "Strict" | "Lax" | "None";
}

/**
 * Set a cookie.
 */
export const setCookie = (
  name: string,
  value: string,
  options: CookieOptions = {}
): void => {
  if (typeof document === "undefined") return;

  const {
    expires,
    path = "/",
    domain,
    secure,
    sameSite = "Lax",
  } = options;

  let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  if (expires) {
    const date =
      typeof expires === "number"
        ? new Date(Date.now() + expires * 24 * 60 * 60 * 1000)
        : expires;

    cookie += `; expires=${date.toUTCString()}`;
  }

  cookie += `; path=${path}`;

  if (domain) {
    cookie += `; domain=${domain}`;
  }

  if (secure) {
    cookie += "; secure";
  }

  cookie += `; samesite=${sameSite}`;

  document.cookie = cookie;
};

/**
 * Get a cookie value.
 */
export const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;

  const encodedName = `${encodeURIComponent(name)}=`;

  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const value = cookie.trim();

    if (value.startsWith(encodedName)) {
      return decodeURIComponent(
        value.substring(encodedName.length)
      );
    }
  }

  return null;
};

/**
 * Check if cookie exists.
 */
export const hasCookie = (name: string): boolean => {
  return getCookie(name) !== null;
};

/**
 * Delete a cookie.
 */
export const deleteCookie = (
  name: string,
  path = "/"
): void => {
  if (typeof document === "undefined") return;

  document.cookie = `${encodeURIComponent(
    name
  )}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}`;
};

/**
 * Delete multiple cookies.
 */
export const deleteCookies = (
  names: string[]
): void => {
  names.forEach(deleteCookie);
};