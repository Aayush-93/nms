import React, { useState } from "react";

function Practic() {
  const [search, setSearch] = useState("");

  const userData = ["aayush", "Bob", "charlie", "ram"];
  // console.log(userData);

  const filteredList=

  const handleChange = (e) => {
    console.log(search);
    setSearch(e.target.value);
  };

  const handleClick = () => {};
  return (
    <div>
      <input
        type="text"
        placeholder="Search.."
        value={search}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Search</button>
      <ul>
        {userData.map((user, i) => (
          <li style={{ listStyle: "none" }} key={i}>
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Practic;
