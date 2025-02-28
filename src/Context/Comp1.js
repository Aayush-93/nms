import React, { createContext, useState } from "react";
import Comp2 from "./Comp2";

export const UserContext = createContext();

function Comp1() {
  const [user, setUser] = useState("aayush");
  return (
    <>
      <h1>hello</h1>
      <UserContext.Provider value={user}>
        <Comp2 />
      </UserContext.Provider>
    </>
  );
}

export default Comp1;
