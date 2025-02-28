import React, { useContext } from "react";
import { UserContext } from "./Comp1";

function Comp4() {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>comp4</h1>
      <h2> hello {user}</h2>
    </div>
  );
}

export default Comp4;
