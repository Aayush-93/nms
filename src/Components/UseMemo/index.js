import React, { useCallback, useState } from "react";
import ChildW from "./ChildW";

function Add() {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(20);
  //   const test = () => {
  //     // problem
  //   };
  const test = useCallback(() => {
    // problem
  }, []);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1> add is{add}</h1>
      <h4>count is {count}</h4>
      <button
        onClick={() => {
          setAdd(add + 1);
        }}
      >
        add
      </button>
      <button onClick={handleCount}>Count inc</button>
      <ChildW data={test} count={count} />
    </div>
  );
}

export default Add;
