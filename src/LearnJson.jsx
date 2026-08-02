import React from "react";

const LearnJson = () => {
  let obj = { name: "sus", addresee: "ktm" };
  console.log(obj);
  console.log(JSON.stringify(obj));

  let obj2 = '{ "name": "sus", "addresee": "ktm" }';
  console.log(JSON.parse(obj2));
  return <div>LearnJson</div>;
};

export default LearnJson;
