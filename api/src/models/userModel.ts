import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";
import { ApiError } from "../utils/ApiError";
import jwt from "jsonwebtoken";

export interface IUser {
  email: string;
  password: string;
  refreshToken?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IUserMethods {
  isPasswordCorrect(password: string): Promise<boolean>;
  generateAccessToken(): Promise<string>;
  generateRefreshToken(): Promise<string>;
}

export interface IUserDocument extends IUser, Document, IUserMethods {}

const userSchema = new Schema<IUserDocument>(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      uinque: true,
      index: true,
    },

    password: {
      type: String,
      required: true,
    },

    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre<IUserDocument>("save", async function (next) {
  const user = this as IUserDocument;
  if (!user.isModified("password")) {
    return next();
  }

  try {
    user.password = await bcrypt.hash(user.password, 10);
    next();
  } catch (error) {
    next(error as ApiError);
  }
});

userSchema.methods.isPasswordCorrect = async function (
  this: IUserDocument,
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = async function (
  this: IUserDocument
): Promise<string> {
  if (!process.env.ACCESS_TOKEN_SECRET) {
    throw new Error("ACCESS_TOKEN_SECRET is not defined");
  }

  if (!process.env.ACCESS_TOKEN_EXPIRY) {
    throw new Error("ACCESS_TOKEN_EXPIRY is not defined");
  }

  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

userSchema.methods.generateRefreshToken = async function (
  this: IUserDocument
): Promise<string> {
  if (!process.env.REFRESH_TOKEN_SECRET) {
    throw new Error("REFRESH_TOKEN_SECRET is not defined");
  }

  if (!process.env.REFRESH_TOKEN_EXPIRY) {
    throw new Error("REFRESH_TOKEN_EXPIRY is not defined");
  }

  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model<IUserDocument>("User ", userSchema);
