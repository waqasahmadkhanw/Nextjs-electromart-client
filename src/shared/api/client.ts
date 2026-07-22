import {
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

import axiosInstance from "./axios";
import { handleError, handleSuccess } from "./response";

/**
 * Generic API Client
 */
class ApiClient {
  /**
   * GET
   */
  async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response: AxiosResponse = await axiosInstance.get(
        url,
        config
      );

      return handleSuccess<T>(response);
    } catch (error) {
      return handleError(error);
    }
  }

  /**
   * POST
   */
  async post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response: AxiosResponse = await axiosInstance.post(
        url,
        data,
        config
      );

      return handleSuccess<T>(response);
    } catch (error) {
      return handleError(error);
    }
  }

  /**
   * PUT
   */
  async put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response: AxiosResponse = await axiosInstance.put(
        url,
        data,
        config
      );

      return handleSuccess<T>(response);
    } catch (error) {
      return handleError(error);
    }
  }

  /**
   * PATCH
   */
  async patch<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response: AxiosResponse = await axiosInstance.patch(
        url,
        data,
        config
      );

      return handleSuccess<T>(response);
    } catch (error) {
      return handleError(error);
    }
  }

  /**
   * DELETE
   */
  async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response: AxiosResponse = await axiosInstance.delete(
        url,
        config
      );

      return handleSuccess<T>(response);
    } catch (error) {
      return handleError(error);
    }
  }
}

const apiClient = new ApiClient();

export default apiClient;