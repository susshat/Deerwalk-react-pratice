import React, { useReducer } from "react";

//useState => primitive number , string , boolean, null , undefined
//useReducer => array, object

const UseReducer1 = () => {
  //state is the variable
  //reducer is a function,
  //"sus" is the initial value
  //dispatch is used to change variable

  //                "sus"  "ram"
  let reducer = (state, action) => {
    return `${state}${action} bro`;
  };

  let [state, dispatch] = useReducer(reducer, "sus");
  return (
    <>
      {state}

      <button
        onClick={() => {
          //as soon as this dispatch() is called then the reducer function runs
          dispatch("ram");
        }}
      >
        Change Name
      </button>
    </>
  );
};

export default UseReducer1;
