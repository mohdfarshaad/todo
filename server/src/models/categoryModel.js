import { Schema, Model } from "mongoose";

const categorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    todo: {
      type: Schema.Types.ObjectId,
      ref: "Todo",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Category = Model("Category", categorySchema);
