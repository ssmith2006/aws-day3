import { useEffect, useState } from "react";

import "./App.css";
import { createTodo, scanTodos } from "./dynamo";

function App() {
  const [Todos, setTodos] = useState([]);
  const [input, setInput] = useState([]);

  useEffect(() => {
    scanTodos().then(setTodos);
  }, []);

  async function handleAdd() {
    const newItem = { id: crypto.randomUUID(), input, completed: false };
    await createTodo(newItem);
    setTodos((prev) => [...prev, newItem]);
    setInput("");
  
  }

  return (
    <>
      <div>
        <h1>Todo App</h1>
        <label>
          Add a Todo...
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
        <button onClick={handleAdd}>Add</button>
        <ul>
          {Todos.map((item) => (
            <li key={item.id}>{item.input}</li>
          ))}
          ;
        </ul>
      </div>
    </>
  );
}

export default App;
