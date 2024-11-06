import axios from "axios";
import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // TODO: POST todo on the server
  const postData = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/v1/todos/add", {
        title: title,
        description: description
      });
      console.log(response.data);
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  }

  const styling = {
    padding: 10,
    margin: 10,
  }

  function handleSubmit() {
    alert("Todo added!");
  }

  return (
    <>
      <h2 style={styling}>Todos App</h2>
      <input type="text" placeholder="Enter title" style={styling} onChange={(e) => { setTitle(e.target.value) }}
      ></input>
      <br />
      <input type="text" placeholder="Enter description..." style={styling} onChange={(e) => { setDescription(e.target.value) }}></input>
      <br />
      <button onClick={handleSubmit} style={styling}>Add Todo</button>
    </>
  )
}

