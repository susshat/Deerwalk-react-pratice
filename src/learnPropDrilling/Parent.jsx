import React, { useState } from "react";
import Child from "./ChildA";

const Parent = () => {
  let [nam, setName2] = useState("Sushant");
  return (
    <div style={{ backgroundColor: "grey", color: "white" }}>
      Parent Component
      <h2>
        The Name '{nam}' was sent from parent to grand child using: Prop drillin
      </h2>
      <Child name={nam}></Child>
    </div>
  );
};

export default Parent;
