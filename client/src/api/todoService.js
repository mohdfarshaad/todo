import axiosClient from "./axiosClient";

const createNewTodo = (data) => axiosClient.post("/todos", data);
const updateTodoById = (data, id) => axiosClient.put(`/todos/${id}`, data);
const deleteTodoById = (id) => axiosClient.delete(`/todos/${id}`);
const getTodos = () => axiosClient.get("/todos");

export { createNewTodo, updateTodoById, deleteTodoById, getTodos };
