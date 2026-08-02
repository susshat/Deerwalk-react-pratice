import React from "react";

const RemoveLocalStorage = () => {
  return (
    <>
      <button
        onClick={() => {
          localStorage.removeItem("name");
        }}
      >
        RemoveName
      </button>
      <button
        onClick={() => {
          localStorage.removeItem("token");
        }}
      >
        RemoveToken
      </button>
      <button
        onClick={() => {
          localStorage.removeItem("age");
        }}
      >
        RemoveAge
      </button>
    </>
  );
};

export default RemoveLocalStorage;
