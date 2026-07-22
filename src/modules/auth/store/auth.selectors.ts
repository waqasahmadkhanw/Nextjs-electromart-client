import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "@/shared/store";

const selectAuthState = (state: RootState) => state.auth;

export const selectAuth = createSelector(
  [selectAuthState],
  (auth) => auth
);

export const selectIsAuthenticated = createSelector(
  [selectAuthState],
  (auth) => auth.isAuthenticated
);

export const selectAccessToken = createSelector(
  [selectAuthState],
  (auth) => auth.accessToken
);

export const selectRefreshToken = createSelector(
  [selectAuthState],
  (auth) => auth.refreshToken
);

export const selectUserId = createSelector(
  [selectAuthState],
  (auth) => auth.userId
);

export const selectRoles = createSelector(
  [selectAuthState],
  (auth) => auth.roles
);

export const selectPermissions = createSelector(
  [selectAuthState],
  (auth) => auth.permissions
);

export const selectAuthStatus = createSelector(
  [selectAuthState],
  (auth) => auth.status
);

export const selectAuthError = createSelector(
  [selectAuthState],
  (auth) => auth.error
);

export const selectHasRole = (role: string) =>
  createSelector([selectRoles], (roles) => roles.includes(role));

export const selectHasPermission = (permission: string) =>
  createSelector(
    [selectPermissions],
    (permissions) => permissions.includes(permission)
  );