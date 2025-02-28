import React from "react";

function Button({ handle }) {
  console.log("button Re-render wala");
  return (
    <div>
      <button onClick={handle}>increase count</button>
    </div>
  );
}

export default React.memo(Button);
