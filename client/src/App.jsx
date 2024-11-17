import { useState } from "react";
import { Button, Input } from "./components/index.js";
import { createNewTodo } from "./api/todoService.js";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createTodo = async () => {
    const response = await createNewTodo({ title, description });
    if (!response) {
      console.log("Failed to add todo");
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
    </div>
  );
}

export default App;
