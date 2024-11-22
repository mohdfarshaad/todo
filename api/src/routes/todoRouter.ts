import { Router } from "express";

export const todoRouter = Router()

todoRouter.route("/").post()
todoRouter.route("/:id").put();
todoRouter.route("/:id").delete();
todoRouter.route("/:id").get();
todoRouter.route("/").get();
