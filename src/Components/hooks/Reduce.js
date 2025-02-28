import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "Increase") {
    return {
      ...state,
      age: state.age + 1,
    };
  } else if (action.type === "change") {
    return {
      ...state,
      name: action.Newname,
    };
  }
  return state; // Return current state if no match
};

const initial = { name: "aayush", age: 20 };

export default function Reduce() {
  const [state, dispatch] = useReducer(reducer, initial);

  function handleChange(e) {
    dispatch({ type: "change", Newname: e.target.value }); // Corrected dispatch
  }

  function handleIncrease() {
    dispatch({ type: "Increase" });
  }

  return (
    <>
      <input
        type="text"
        placeholder="name"
        value={state.name}
        onChange={handleChange}
      />
      <button onClick={handleIncrease}>Increase age</button>
      <p>
        Your name is {state.name} and you are {state.age} years old.
      </p>
    </>
  );
}
