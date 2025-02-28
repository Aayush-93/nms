import React, { useState } from "react";

function Stock() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState();

  function handleChange(e) {
    setInput(Number(e.target.value));
    console.log(input);
  }

  function handlClick() {
    setCount(count + input);
  }
  return (
    <div>
      <h2>count is:{count}</h2>
      <input
        type="number"
        value={input}
        onChange={handleChange}
        name="name"
        placeholder="enter number to change"
      />
      <button onClick={handlClick}> increase</button>
    </div>
  );
}

export default Stock;
