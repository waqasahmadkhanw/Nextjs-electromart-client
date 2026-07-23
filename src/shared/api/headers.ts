/**
 * -------------------------------------------------------
 * File: shared/api/headers.ts
 * Description:
 * Centralized HTTP header utilities.
 * Used throughout the application to create
 * consistent request headers.
 * -------------------------------------------------------
 */

type HeaderRecord = Record<string, string>;

/**
 * Default JSON Headers
 */
export const DEFAULT_HEADERS: Record<string, string> = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

/**
 * Returns Authorization Header
 */
export const getAuthorizationHeader = (
  token?: string | null
): Record<string, string> => {
  if (!token) {
    return {};
  }

  return {
    Authorization: `Bearer ${token}`,
  };
};

/**
 * Returns JSON Headers
 */
export const getJsonHeaders = (
  token?: string | null
): Record<string, string> => ({
  "Content-Type": "application/json",
  Accept: "application/json",
  ...getAuthorizationHeader(token),
});

/**
 * Returns Multipart/FormData Headers
 */
export const getMultipartHeaders = (
  token?: string | null
): Record<string, string> => ({
  Accept: "application/json",
  "Content-Type": "multipart/form-data",
  ...getAuthorizationHeader(token),
});

/**
 * Returns File Download Headers
 */
export const getDownloadHeaders = (
  token?: string | null
): Record<string, string> => ({
  Accept: "*/*",
  ...getAuthorizationHeader(token),
});

/**
 * Merge Multiple Header Objects
 */
export const mergeHeaders = (
  ...headers: Record<string, string>[]
): Record<string, string> => ({
  ...Object.assign({}, ...headers),
});
