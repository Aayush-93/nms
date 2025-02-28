import React, { useCallback, useState } from "react";
import Button from "./Button";

function Count() {
  const [count, setCout] = useState(0);
  const [age, setAge] = useState(10);

  const handleButton = useCallback(() => {
    console.log("incremet wala ");
    setCout((preV) => preV + 1);
  }, []);

  const handleAge = () => {
    console.log("age wala");
    setAge(age + 2);
  };
  return (
    <div>
      <h1>Count is :{count}</h1>
      <h2>age:{age}</h2>
      <button onClick={handleAge}> increase age</button>
      <Button handle={handleButton} />
    </div>
  );
}

export default Count;
