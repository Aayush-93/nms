import React, { useState } from "react";

function Parent() {
  const [name, setName] = useState({
    name: "",
    contact: "",
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const hanldeChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.name);
  };
  return (
    <div>
      <form onsubmit={handleSubmit}>
        <h2>Regestration Form </h2>
        <h3>
          {name.name} {name.email}
        </h3>
        <label>Name:</label>
        <input
          name="aayush"
          type="text"
          placeholder="Enter your name"
          value={name.name}
          onChange={hanldeChange}
        />
        <br />
        <br />
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={name.email}
          onChange={hanldeChange}
        />
        <br />
        <br />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Parent;
