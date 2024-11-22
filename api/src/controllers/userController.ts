import { Request, Response } from "express";
import { UserModel } from "../models/userModel";
import { createUser } from "../services/userService";
import { ApiError } from "../utils/ApiError";
import { errorHandler } from "../utils/errorHandler";

export const signup = async (req: Request, res: Response): Promise<void> => {
  try {
  } catch (err) {
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
  }
};
