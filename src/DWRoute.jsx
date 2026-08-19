/* import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./AboutPage";

const DWRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/about/:id" element={<AboutPage />}></Route>
        <Route
          path="/contact"
          element={<div>This is contact page</div>}
        ></Route>
        <Route
          path="/product"
          element={<div>This is product page</div>}
        ></Route>
        <Route path="/user" element={<div>This is user page</div>}></Route>
        <Route path="/login" element={<div>This is login page</div>}></Route>
        <Route path="*" element={<div> page not found</div>}></Route>
      </Routes>
    </>
  );
};

export default DWRoute;
 */

import React from "react";
import { Route, Routes } from "react-router-dom";
import LearnUseRef1 from "./learnUseRef/LearnUseRef1";

const DWRoute = () => {
  return (
    <>
      <Routes>
        <Route path="product">
          <Route index element={<div>Get all Products</div>}></Route>
          <Route path="create" element={<div>Create Products</div>}></Route>
          <Route path=":id" element={<div>Get specific Product</div>}></Route>
          <Route
            path="update/:id"
            element={<div>Update specific Product</div>}
          ></Route>
        </Route>
        <Route path="user">
          <Route index element={<div>Get all Users</div>}></Route>
          <Route path="create" element={<div>Create Users</div>}></Route>
          <Route path=":id" element={<div>Get Specific User</div>}></Route>
          <Route
            path="update/:id"
            element={<div>Update specific User</div>}
          ></Route>
        </Route>
      </Routes>
  
    </>
  );
};

export default DWRoute;
