'use client';

import { useMutation, UseMutationResult } from '@tanstack/react-query';

import { resendVerification } from '../services';
import type {
  ResendVerificationRequest,
  ResendVerificationResponse,
} from '../types';

/**
 * Resend Verification Mutation
 *
 * Flow:
 * Component
 *   ↓
 * useResendVerification()
 *   ↓
 * useResendVerificationMutation()
 *   ↓
 * auth.service.ts
 *   ↓
 * auth.api.ts
 *   ↓
 * Backend API
 */
export const useResendVerificationMutation = (): UseMutationResult<
  ResendVerificationResponse,
  Error,
  ResendVerificationRequest
> => {
  return useMutation<
    ResendVerificationResponse,
    Error,
    ResendVerificationRequest
  >({
    mutationFn: resendVerification as () => Promise<ResendVerificationResponse>,
  });
};

export default useResendVerificationMutation;