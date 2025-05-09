import { useEffect, useState } from 'react'

import './App.css'
import { createWebSocketModuleRunnerTransport } from 'vite/module-runner';

function App() {
 
  const [Todos, setTodos]=useState ([]);
  const [input, setInput]=useState ([]);

  useEffect (()=> {
    scanTodos().then(setTodos)
  }, [])

  async function handleAdd() {
    const newItem = {id: crypto.randomUUID, input, completed: false};
    await createTodo(newItem)
    setTodos((prev)=> [...prev, newItem]) 
    setInput ("");   
  }

  return (
    <>
      <div>
      <h1>Todo App</h1>
      <label>Add a Todo...</label>
      <input type="text" />
      </div>
    </>
  )
}

export default App
