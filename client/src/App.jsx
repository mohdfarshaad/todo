// import { useEffect, useState } from "react";
// import { createNewTodo, getTodos } from "./api/todoService.js";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [toast, setToast] = useState({ message: "", type: "" });
  // const [todos, setTodo] = useState([]);

  // console.log(todos);

  // useEffect(() => {
  //   if (toast.message) {
  //     const timeout = setTimeout(() => {
  //       setToast({ message: "", type: "" });
  //     }, 2000);
  //     return () => clearTimeout(timeout);
  //   }
  // }, [toast]);

  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     try {
  //       const respone = await getTodos();

  //       setTodo(respone.data.data);
  //     } catch (error) {
  //       console.log(error);
  //       return;
  //     }
  //   };

  //   fetchTodos();
  // }, [title, description]);

  // const createTodo = async () => {
  //   if (!title.trim()) {
  //     console.log("Title is required");

  //     setToast({ message: "Title is required", type: "error" });
  //     return;
  //   }

  //   try {
  //     const response = await createNewTodo({ title, description });
  //     if (response) {
  //       setToast({ message: " Todo added successfully", type: "success" });
  //       console.log("Todo added successfully", response.data);

  //       setTitle("");
  //       setDescription("");
  //     }
  //   } catch (error) {
  //     setToast({ message: " Something went wrong", type: "error" });
  //     console.log(error);
  //   }
  // };

  return (
    <div className="flex justify-center items-center w-full bg-zinc-800">
      <div className="flex flex-col p-5 items-start justify-start text-white h-screen min-w-max bg-zinc-800">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
