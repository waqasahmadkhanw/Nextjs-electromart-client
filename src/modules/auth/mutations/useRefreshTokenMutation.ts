'use client';

import { useMutation, UseMutationResult } from '@tanstack/react-query';

import { refreshToken } from '../services';
import type {
  RefreshTokenRequest,
  RefreshTokenResponse,
} from '../types';

/**
 * Refresh Token Mutation
 *
 * Flow:
 * Component / Axios Interceptor
 *   ↓
 * useRefreshTokenMutation()
 *   ↓
 * auth.service.ts
 *   ↓
 * auth.api.ts
 *   ↓
 * Backend API
 */
export const useRefreshTokenMutation = (): UseMutationResult<
  RefreshTokenResponse,
  Error,
  RefreshTokenRequest
> => {
  return useMutation<
    RefreshTokenResponse,
    Error,
    RefreshTokenRequest
  >({
    mutationFn: refreshToken,
  });
};

export default useRefreshTokenMutation;