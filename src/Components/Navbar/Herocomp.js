import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NavComp from "./NavComp";
import Login from "./Login";
import Cont from "./Cont";

function Herocomp() {
  return (
    <BrowserRouter>
      <NavComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Herocomp;
