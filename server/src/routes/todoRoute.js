import { Router } from "express";
import {
  createNewTodo,
  deleteTodoById,
  getAllTodos,
  getTodoById,
  updateTodoById,
} from "../controllers/todoController.js";

export const todoRouter = Router();

todoRouter.route("/").get(getAllTodos);
todoRouter.route("/:id").get(getTodoById);
todoRouter.route("/").post(createNewTodo);
todoRouter.route("/:id").delete(deleteTodoById);
todoRouter.route("/:id").put(updateTodoById);
