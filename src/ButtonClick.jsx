import React from "react";

const ButtonClick = () => {
  const handleClick2 = (e) => {
    console.log("click 2");
  };
  const handleClick3 = (a, b, c) => {
    return (e) => {
      console.log(`this is button ${c}`);
    };
  };
  return (
    <div>
      <button
        onClick={() => {
          console.log("button clicked.");
        }}
      >
        click
      </button>
      <button onClick={handleClick2}>click2</button>
      <button onClick={handleClick3(1, 2, 3)}> click3</button>
    </div>
  );
};

export default ButtonClick;
