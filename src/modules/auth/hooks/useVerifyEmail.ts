import { useCallback } from "react";

import { useVerifyEmailMutation } from "../mutations";
import type { VerifyEmailRequest } from "../types";

export const useVerifyEmail = () => {
  const mutation = useVerifyEmailMutation();

  const verifyEmail = useCallback(
    async (payload: VerifyEmailRequest) => {
      return mutation.mutateAsync(payload);
    },
    [mutation]
  );

  return {
    verifyEmail,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
    reset: mutation.reset,
  };
};

export default useVerifyEmail;