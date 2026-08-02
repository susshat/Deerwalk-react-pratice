import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const LearnUseState3 = () => {
  let [show, setShow] = useState("password");
  console.log("hook 3");
  return (
    <>
      <input type={show}></input>
      {/*    <button
        onClick={(e) => {
          setShow("text");
        }}
      >
        Show
      </button>
      <button
        onClick={(e) => {
          setShow("password");
        }}
      >
        hide
      </button> */}
      <button
        onClick={(e) => {
          show === "password" ? setShow("text") : setShow("password");
        }}
      >
        {show === "text" ? <FaEye /> : <IoEyeOff />}
      </button>
    </>
  );
};

export default LearnUseState3;
