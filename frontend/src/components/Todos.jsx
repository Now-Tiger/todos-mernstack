import axios from "axios";
import { useState, useEffect } from "react";


export function Todos() {
  const [todos, setTodos] = useState([]);

  /** GET todos from endpoints & set the data into the todos object */
  const getTodos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/todos");
      setTodos(response.data.todos);
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);


  return (
    <div>
      {
        /** FIX: NOT RENDERING TODOS ON THE PAGE */
        todos.map((todo) => {
          <div key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <button>{todo.completed === true ? "Completed" : "Mark as Completed!"}</button>
          </div>
        })
      }
    </div>
  )
}

