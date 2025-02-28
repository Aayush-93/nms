import React, { useState } from "react";

function NewTodo() {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    console.log(text);
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo"
          value={text}
          onChange={handleChange}
        />
        <button type="submit">Add</button>

        <ul>
          {text.map((todo, index) => (
            <li key={index}>{todo.text}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default NewTodo;
