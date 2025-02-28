import React, { useState } from "react";

function Controlled() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("aayush");

  return (
    <div>
      <form>
        <input
          type="password "
          placeholder="enter here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input type="email " placeholder="enter here" />
        <br />
        <br />
        <button>logIn</button>
        <button
          onClick={() => {
            setEmail("i");
          }}
        >
          reset
        </button>
      </form>
      <h2>{email}</h2>
    </div>
  );
}

export default Controlled;
