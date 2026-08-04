import React from "react";

const LearnMap2 = () => {
  let products = [
    {
      id: 1,
      name: "apple",
      price: 100,
      quantity: 50,
      category: "fruits",
      isInSale: true,
    },
    {
      id: 2,
      name: "banana",
      price: 100,
      quantity: 50,
      category: "fruits",
      isInSale: false,
    },
    {
      id: 3,
      name: "mobile",
      price: 10000,
      quantity: 50,
      category: "electronics",
      isInSale: false,
    },
    {
      id: 4,
      name: "laptop",
      price: 10000,
      quantity: 50,
      category: "electronics",
      isInSale: true,
    },
  ];
  let productsID = [1, 2];
  return (
    /*     <div>
      {products
        .filter((item, i) => {
          return productsID.includes(item.id);
        })
        .map((item, i) => {
          return (
            <div>
              <h1>{item.name}</h1>
              <p>the Id is {item.id}</p>
              <p>the name is {item.name}</p>
              <p>the price is {item.price}</p>
              <p>the quantity is {item.quantity}</p>
              <p>the category is {item.category}</p>
              <p>
                the product is
                {item.isInSale === true ? "available" : "not available"}
              </p>
            </div>
          );
        })}
    </div> */
    <div>
      {products
        .filter((item, i) => {
          return productsID.includes(item.id);
        })
        .reduce((pre, cur) => {
          return pre + cur.price * cur.quantity;
        }, 0)}
    </div>
  );
};

export default LearnMap2;
