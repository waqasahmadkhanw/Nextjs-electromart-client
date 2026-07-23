'use client';

import { useMutation, UseMutationResult } from '@tanstack/react-query';

import { disableTwoFactor } from '../services';
import type {
  DisableTwoFactorRequest,
  DisableTwoFactorResponse,
} from '../types';

/**
 * Disable Two Factor Authentication Mutation
 *
 * Flow:
 * Component
 *   ↓
 * useDisableTwoFactor()
 *   ↓
 * useDisableTwoFactorMutation()
 *   ↓
 * auth.service.ts
 *   ↓
 * auth.api.ts
 *   ↓
 * Backend API
 */
export const useDisableTwoFactorMutation = (): UseMutationResult<
  DisableTwoFactorResponse,
  Error,
  DisableTwoFactorRequest
> => {
  return useMutation<
    DisableTwoFactorResponse,
    Error,
    DisableTwoFactorRequest
  >({
    mutationFn: disableTwoFactor as (data: DisableTwoFactorRequest) => Promise<DisableTwoFactorResponse>,
  });
};

export default useDisableTwoFactorMutation;