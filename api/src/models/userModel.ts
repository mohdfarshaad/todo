import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";
import { ApiError } from "../utils/ApiError";

export interface IUser {
  email: string;
  password: string;
  refreshToken?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserDocument extends IUser, Document {}

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

export const User = mongoose.model<IUserDocument>("User ", userSchema);
