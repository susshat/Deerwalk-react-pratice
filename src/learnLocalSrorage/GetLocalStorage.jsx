import React from "react";

const GetLocalStorage = () => {
  //here we get the data saved in local storage
  // its should be in the same browser and url
  console.log(localStorage.getItem("name"));
  return <div>GetLocalStorage</div>;
};

export default GetLocalStorage;
