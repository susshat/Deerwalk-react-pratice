import React from "react";

const GetSessionStorage = () => {
  //the data remains untill the tab is open for session storage
  console.log(sessionStorage.getItem("token"));
  return <div>GetSessionStorage</div>;
};

export default GetSessionStorage;
