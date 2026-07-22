export const API_ENDPOINTS = {
  // ==========================
  // Authentication
  // ==========================
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    REFRESH_TOKEN: "/auth/refresh-token",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
    VERIFY_EMAIL: "/auth/verify-email",
    RESEND_VERIFICATION: "/auth/resend-verification",
    CHANGE_PASSWORD: "/auth/change-password",
    PROFILE: "/auth/profile",
  },

  // ==========================
  // Users
  // ==========================
  USERS: {
    LIST: "/users",
    CREATE: "/users",
    DETAILS: (id: string) => `/users/${id}`,
    UPDATE: (id: string) => `/users/${id}`,
    DELETE: (id: string) => `/users/${id}`,
  },

  // ==========================
  // File Upload
  // ==========================
  UPLOAD: {
    IMAGE: "/upload/image",
    FILE: "/upload/file",
    MULTIPLE: "/upload/multiple",
  },

  // ==========================
  // Notifications
  // ==========================
  NOTIFICATIONS: {
    LIST: "/notifications",
    READ: (id: string) => `/notifications/${id}/read`,
    READ_ALL: "/notifications/read-all",
  },

  // ==========================
  // Common
  // ==========================
  COMMON: {
    HEALTH: "/health",
    SETTINGS: "/settings",
    COUNTRIES: "/countries",
    LANGUAGES: "/languages",
  },
} as const;

export default API_ENDPOINTS;