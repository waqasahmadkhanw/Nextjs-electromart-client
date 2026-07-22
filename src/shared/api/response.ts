import { AxiosError, AxiosResponse } from "axios";

/**
 * Standard API Success Response
 */
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

/**
 * Standard API Error Response
 */
export interface ApiErrorResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
  statusCode?: number;
}

/**
 * Extract successful response data
 */
export function handleSuccess<T>(
  response: AxiosResponse<ApiResponse<T>>
): T {
  return response.data.data;
}

/**
 * Normalize API errors
 */
export function handleError(error: unknown): never {
  if (error instanceof AxiosError) {
    const response = error.response?.data as ApiErrorResponse | undefined;

    throw {
      success: false,
      message: response?.message ?? "Something went wrong.",
      errors: response?.errors ?? {},
      statusCode: error.response?.status ?? 500,
    } satisfies ApiErrorResponse;
  }

  throw {
    success: false,
    message: "Unexpected error occurred.",
    errors: {},
    statusCode: 500,
  } satisfies ApiErrorResponse;
}

/**
 * Check if request was successful
 */
export function isSuccess(
  response: AxiosResponse<ApiResponse<unknown>>
): boolean {
  return response.data.success;
}

/**
 * Get API message
 */
export function getMessage(
  response: AxiosResponse<ApiResponse<unknown>>
): string {
  return response.data.message;
}