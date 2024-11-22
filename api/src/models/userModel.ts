import mongoose, { Model, Schema, Document } from "mongoose";

export interface UserModel extends Document {
  id: String;
  email: string;
  password: string;
}

const userSchema: Schema<UserModel> = new Schema(
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
  },
  { timestamps: true }
);

export const User: Model<UserModel> = mongoose.model("User ", userSchema);
