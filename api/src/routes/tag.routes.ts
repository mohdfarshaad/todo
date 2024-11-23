import { Router } from "express";

export const tagRouter = Router();

tagRouter.route("/").post();
tagRouter.route("/:id").put();
tagRouter.route("/:id").delete();
tagRouter.route("/:id").get();
tagRouter.route("/").get();
