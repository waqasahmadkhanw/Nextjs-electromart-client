import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

import { getAuthToken } from "@/shared/helpers/auth";
import { env } from "@/shared/config/env";

/**
 * Register request & response interceptors
 */
export const setupInterceptors = (
  axiosInstance: AxiosInstance
): AxiosInstance => {
  /**
   * Request Interceptor
   */
  axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getAuthToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      config.headers.Accept = "application/json";
      config.headers["Content-Type"] = "application/json";

      if (env.NODE_ENV === "development") {
        console.log(
          `[API Request] ${config.method?.toUpperCase()} ${config.url}`
        );
      }

      return config;
    },
    (error: AxiosError) => Promise.reject(error)
  );

  /**
   * Response Interceptor
   */
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      if (env.NODE_ENV === "development") {
        console.log(
          `[API Response] ${response.status} ${response.config.url}`
        );
      }

      return response;
    },

    async (error: AxiosError) => {
      const status = error.response?.status;

      switch (status) {
        case 400:
          console.error("Bad Request");
          break;

        case 401:
          console.error("Unauthorized");
          // Refresh token logic will be added later.
          break;

        case 403:
          console.error("Forbidden");
          break;

        case 404:
          console.error("Resource Not Found");
          break;

        case 422:
          console.error("Validation Error");
          break;

        case 500:
          console.error("Internal Server Error");
          break;

        default:
          console.error(error.message);
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default setupInterceptors;