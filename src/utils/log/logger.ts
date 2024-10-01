// src/utils/log/logger.ts
const isDev = process.env.NODE_ENV === 'development'

/**
 * Logs messages to the console in development mode only.
 * @param {...any} args - The arguments to log.
 */
export const log = (...args: any[]) => {
  if (isDev) {
    console.log(...args)
  }
}
