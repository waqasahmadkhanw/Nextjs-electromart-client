/**
 * ============================================================
 * Auth Mapper
 * ============================================================
 * Maps backend API responses to frontend models.
 * Pure functions only.
 * No API calls.
 * No React.
 * No side effects.
 * ============================================================
 */

import type {
  AuthUser,
  LoginResponse,
  RegisterResponse,
} from "../types";

/**
 * Maps backend user object to frontend user model.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _unused_mapUser = (data: Partial<AuthUser>): AuthUser => ({
  id: data.id ?? "",
  name: data.name ?? "",
  email: data.email ?? "",
  avatar: data.avatar ?? "",
  role: data.role ?? "user",
  isVerified: data.isVerified ?? false,
  createdAt: data.createdAt ?? "",
  updatedAt: data.updatedAt ?? "",
});

/**
 * Maps login response.
 */
export const mapLoginResponse = (
  response: LoginResponse
): LoginResponse => response;
