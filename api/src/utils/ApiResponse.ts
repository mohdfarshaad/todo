export class ApiResponse<T> {
  public statusCode: number;
  public data: T | null;
  public message: string;

  constructor(
    statusCode: number,
    data: T | null = null,
    message: string = "Success"
  ) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
  }
}
