/**
 * -------------------------------------------------------
 * File: shared/config/logger.ts
 * Description:
 * Centralized application logger.
 * Logs are enabled only in development.
 * -------------------------------------------------------
 */

import env from "@/shared/config/env";

type LogData = unknown;

class Logger {
  private isEnabled = env.IS_DEV;

  log(message: string, ...data: LogData[]): void {
    if (!this.isEnabled) return;
    console.log(`🟢 ${message}`, ...data);
  }

  info(message: string, ...data: LogData[]): void {
    if (!this.isEnabled) return;
    console.info(`🔵 ${message}`, ...data);
  }

  warn(message: string, ...data: LogData[]): void {
    if (!this.isEnabled) return;
    console.warn(`🟡 ${message}`, ...data);
  }

  error(message: string, ...data: LogData[]): void {
    if (!this.isEnabled) return;
    console.error(`🔴 ${message}`, ...data);
  }

  table(data: object[]): void {
    if (!this.isEnabled) return;
    console.table(data);
  }

  group(label: string): void {
    if (!this.isEnabled) return;
    console.group(label);
  }

  groupEnd(): void {
    if (!this.isEnabled) return;
    console.groupEnd();
  }

  time(label: string): void {
    if (!this.isEnabled) return;
    console.time(label);
  }

  timeEnd(label: string): void {
    if (!this.isEnabled) return;
    console.timeEnd(label);
  }
}

const logger = new Logger();

export default logger;