import { useState } from "react";
import { Button, Input } from "./components";

function App() {
  const [newTodo, setNewTodo] = useState("");

  return (
    <div className="flex flex-col p-5  items-center text-white h-screen min-w-max bg-black/90">
      <div className="flex flex-col md:flex-row md:pl-3">
        <Input
          type="text"
          label="Title"
          value={newTodo}
          onValueChange={setNewTodo}
        />
        <Input
          type="text"
          label="Description"
          value={newTodo}
          onValueChange={setNewTodo}
        />
        <Button label="Add" onClick={() => {}} className="px-10" />
      </div>
    </div>
  );
}

export default App;
