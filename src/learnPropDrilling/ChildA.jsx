import React from "react";
import GrandChild from "./ChildB";

const Child = (props) => {
  return (
    <div style={{ backgroundColor: "blue" }}>
      <h1>Child A</h1>
      <GrandChild name={props.name}></GrandChild>
    </div>
  );
};

export default Child;
