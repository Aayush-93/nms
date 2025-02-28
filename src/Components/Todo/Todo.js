import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const now = new Date();
  const formatDate = now.toLocaleDateString();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    if (task.includes(input)) {
      setInput("");
      return;
    }
    setTask((preVal) => [...preVal, input]);
    setInput("");
  };

  const handleDelete = (index) => {
    const updatedTask = task.filter((element, ind) => ind !== index);
    setTask(updatedTask);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-header">Todo List</h1>
      <h3 className="data-time">{formatDate}-Time</h3>

      <h2 className="addTask"> Add Task</h2>

      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          placeholder="Enter task here"
          value={input}
          onChange={handleInputChange}
          className="todo-input"
        />
        <button type="submit" className="todo-add-button">
          Add
        </button>
      </form>

      <section className="todo-list-outer">
        <ol className="todo-list">
          {task.map((value, index) => (
            <li className="todo-item" key={index}>
              <label className="todo-checkbox-label">
                <input type="checkbox" className="todo-checkbox" />
                <span className="todo-text">{value}</span>
              </label>
              <button
                className="todo-delete-button"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export default Todo;
