import React from "react";

const AddDataToSessionStorage = () => {
  let token = "123456789";
  sessionStorage.setItem("token", token);
  return <div>AddDataToSessionStorage</div>;
};

export default AddDataToSessionStorage;
