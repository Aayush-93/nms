import React from "react";
import { createPortal } from "react-dom";

function PortalExample() {
  return (
    <div style={{ border: "2px solid white" }}>
      <h2> Portal example</h2>
      {createPortal(<h3>this is inside portal</h3>, document.body)}
    </div>
  );
}

export default PortalExample;
