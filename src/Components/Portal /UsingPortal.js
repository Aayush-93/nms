import React from "react";
import { createPortal } from "react-dom";

function UsingPortal() {
  return (
    <div>
      <h2> using portal</h2>
      {createPortal(<h1> this is inside portal</h1>, document.body)}
    </div>
  );
}

export default UsingPortal;
