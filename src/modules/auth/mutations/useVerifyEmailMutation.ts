'use client';

import { useMutation, UseMutationResult } from '@tanstack/react-query';

import { verifyEmail } from '../services';
import type {
  VerifyEmailRequest,
  VerifyEmailResponse,
} from '../types';

/**
 * Verify Email Mutation
 *
 * Flow:
 * Component
 *   ↓
 * useVerifyEmail()
 *   ↓
 * useVerifyEmailMutation()
 *   ↓
 * auth.service.ts
 *   ↓
 * auth.api.ts
 *   ↓
 * Backend API
 */
export const useVerifyEmailMutation = (): UseMutationResult<
  VerifyEmailResponse,
  Error,
  VerifyEmailRequest
> => {
  return useMutation<
    VerifyEmailResponse,
    Error,
    VerifyEmailRequest
  >({
    mutationFn: verifyEmail,
  });
};

export default useVerifyEmailMutation;