import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "handleinput":
      return {name:state.name,
        age:state.age+1;
      };
  }
  case "handleChange":
  return{
    name:state.name,
    nextvalue:e.target.value
  }
}

function handleChange(e) {
  dispatch({
    type: "handleinput",
    nextvalue: e.target.value,
  });
}

function handleClick() {
  dispatch({ type: "increaseage" });
}

function Forme() {
  const [state, dispatch] = useReducer(reducer, initialvalue);
  return (
    <div>
      <input type="text" value={state.name} onChange={handleChange} />
      <button onClick={handleClick}>increase age</button>
    </div>
  );
}

export default Forme;
