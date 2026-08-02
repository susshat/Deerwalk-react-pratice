import React from "react";

const AddToLocalStorage = () => {

  //here we are storing value in local storage
  let token = "1234567890";
  localStorage.setItem("token", token);
  localStorage.setItem("name", "sus");
  localStorage.setItem("age", "28");
  localStorage.setItem("isMarried", "false");

  return <div>AddToLocalStorage</div>;
};

export default AddToLocalStorage;
