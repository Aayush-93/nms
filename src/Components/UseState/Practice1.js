import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Master useState", completed: false },
  ]);

  // Function to add a new todo
  const addTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      text: "New Task",
      completed: false,
    };
    setTodos([...todos, newTodo]); // Add new item to array
  };

  // Function to remove a todo
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // Keep only todos that do not match the ID
  };

  // Function to mark a todo as completed
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button onClick={() => toggleComplete(todo.id)}>Toggle</button>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={addTodo}>Add Task</button>
    </div>
  );
}

export default TodoList;
