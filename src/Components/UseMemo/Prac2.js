import React, { useState, useMemo } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const users = ["Alice", "Bob", "Charlie", "David", "Eve"];

  // ✅ useMemo to prevent unnecessary filtering
  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");
    return users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <h2>Step 3: useMemo with Filtering</h2>
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
