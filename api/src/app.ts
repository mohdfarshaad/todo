import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user.routes";
import { todoRouter } from "./routes/todo.routes";
import { tagRouter } from "./routes/tag.routes";

export const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/todos", todoRouter);
app.use("/api/v1/tags", tagRouter);
