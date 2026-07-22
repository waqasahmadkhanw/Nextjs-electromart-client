import {
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

import axiosInstance from "./axios";

/**
 * Generic API Request
 */
export async function request<T>(
  config: AxiosRequestConfig
): Promise<T> {
  const response: AxiosResponse<T> =
    await axiosInstance.request<T>(config);

  return response.data;
}

/**
 * GET
 */
export function get<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> {
  return request<T>({
    url,
    method: "GET",
    ...config,
  });
}

/**
 * POST
 */
export function post<T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> {
  return request<T>({
    url,
    method: "POST",
    data,
    ...config,
  });
}

/**
 * PUT
 */
export function put<T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> {
  return request<T>({
    url,
    method: "PUT",
    data,
    ...config,
  });
}

/**
 * PATCH
 */
export function patch<T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> {
  return request<T>({
    url,
    method: "PATCH",
    data,
    ...config,
  });
}

/**
 * DELETE
 */
export function remove<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> {
  return request<T>({
    url,
    method: "DELETE",
    ...config,
  });
}