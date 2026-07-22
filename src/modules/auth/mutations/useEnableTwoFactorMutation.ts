'use client';

import { useMutation, UseMutationResult } from '@tanstack/react-query';

import { enableTwoFactor } from '../services';
import type {
  EnableTwoFactorRequest,
  EnableTwoFactorResponse,
} from '../types';

/**
 * Enable Two Factor Authentication Mutation
 *
 * Flow:
 * Component
 *   ↓
 * useEnableTwoFactor()
 *   ↓
 * useEnableTwoFactorMutation()
 *   ↓
 * auth.service.ts
 *   ↓
 * auth.api.ts
 *   ↓
 * Backend API
 */
export const useEnableTwoFactorMutation = (): UseMutationResult<
  EnableTwoFactorResponse,
  Error,
  EnableTwoFactorRequest
> => {
  return useMutation<
    EnableTwoFactorResponse,
    Error,
    EnableTwoFactorRequest
  >({
    mutationFn: enableTwoFactor,
  });
};

export default useEnableTwoFactorMutation;