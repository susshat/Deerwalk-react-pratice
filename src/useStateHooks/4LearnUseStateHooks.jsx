import React, { useState } from "react";

const LearnUseStateHooks4 = () => {
  const [count, setCount] = useState(0);
  console.log("i am hook 4");
  return (
    <>
      <p>Count is {count}</p>
      <button
        onClick={(e) => {
          setCount(count + 1);
        }}
      >
        increase
      </button>
    </>
  );
};
export default LearnUseStateHooks4;
/* 
1.Rendering => execution of component
2.While a component is rendered => the particular component on the page is re-written in browser & none of the other components are affected
3.When is component rendered => when state variable is changed,
4.Those component that have their state variable is changed will only change other components remain the same
5.Only state variable is able to render the component, normal variable arent able.
6.Why was state varibale introduced?
 -> to change the content when component is rendered which cannot be done by normal varibale.
*/
