import { useEffect, useState } from "react";
import { Button, Input } from "./components/index.js";
import { createNewTodo, getTodos } from "./api/todoService.js";
import Toast from "./components/Toast.jsx";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [toast, setToast] = useState({ message: "", type: "" });
  const [todos, setTodo] = useState([]);

  console.log(todos);

  useEffect(() => {
    if (toast.message) {
      const timeout = setTimeout(() => {
        setToast({ message: "", type: "" });
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [toast]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const respone = await getTodos();

        setTodo(respone.data.data);
      } catch (error) {
        console.log(error);
        return;
      }
    };

    fetchTodos();
  }, [title, description]);

  const createTodo = async () => {
    if (!title.trim()) {
      console.log("Title is required");

      setToast({ message: "Title is required", type: "error" });
      return;
    }

    try {
      const response = await createNewTodo({ title, description });
      if (response) {
        setToast({ message: " Todo added successfully", type: "success" });
        console.log("Todo added successfully", response.data);

        setTitle("");
        setDescription("");
      }
    } catch (error) {
      setToast({ message: " Something went wrong", type: "error" });
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col p-5  items-center text-white h-screen min-w-max bg-slate-800">
      <div className="flex flex-col md:flex-row md:pl-3">
        <Input
          type="text"
          label="Title"
          value={title}
          onValueChange={setTitle}
        />
        <Input
          type="text"
          label="Description"
          value={description}
          onValueChange={setDescription}
        />
        <Button label="Add" onClick={createTodo} className="px-10" />
      </div>
      <div className="mt-5 w-full max-w-3xl">
        <h2 className="text-xl mb-3">Todos:</h2>
        {Array.isArray(todos) && todos.length > 0 ? (
          <ul>
            {todos.map((todo) => (
              <li key={todo._id} className="mb-2 p-2 bg-gray-700 rounded">
                <strong>{todo.title}</strong>
                {todo.description && <p>{todo.description}</p>}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No todos available.</p>
        )}
      </div>
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: "", type: "" })}
      />
    </div>
  );
}

export default App;
