import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthStatus =
  | "idle"
  | "loading"
  | "authenticated"
  | "unauthenticated";

export interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  userId: string | null;
  roles: string[];
  permissions: string[];
  status: AuthStatus;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  userId: null,
  roles: [],
  permissions: [],
  status: "idle",
  error: null,
};

interface LoginPayload {
  accessToken: string;
  refreshToken?: string | null;
  userId: string;
  roles?: string[];
  permissions?: string[];
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.status = "loading";
      state.error = null;
    },

    loginSuccess(state, action: PayloadAction<LoginPayload>) {
      state.isAuthenticated = true;
      state.status = "authenticated";
      state.error = null;

      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken ?? null;
      state.userId = action.payload.userId;
      state.roles = action.payload.roles ?? [];
      state.permissions = action.payload.permissions ?? [];
    },

    loginFailure(state, action: PayloadAction<string>) {
      state.status = "unauthenticated";
      state.error = action.payload;
      state.isAuthenticated = false;

      state.accessToken = null;
      state.refreshToken = null;
      state.userId = null;
      state.roles = [];
      state.permissions = [];
    },

    updateAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },

    updatePermissions(state, action: PayloadAction<string[]>) {
      state.permissions = action.payload;
    },

    updateRoles(state, action: PayloadAction<string[]>) {
      state.roles = action.payload;
    },

    clearError(state) {
      state.error = null;
    },

    logout(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  updateAccessToken,
  updatePermissions,
  updateRoles,
  clearError,
  logout,
} = authSlice.actions;

export default authSlice.reducer;