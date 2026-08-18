import React, { useState } from "react";

const Form3 = () => {
  const [name, setName] = useState("");
  const [isMarried, setMarried] = useState(false);
  const [counrty, setCountry] = useState("Nepal");
  const [gender, setGender] = useState("Male");

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(name, isMarried, counrty, gender);
  };
  const countryOptions = [
    { label: "Nepal", value: "nepal" },
    { label: "India", value: "india" },
    { label: "China", value: "china" },
    { label: "Usa", value: "usa" },
    { label: "Norway", value: "norway" },
  ];
  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];
  return (
    <>
      <form onSubmit={handlesubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="isMarried">Is Married</label>
          <input
            id="isMarried"
            type="checkbox"
            checked={isMarried}
            onChange={(e) => {
              setMarried(e.target.checked);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <select id="country">
            {countryOptions.map((item, i) => {
              return <option value={item.value}>{item.label}</option>;
            })}
          </select>
          {/*   <select id="country">
            <option value="nepal">Nepal</option>
            <option value="usa">USA</option>
            <option value="india">India</option>
            <option value="china">China</option>
            <option value="norway">Norway</option>
          </select> */}
        </div>
        <div>
          {genderOptions.map((item, i) => {
            return (
              <div key={i}>
                <input
                  id={item.value}
                  type="radio"
                  value={item.value}
                  checked={gender === item.value}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                ></input>
                <label htmlFor={item.value}>{item.label}</label>
              </div>
            );
          })}
        </div>
        {/*    <div>
          <input
            id="male"
            type="radio"
            value="male"
            checked={gender === "male"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          ></input>
          <label htmlFor="male">Male</label>
          <input
            id="female"
            type="radio"
            value="female"
            checked={gender === "female"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          ></input>
          <label htmlFor="other">Female</label>
          <input
            id="other"
            type="radio"
            value="other"
            checked={gender === "other"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          ></input>
          <label htmlFor="other">Other</label>
        </div> */}
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form3;
