import React from "react";

const Form1 = () => {
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Success");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name"></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email"></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password"></input>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input type="text" id="address"></input>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea id="description"></textarea>
        </div>
        <button>Subbmit</button>
      </form>
    </>
  );
};

export default Form1;
