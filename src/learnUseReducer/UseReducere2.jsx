import { useReducer } from "react";

//rendering on useReducer
//useState => component will render  only if state variable is changed

//useReducer => component will render if dipatch is called

const UseReducere2 = () => {
  let reducer = (state, action) => {
    return state + 1;
  };
  let [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      {state}
      <br />
      <button
        onClick={() => {
          dispatch();
        }}
      >
        increment
      </button>
    </>
  );
};

export default UseReducere2;
