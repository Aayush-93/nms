import React, { useRef } from "react";

function Input() {
  const activeref = useRef(null);

  const handleClick = () => {
    activeref.current.focus();
  };
  return (
    <div>
      <input type="text" placeholder="text" ref={activeref} />
      <button onClick={handleClick}>active</button>
    </div>
  );
}

export default Input;
