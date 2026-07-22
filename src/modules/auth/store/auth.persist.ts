import { persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth.slice";
import type { AuthState } from "./auth.types";

const authPersistConfig: PersistConfig<AuthState> = {
  key: "auth",
  storage,

  /**
   * Persist only the minimum required auth state.
   * Server data (profile, dashboard, etc.) should be
   * fetched with React Query after app initialization.
   */
  whitelist: [
    "accessToken",
    "refreshToken",
    "isAuthenticated",
    "userId",
    "roles",
    "permissions",
  ],

  /**
   * Example:
   * blacklist: ["status", "error"],
   */
};

const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authReducer
);

export default persistedAuthReducer;