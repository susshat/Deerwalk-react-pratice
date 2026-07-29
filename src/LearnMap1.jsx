import React from "react";

const LearnMap1 = () => {
  let products = [
    {
      name: "apple",
      price: 100,
      quantity: 50,
      category: "fruits",
      isInSale: true,
    },
    {
      name: "banana",
      price: 100,
      quantity: 50,
      category: "fruits",
      isInSale: false,
    },
    {
      name: "mobile",
      price: 10000,
      quantity: 50,
      category: "electronics",
      isInSale: false,
    },
    {
      name: "laptop",
      price: 10000,
      quantity: 50,
      category: "electronics",
      isInSale: true,
    },
  ];
  return (
    <div>
      {products.map((i, index) => {
        return (
          <div>
            <h1>{i.name}</h1>
            <p>the name is {i.name}</p>
            <p>the price is {i.price}</p>
            <p>the quantity is {i.quantity}</p>
            <p>the category is {i.category}</p>
            <p>
              the product is
              {i.isInSale === true ? "available" : "not available"}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default LearnMap1;
