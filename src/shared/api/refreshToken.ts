import axios, { AxiosError } from "axios";

import { env } from "@/shared/config/env";

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (token: string) => void;
  reject: (error: AxiosError) => void;
}> = [];

/**
 * Process queued requests
 */
function processQueue(
  error: AxiosError | null,
  token: string | null = null
) {
  failedQueue.forEach((request) => {
    if (error) {
      request.reject(error);
    } else {
      request.resolve(token as string);
    }
  });

  failedQueue = [];
}

/**
 * Request new access token
 */
export async function refreshAccessToken(): Promise<string> {
  const refreshToken =
    localStorage.getItem("refreshToken");

  if (!refreshToken) {
    throw new Error("Refresh token not found.");
  }

  try {
    const response = await axios.post<{
      accessToken: string;
      refreshToken?: string;
    }>(
      `${env.API_URL}/auth/refresh-token`,
      {
        refreshToken,
      },
      {
        withCredentials: true,
      }
    );

    const accessToken = response.data.accessToken;

    localStorage.setItem(
      "accessToken",
      accessToken
    );

    if (response.data.refreshToken) {
      localStorage.setItem(
        "refreshToken",
        response.data.refreshToken
      );
    }

    return accessToken;
  } catch (error) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    throw error;
  }
}

/**
 * Handle multiple simultaneous refresh requests
 */
export async function getRefreshToken(): Promise<string> {
  if (isRefreshing) {
    return new Promise((resolve, reject) => {
      failedQueue.push({
        resolve,
        reject,
      });
    });
  }

  isRefreshing = true;

  try {
    const token = await refreshAccessToken();

    processQueue(null, token);

    return token;
  } catch (error) {
    processQueue(error as AxiosError);

    throw error;
  } finally {
    isRefreshing = false;
  }
}