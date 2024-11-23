import { Router } from "express";
import { signin, signup } from "../controllers/user.controller";

export const userRouter = Router();

userRouter.route("/signup").post(signup);
userRouter.route("/signin").post(signin);
userRouter.route("/signout").post();
