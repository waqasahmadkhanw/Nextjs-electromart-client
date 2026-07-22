import { Middleware } from "@reduxjs/toolkit";

const loggerMiddleware: Middleware =
  () => (next) => (action) => {
    if (process.env.NODE_ENV === "development") {
      console.log("[Redux]", action);
    }

    return next(action);
  };

export const middleware = [
  loggerMiddleware,
];