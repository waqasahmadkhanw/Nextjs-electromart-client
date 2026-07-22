export const AUTH_CONSTANTS = {
  ACCESS_TOKEN_KEY: "accessToken",
  REFRESH_TOKEN_KEY: "refreshToken",
  USER_KEY: "currentUser",

  OTP_LENGTH: 6,

  PASSWORD: {
    MIN_LENGTH: 8,
    MAX_LENGTH: 100,
  },

  SESSION_TIMEOUT: 30 * 60 * 1000,
} as const;