import React from "react";

function ChildW({ test, count }) {
  console.log("child comp render");
  return <div></div>;
}

export default React.memo(ChildW);
