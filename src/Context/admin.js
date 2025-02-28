import { createContext, useContext, useState } from "react";

const userContext = createContext(null);
function Admin() {
  const [user, setUser] = useState(null);
  return (
    <userContext.Provider value={{ user, setUser }}>
      <Form />
    </userContext.Provider>
  );
}

function Form({ children }) {
  return (
    <Panel title="Welcome">
      <LoginButton />
    </Panel>
  );
}
function LoginButton() {
  const { user, setUser } = useContext(userContext);
  if (user !== null) {
    return <p> you log in as {user.name}</p>;
  }

  return (
    <button
      onClick={() => {
        setUser({ name: "Aayush" });
      }}
    >
      {" "}
      login in as Aayush
    </button>
  );
}

function Panel({ title, children }) {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
}
function Button({ children, onclick }) {
  return <button onClick={onclick}>{children}</button>;
}

export default Admin;
