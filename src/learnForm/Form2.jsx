import React, { useState } from "react";

const Form2 = () => {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [salary, setSalary] = useState("");
  let [position, setPosition] = useState("");
  let [phone, setPhone] = useState("");
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description, salary, position, phone);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="description">description:</label>
          <input
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="salary">Salary:</label>
          <input
            id="salary"
            value={salary}
            onChange={(e) => {
              setSalary(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="position">Position:</label>
          <input
            id="position"
            value={position}
            onChange={(e) => {
              setPosition(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          ></input>
        </div>
        <button >Subbmit</button>
      </form>
    </>
  );
};

export default Form2;
