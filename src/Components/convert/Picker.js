import React from "react";

function Picker({ onIncrement, onDecrement }) {
  return (
    <div>
      <button onClick={onIncrement}>increment</button>
      <button onClick={onDecrement}>decrement</button>
    </div>
  );
}

export default Picker;
