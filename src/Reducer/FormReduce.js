import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "change_name":
      return {
        name: action.next,
        age: state.age,
      };
      break;

    case "increase_age":
      return {
        name: state.name,
        age: state.age + 1,
      };

    default:
      return state;
  }
}

function FormReduce() {
  const Initalvalue = { name: "aayush", age: 20 };

  const [state, dispatch] = useReducer(reducer, Initalvalue);

  function handleChange(e) {
    dispatch({ type: "change_name", next: e.target.value });
  }
  function handleClick() {
    dispatch({ type: "increase_age" });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={state.name}
        onChange={handleChange}
      />
      <button onClick={handleClick}>add age</button>
      <p>
        hello my name is {state.name} and i am {state.age}years old
      </p>
    </div>
  );
}

export default FormReduce;
