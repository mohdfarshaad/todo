import { Document, Types } from "mongoose";

export interface Iuser {
  id: Types.ObjectId;
  email: string;
  password: string;
  refreshToken?: string;
  createdAt: Date;
  updateAt: Date;
}

export interface IUserDocument extends Iuser, Document {
  isPasswordCorrect(password: string): Promise<boolean>;
  generateAccessToken(): Promise<string>;
  generateRefreshToken(): Promise<string>;
}

export interface SignupDTO {
  email: string;
  password: string;
}

export interface SigninDTO {
  email: string;
  password: string;
}
