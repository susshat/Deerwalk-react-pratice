import React, { useReducer } from "react";

// useReducer is mostly used in Form to change values of objects and array
const UseReducer3 = () => {
  let reducer = (state, action) => {
    if (action === "increment") {
      return state + 1;
    } else if (action === "decrement") {
      return state - 1;
    } else {
      return state;
    }
  };

  let [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      {state}
      <br />
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        increse
      </button>
      <br />
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        decrease
      </button>
    </>
  );
};

export default UseReducer3;
