import React from "react";
import { NavLink } from "react-router";

function NavComp() {
  return (
    <div>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <h2>My web</h2>
        <li>
          {" "}
          <NavLink to="/">Home </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/cont">Cont</NavLink>
        </li>
        <li>
          <NavLink to="/login">login</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavComp;
