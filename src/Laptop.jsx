import React from "react";

const Laptop = ({ name, price, ram, processer, gpu, children }) => {
  return (
    <div>
        {children}
      <p>Laptop is {name}</p>
      <p>Laptop price is {price}</p>
      <p>Ram is {ram}</p>
      <p>Processer is {processer}</p>
      <p>Gpu is {gpu}</p>
    </div>
  );
};

export default Laptop;
