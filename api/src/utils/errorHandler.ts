import { Request, Response } from "express";
import { ApiError } from "./ApiError";

export const errorHandler = (err: ApiError, req: Request, res: Response) => {
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({
      success: err.success,
      message: err.message,
      errors: err.errors,
    });
  } else {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
