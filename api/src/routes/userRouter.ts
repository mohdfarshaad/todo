import { Router } from "express";

export const userRouter = Router();

userRouter.route("/register").post();
userRouter.route("/login").post();
userRouter.route("/logout").post();
