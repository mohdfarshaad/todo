import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { todoRouter } from "./routes/todoRoute.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Routes

// app.use("/api/v1/users", userRouter);
app.use("/api/v1/todos", todoRouter);
// app.use("/api/v1/category");

export { app };
