import { useEffect, useState } from "react";

function Mouse() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("pointermove", handleMove);
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);
  return (
    <div
      style={{
        position: "absolute",
        pointerEvents: "none",
        top: 0,
        left: 0,
        transform: `translate(${position.x}px,${position.y}px)`,
        backgroundColor: "pink",
        border: "1px soid black",
        borderRadius: 50,
        height: 30,
        width: 30,
      }}
    ></div>
  );
}

export default Mouse;
