import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Todo } from "./types/Todo";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data as Todo[]));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li className={todo.completed ? "checked" : ""}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
