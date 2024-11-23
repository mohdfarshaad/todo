import { Request, Response } from "express";
import {
  checkExistingUser,
  createUser,
  generateAccessAndRefreshTokens,
} from "../services/user.service";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { User } from "../models/user.model";
import { asyncHandler } from "../utils/asyncHandler";

export const signup = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
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
  }
);

export const signin = async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "All fileds are required");
  }

  const existingUser = await checkExistingUser(email);

  if (!existingUser) {
    throw new ApiError(400, "Not a  Registered user");
  }

  const isPasswordCorrect = existingUser.isPasswordCorrect(password);

  if (!isPasswordCorrect) {
    throw new ApiError(404, "Password is incorrect");
  }

  const { accessToken, refreshToken } =
    generateAccessAndRefreshTokens(existingUser);

  const loggedInUser = await User.findById(existingUser._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged in Successfully"
      )
    );
};
