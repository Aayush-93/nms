import React, { use, useState } from "react";

function Hook() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  // for check box
  const [check, setCheck] = useState(true);

  //input field handle
  const handleInput = (e) => {
    setName(e.target.value);
  };
  //birthday count increase

  const handleCLick = () => {
    setCount((prev) => prev + 1);
  };
  // clicked

  const handleChecked = (e) => {
    setCheck(e.target.checked);
  };

  return (
    <div>
      <label>Name:</label>
      <input
        type="text"
        placeholder="enter Name"
        value={name}
        onChange={handleInput}
      />
      <p>
        my name is <b> {name} </b> & i am years <b>{count}</b> old today{" "}
      </p>
      <button onClick={handleCLick}>Birthday click+</button>
      <button onClick={() => setCount(0)}>reset click</button>

      <button onClick={() => setName("")}>reset text</button>
      <br />
      {/* For check box */}
      <label>
        <input type="checkbox" checked={check} onChange={handleChecked} /> like
        button
      </label>
      <h4> i {check ? "like this" : "didnot like this"}</h4>
    </div>
  );
}

export default Hook;
