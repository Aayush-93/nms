// import React, { useState } from "react";
import React from "react";
import useSelfHook from "./SelfHook";

function Index() {
  const { count, handleIncrement } = useSelfHook();
  //   const [count, setCount] = useState(0);

  //   const handleIncrement = () => {
  //     setCount((preV) => preV + 1);
  //   };
  return (
    <div>
      <h1> count is {count}</h1>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
}

export default Index;
