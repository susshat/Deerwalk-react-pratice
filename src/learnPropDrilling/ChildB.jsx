import React, { useContext } from "react";
import { Context1 } from "../App";

const GrandChild = (props) => {
  let value = useContext(Context1);
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      GrandChild Component
      <p>Using useContext</p>
      <p>the name becomes '{value.name}' that came from app.jsx</p>
      <button
        type="button"
        onClick={(e) => {
          value.setName("roja");
        }}
      >
        Change Name
      </button>
      <p>
        but changing the value changes the "name" everywhere that it was used
      </p>
      {/* <p>name is '{props.name}' using prop drilling</p> */}
    </div>
  );
};

export default GrandChild;
