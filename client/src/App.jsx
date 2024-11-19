import { useEffect, useState } from "react";
import {
  createNewTodo,
  deleteTodoById,
  getTodos,
  updateTodoById,
} from "./api/todoService.js";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import Toast from "./components/Toast.jsx";

function App() {
  const [title, setTitle] = useState("");
  const [toast, setToast] = useState({ message: "", type: "" });
  const [todos, setTodos] = useState([]);
  const [isEditingTodo, setIsEditingTodo] = useState(null);
  const [isLoading, setIsLoding] = useState(false);

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
        const response = await getTodos();
        setTodos(response.data.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, [isLoading]);

  const createTodo = async () => {
    if (!title.trim()) {
      setToast({ message: "Title is required", type: "error" });
      return;
    }

    try {
      const response = await createNewTodo({ title });
      if (response) {
        setTodos((prevTodos) => [...prevTodos, response.data]);
        setToast({ message: "Todo added successfully", type: "success" });
        setIsLoding(!isLoading);
        setTitle("");
      }
    } catch (error) {
      setToast({ message: "Something went wrong", type: "error" });
      console.error(error);
    }
  };

  const updateCurrentTodo = async ({ id, title }) => {
    try {
      const response = await updateTodoById(id, { title });
      if (response) {
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo._id === id ? { ...todo, title } : todo))
        );
        setToast({ message: "Todo updated successfully", type: "success" });
        setIsEditingTodo(null);
      }
    } catch (error) {
      setToast({ message: "Something went wrong", type: "error" });
      console.error(error);
    }
  };

  const deleteCurrentTodo = async (id) => {
    try {
      const response = await deleteTodoById(id);
      if (response) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
        setToast({ message: "Todo deleted successfully", type: "success" });
      }
    } catch (error) {
      setToast({ message: "Error deleting todo", type: "error" });
      console.error(error);
    }
  };

  return (
    <div className="flex p-4 flex-col items-center w-full h-screen bg-zinc-800">
      {/* TodoForm area (Fixed at the top) */}
      <div className="p-5 w-full bg-zinc-800 text-white">
        <TodoForm
          value={title}
          onClick={createTodo}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Scrollable Todo List */}
      <div className="flex-grow overflow-y-auto p-5 max-w-max">
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <TodoList
              key={todo._id || index}
              value={todo.title || ""}
              onChange={(newTitle) => {
                setTodos((prevTodos) =>
                  prevTodos.map((t) =>
                    t._id === todo._id ? { ...t, title: newTitle } : t
                  )
                );
              }}
              onSave={() => {
                updateCurrentTodo({ id: todo._id, title: todo.title });
              }}
              onDelete={() => {
                deleteCurrentTodo(todo._id);
              }}
              isEditing={isEditingTodo?.id === todo._id}
              onStartEditing={() => setIsEditingTodo({ id: todo._id })}
            />
          ))
        ) : (
          <p>No todo found</p>
        )}
      </div>

      {/* Toast message */}
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: "", type: "" })}
      />
    </div>
  );
}

export default App;
