import React, { useReducer } from "react";

const reducer = (action, state) => {
  if (action.type === "handleIncrease") {
    return { count: state.count + 1 };
  } else if (action.type === "handleDecrease") {
    return { count: state.count - 1 };
  }
};
const initial = { count: 0 };
function Reduce() {
  const [state, dispatch] = useReducer(reducer, initial);

  function handleIncrease() {
    dispatch({ type: "increase-count" });
  }

  function handleDecrease() {
    dispatch({ type: "decrease-count" });
  }

  return (
    <div>
      <h1>countis {}</h1>
      <button onClick={handleIncrease}> increase</button>
      <button onClick={handleDecrease}> decrease</button>
    </div>
  );
}

export default Reduce;
