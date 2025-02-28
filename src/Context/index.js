import { createContext, useContext, useState } from "react";
import "./index.css";

const Themecontext = createContext(null);
function Check() {
  const [theme, setTheme] = useState("light");
  return (
    <Themecontext.Provider value={theme}>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />{" "}
        toggller
      </label>
    </Themecontext.Provider>
  );
}

function Form({ children }) {
  return (
    <Pannel title="Welcome">
      <button>login</button>
      <button>SignUp</button>
    </Pannel>
  );
}

function Pannel({ title, children }) {
  const theme = useContext(Themecontext);
  const classname = "pannel-" + theme;
  return (
    <section className={classname}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children }) {
  const theme = useContext(Themecontext);
  //   console.log(theme);
  const className = "button-" + theme;
  return <buton className={children}>{children}</buton>;
}

export default Check;
