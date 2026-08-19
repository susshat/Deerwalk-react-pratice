import React, { useRef } from "react";

const LearnUseRef1 = () => {
  let inputRef2 = useRef();
  let inputRef1 = useRef();
  let inputRef3 = useRef();

  return (
    <>
      <form>
        <h1 ref={inputRef3}>hello</h1>
        <input ref={inputRef1} placeholder="one" />
        <br />
        <input ref={inputRef2} placeholder="two" />
        <br />
        <button
          type="button"
          onClick={() => {
            inputRef2.current.focus();
            inputRef2.current.style.backgroundColor = "grey";
          }}
        >
          Click two
        </button>
        <button
          type="button"
          onClick={() => {
            inputRef1.current.focus();
          }}
        >
          Click one
        </button>
        <button
          type="button"
          onClick={() => {
            inputRef3.current.style.backgroundColor = "grey";
          }}
        >
          Change hello's color
        </button>
      </form>
    </>
  );
};

export default LearnUseRef1;
