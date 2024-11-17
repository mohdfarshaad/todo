import { useEffect, useState } from "react";
import { Button, Input } from "./components/index.js";
import { createNewTodo, getTodos } from "./api/todoService.js";
import Toast from "./components/Toast.jsx";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [toast, setToast] = useState({ message: "", type: "" });
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    try {
      const respone = getTodos();
      setTodo(respone.data);
    } catch (error) {
      console.log(error);
    }
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
      <div className="flex flex-col p-4 ">
        {todo.map((todo) => {
          <h1>{todo.title}</h1>;
          <p>{todo.description}</p>;
        })}
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
