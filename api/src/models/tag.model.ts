import mongoose, { Schema } from "mongoose";

const tagSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    todos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        refn: "Todo",
      },
    ],
  },
  { timestamps: true }
);

export const Tag = mongoose.model("Todo", tagSchema);
