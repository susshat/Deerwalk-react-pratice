import React from "react";

const TernaryOpt = () => {
  const age = 31;
  const gender = "ram";
  const isMarried = true;
  return (
    <div>
      {age >= 18 ? <p>can vote</p> : <p>cant vote</p>}
      {gender === "male" ? (
        <p>is male</p>
      ) : gender === "female" ? (
        <p> is female</p>
      ) : (
        <p>is other</p>
      )}
      {isMarried === true ? <p>is married</p> : <p>is not married</p>}
    </div>
  );
};

export default TernaryOpt;
