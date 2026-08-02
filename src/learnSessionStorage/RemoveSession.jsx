import React from "react";

const RemoveSession = () => {
  return (
    <>
      <button
        onClick={() => {
          sessionStorage.removeItem("token");
        }}
      >
        RemoveSession
      </button>
    </>
  );
};

export default RemoveSession;
