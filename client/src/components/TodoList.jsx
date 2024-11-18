import { Pencil, Trash } from "lucide-react";

function TodoList() {
  return (
    <div className="flex space-x-2 p-4 bg-white rounded-lg">
      <input type="checkbox" className="w-5" />
      <input
        type="text"
        className="w-max p-4  rounded-lg  outline-black border-gray border-2"
      />
      <button className="bg-white p-4 rounded-lg border-gray border-2 ">
        <Pencil color="blue" />
      </button>
      <button className="bg-white p-4 rounded-lg border-gray border-2">
        <Trash color="red" />
      </button>
    </div>
  );
}

export default TodoList;
