import { useState } from "react";

function useSelfHook() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((preV) => preV + 1);
  };
  const handleDecrement = () => {
    setCount((preV) => preV - 1);
  };

  return { handleIncrement, count, handleDecrement };
}

export default useSelfHook;
