// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

// const Counter = () => {
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();
//   const [amt, setAmt] = useState("");

//   const handleInput = (e) => {
//     setAmt(Number(e.target.value));
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Count: {count}</h1>
//       <button onClick={() => dispatch(increment())}>increment</button>
//       <button onClick={() => dispatch(decrement())}>decrement</button>
//       <br />

//       <input
//         type="number"
//         placeholder="enter the amount"
//         value={amt}
//         onChange={handleInput}
//       />
//       <button onClick={() => dispatch(reset())}>reset counter</button>
//       <button onClick={() => setAmt("")}>reset input</button>
//       <br />

//       <button onClick={() => dispatch(incrementByAmount(amt))}>
//         increment by amt
//       </button>
//     </div>
//   );
// };

// export default Counter;
