import React from "react";

function Display({ text, change }) {
  return (
    <div>
      <label>1st </label>
      <input
        type="text"
        placeholder="enter here"
        value={text}
        onChange={change}
      />
      <label>2nd </label>

      <input
        type="text"
        placeholder="enter here"
        value={text}
        onChange={change}
      />
    </div>
  );
}

export default Display;
