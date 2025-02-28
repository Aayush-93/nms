import React, { useLayoutEffect, useRef, useState } from "react";

function Video() {
  const [width, setWidth] = useState(0);
  const [count, setCount] = useState(0);
  const divref = useRef(null);

  const handleClick = () => {
    setCount((preV) => preV + 1);
  };
  useLayoutEffect(() => {
    if (divref.current) {
      setWidth(divref.current.offsetWidth);
      console.log("hi");
    }
  }, []);

  return (
    <div>
      <div
        ref={divref}
        style={{
          width: "400px",
          height: "400px",
          backgroundColor: "black",
          border: "3px solid green",
        }}
      >
        {" "}
        hello
      </div>
      <h2> count is{count}</h2>
      <button onClick={handleClick}>rerender</button>
      <p> width is:{width}px</p>
    </div>
  );
}

export default Video;
