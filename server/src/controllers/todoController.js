import {
  createTodo,
  deleteTodo,
  getTodo,
  getTodos,
  updateTodo,
} from "../services/todoService.js";
import { ApiError, ApiResponse, asyncHandler } from "../utils/index.js";

const createNewTodo = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    throw new ApiError(400, "Title is required");
  }
  const todo = await createTodo({ title, description });
  if (!todo) {
    throw new ApiError(500, "Something went wrong");
  }
  return res
    .status(201)
    .json(new ApiResponse(201, todo, "Todo created successfully"));
});

const getAllTodos = asyncHandler(async (req, res) => {
  const todos = await getTodos();
  if (!todos) {
    throw new ApiError(500, "Something went wrong");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, todos, "Todo Fetched successfully"));
});

const getTodoById = asyncHandler(async (req, res) => {
  const todoId = req.params.id;

  if (!todoId) {
    throw new ApiError(404, "Not Found");
  }

  const todo = await getTodo(todoId);
  if (!todo) {
    throw new ApiError(500, "Something went wrong");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, todo, "Todo Fetched successfully"));
});

const updateTodoById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;

  if (!title || !description) {
    throw new ApiError(400, "Field is required");
  }

  if (!id) {
    throw new ApiError(404, "Not found");
  }

  const updatedTodo = await updateTodo(id, { title, description });

  if (!updatedTodo) {
    throw new ApiError(500, "Something went wrong");
  }

  res.status(200).json(new ApiResponse(200, {}, "Todo updated successfully"));
});

const deleteTodoById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  if (!id) {
    throw new ApiError(404, "Not found");
  }

  const deletedTodo = await deleteTodo(id);

  if (!deletedTodo) {
    throw new ApiError(500, "Something went wrong");
  }

  res.status(200).json(new ApiResponse(200, {}, "Todo deleted successfully"));
});

export {
  createNewTodo,
  getAllTodos,
  getTodoById,
  updateTodoById,
  deleteTodoById,
};
