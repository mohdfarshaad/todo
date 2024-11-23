import { Request, Response } from "express";
import { checkExistingUser, createUser } from "../services/userService";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";

export const signup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new ApiError(400, "All fileds are required");
    }

    const existingUser = await checkExistingUser(email);

    if (existingUser) {
      throw new ApiError(400, "User already exists");
    }

    const user = createUser(email, password);

    res.status(201).json(new ApiResponse(201, user, "Signup Successfull"));
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

export const signin = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "All fileds are required");
  }

  const existingUser = await checkExistingUser(email);

  if (!existingUser) {
    throw new ApiError(400, "Not a  Registered user");
  }
};
