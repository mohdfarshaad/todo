import express from "express";
import cors from "cors";
import { userRouter } from "./routes/userRouter";
import { todoRouter } from "./routes/todoRouter";
import { tagRouter } from "./routes/tagRouter";

export const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("api/v1/users", userRouter);
app.use("api/v1/todos", todoRouter);
app.use("api/v1/tags", tagRouter);
