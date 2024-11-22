export class ApiError extends Error {
  public statusCode: number;
  public success: boolean;
  public errors: unknown[];
  public data: any;
  constructor(
    statusCode: number,
    message: string = "Something went weong",
    errors: unknown[] = [],
    stack?: string
  ) {
    super(message);

    this.statusCode = statusCode;
    this.message = message;
    this.success = false;
    this.errors = errors;
    this.data = null;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this.constructor);
    }
  }
}
