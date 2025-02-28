import React, { useState } from "react";

function Index({}) {
  return (
    <div>
      <h1>parent comp vitrai ko </h1>
      <input
        type="text"
        placeholder="enter here"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default Index;
