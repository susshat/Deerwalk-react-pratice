import React, { useState } from "react";

const Property = () => {
  const [location, setLocation] = useState("ktm");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const categoryOptions = [
    { label: "Land", value: "land" },
    { label: "House", value: "house" },
    { label: "Vehicle", value: "vehicle" },
  ];
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(location, price, category);
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <div>
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select id="category">
            {categoryOptions.map((item, i) => {
              return (
                <option key={i} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Property;
