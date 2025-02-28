import React from "react";
import useSelfHook from "./SelfHook";

function Counter2() {
  const { count, handleDecrement } = useSelfHook();
  return (
    <div>
      <h1>Count 2nd is{count}</h1>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
}

export default Counter2;
