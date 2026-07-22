/**
 * -------------------------------------------------------
 * File: shared/api/headers.ts
 * Description:
 * Centralized HTTP header utilities.
 * Used throughout the application to create
 * consistent request headers.
 * -------------------------------------------------------
 */

import type { AxiosRequestHeaders } from "axios";

/**
 * Default JSON Headers
 */
export const DEFAULT_HEADERS: AxiosRequestHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

/**
 * Returns Authorization Header
 */
export const getAuthorizationHeader = (
  token?: string | null
): AxiosRequestHeaders => {
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
): AxiosRequestHeaders => ({
  ...DEFAULT_HEADERS,
  ...getAuthorizationHeader(token),
});

/**
 * Returns Multipart/FormData Headers
 */
export const getMultipartHeaders = (
  token?: string | null
): AxiosRequestHeaders => ({
  Accept: "application/json",
  "Content-Type": "multipart/form-data",
  ...getAuthorizationHeader(token),
});

/**
 * Returns File Download Headers
 */
export const getDownloadHeaders = (
  token?: string | null
): AxiosRequestHeaders => ({
  Accept: "*/*",
  ...getAuthorizationHeader(token),
});

/**
 * Merge Multiple Header Objects
 */
export const mergeHeaders = (
  ...headers: AxiosRequestHeaders[]
): AxiosRequestHeaders => ({
  ...Object.assign({}, ...headers),
});