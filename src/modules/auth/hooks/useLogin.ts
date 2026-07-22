import { useCallback } from "react";

import { useLoginMutation } from "../mutations";
import type { LoginRequest } from "../types";

export const useLogin = () => {
  const mutation = useLoginMutation();

  const login = useCallback(
    async (payload: LoginRequest) => {
      return mutation.mutateAsync(payload);
    },
    [mutation]
  );

  return {
    login,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
    reset: mutation.reset,
  };
};

export default useLogin;