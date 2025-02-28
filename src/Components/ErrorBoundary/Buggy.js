import React from "react";
// import Errorbound from "./Errorbound";

function Buggy() {
  throw new Error("Oops! Something went wrong");
  return <div>This will never render </div>;
}

export default Buggy;
