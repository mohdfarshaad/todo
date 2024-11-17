import { Schema, model } from "mongoose";

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    // owner: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    // },
    // category: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Category",
    // },
  },
  { timestamps: true }
);

export const Todo = model("Todo", todoSchema);
