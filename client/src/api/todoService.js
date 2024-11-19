import axiosClient from "./axiosClient";

const createNewTodo = (data) => axiosClient.post("/todos", data);
const updateTodoById = (id, title) => axiosClient.put(`/todos/${id}`, title);
const deleteTodoById = (id) => axiosClient.delete(`/todos/${id}`);
const getTodos = () => axiosClient.get("/todos");

export { createNewTodo, updateTodoById, deleteTodoById, getTodos };
