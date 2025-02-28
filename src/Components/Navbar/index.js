import React from "react";
import { NavLink } from "react-router";
import { Bike } from "../dummy/Bike";
import "./Nav.css";

function Navbar() {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          listStyle: "none",
        }}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/mycomponent"> Buynow</NavLink>
        </li>
        <li>
          <NavLink to="/todo">Todo</NavLink>
        </li>
        <li>
          <NavLink to="/filterableproduct">Filterable Product</NavLink>
        </li>
      </ul>

      {/* Bike List
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            listStyle: "none",
            padding: 0,
            width: "100%",
          }}
        >
          {Bike.map((bike) => (
            <li
              key={bike.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <NavLink to={`/bike/${bike.id}`}>
                <h2>{bike.name}</h2>
                <h3>${bike.price}</h3>
                <h3>Model: {bike.model}</h3>
              </NavLink>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}

export default Navbar;
