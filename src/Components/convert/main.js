import React, { useState } from "react";

function Main() {
  const [user, setUser] = useState([
    { name: "aayush", age: 20 },
    { name: "ram", age: 30 },
    { name: "hari", age: 10 },
  ]);
  return (
    <div>
      <h1>user list</h1>
      {user.map((element, index) => {
        return (
          <li>
            {element.name} -{element.age}
          </li>
        );
      })}
    </div>
  );
}

export default Main;
