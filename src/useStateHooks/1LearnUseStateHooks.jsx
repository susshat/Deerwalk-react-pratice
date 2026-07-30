import React, { useState } from "react";

const LearnUseStateHooks = () => {
  //   let count = 0;
  let [count, setCount] = useState(0);

  return (
    <>
      <p>Count is {count}</p>
      <button
        onClick={(e) => {
          //   count = count + 1;
          count === 10 ? null : setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={(e) => {
          //   count = count + 1;
          count === 0 ? null : setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </>
  );
};

export default LearnUseStateHooks;
