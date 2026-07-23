import { useCallback } from "react";

import { useRefreshTokenMutation } from "../mutations";
import type { RefreshTokenRequest } from "../types";

export const useRefreshToken = () => {
  const mutation = useRefreshTokenMutation();

  const refreshToken = useCallback(
    async (payload: RefreshTokenRequest) => {
      return mutation.mutateAsync(payload);
    },
    [mutation]
  );

  return {
    refreshToken,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
    reset: mutation.reset,
  };
};

export default useRefreshToken;
