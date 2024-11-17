import { Todo } from "../models/todoModel.js";

const createTodo = (data) => {
  return Todo.create(data);
};

const updateTodo = (id, data) => {
  return Todo.findByIdAndUpdate(id, data);
};

const deleteTodo = (id) => {
  return Todo.findByIdAndDelete(id);
};

const getTodos = () => {
  return Todo.find();
};

const getTodo = (id) => {
  return Todo.findById(id);
};

export { createTodo, updateTodo, deleteTodo, getTodo, getTodos };
