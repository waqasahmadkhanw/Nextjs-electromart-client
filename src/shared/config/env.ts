/**
 * -------------------------------------------------------
 * File: shared/config/env.ts
 * Description:
 * Type-safe environment configuration for Next.js.
 * Only expose variables prefixed with NEXT_PUBLIC_ to the client.
 * -------------------------------------------------------
 */

type NodeEnv = "development" | "production" | "test";

const requiredEnv = [
  "NEXT_PUBLIC_API_URL",
] as const;

type RequiredEnv = (typeof requiredEnv)[number];

function getEnv(key: RequiredEnv): string {
  const value = process.env[key];

  if (!value) {
    throw new Error(`❌ Missing required environment variable: ${key}`);
  }

  return value;
}

export const env = {
  NODE_ENV: (process.env.NODE_ENV as NodeEnv) ?? "development",

  API_URL: getEnv("NEXT_PUBLIC_API_URL"),

  IS_DEV: process.env.NODE_ENV === "development",

  IS_PROD: process.env.NODE_ENV === "production",

  IS_TEST: process.env.NODE_ENV === "test",
} as const;

export default env;