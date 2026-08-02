import React from "react";
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
      </Routes>
    </>
  );
};

export default DWRoute;
