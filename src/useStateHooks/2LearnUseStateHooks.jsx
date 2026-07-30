import React, { useState } from "react";

const LearnUseStateHooks2 = () => {
  let [show, setShow] = useState(true);
  return (
    <>
      {show ? <img src="./img.jpg"></img> : null}
      <button
        onClick={(e) => {
          setShow(true);
        }}
      >
        Show
      </button>
      <button
        onClick={(e) => {
          setShow(false);
        }}
      >
        Hide
      </button>
    </>
  );
};

export default LearnUseStateHooks2;
