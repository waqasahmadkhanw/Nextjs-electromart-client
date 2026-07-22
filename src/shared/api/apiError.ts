/**
 * =====================================
 * API Error
 * =====================================
 */

export interface ApiErrorOptions {
  message: string;
  statusCode?: number;
  code?: string;
  errors?: Record<string, string[]>;
}

export class ApiError extends Error {
  public readonly statusCode: number;

  public readonly code?: string;

  public readonly errors?: Record<string, string[]>;

  constructor({
    message,
    statusCode = 500,
    code,
    errors,
  }: ApiErrorOptions) {
    super(message);

    this.name = "ApiError";
    this.statusCode = statusCode;
    this.code = code;
    this.errors = errors;

    Object.setPrototypeOf(this, ApiError.prototype);
  }

  /**
   * Validation Error
   */
  static validation(
    errors: Record<string, string[]>,
    message = "Validation failed."
  ) {
    return new ApiError({
      message,
      statusCode: 422,
      errors,
    });
  }

  /**
   * Unauthorized
   */
  static unauthorized(
    message = "Unauthorized."
  ) {
    return new ApiError({
      message,
      statusCode: 401,
    });
  }

  /**
   * Forbidden
   */
  static forbidden(
    message = "Forbidden."
  ) {
    return new ApiError({
      message,
      statusCode: 403,
    });
  }

  /**
   * Not Found
   */
  static notFound(
    message = "Resource not found."
  ) {
    return new ApiError({
      message,
      statusCode: 404,
    });
  }

  /**
   * Server Error
   */
  static server(
    message = "Internal server error."
  ) {
    return new ApiError({
      message,
      statusCode: 500,
    });
  }
}

export default ApiError;