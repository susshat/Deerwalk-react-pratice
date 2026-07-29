import React from "react";

const EffectOfData = () => {
  let name = "sushant";
  let age = 32;
  let isMarried = true;
  let favperson = ["sushant", "shayam", "hari"];
  let motherInfo = {
    name: "renu",
    age: "33",
  };
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{isMarried}</p> {/* boolean values are not printed on the browser */}
      <p>{favperson}</p> {/* arrays are printed in one sentence */}
      <p>{motherInfo.name}</p>
      {/* objects can not be printed but seperate keys can be called from the object  */}
    </div>
  );
};

export default EffectOfData;
