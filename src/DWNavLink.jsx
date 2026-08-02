import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const DWNavLink = () => {
  let navigate = useNavigate();
  return (
    <>
      <NavLink to="/about" style={{ marginRight: "10px" }}>
        About
      </NavLink>
      <NavLink to="/Contact" style={{ marginRight: "10px" }}>
        Contact
      </NavLink>
      <NavLink to="/Product" style={{ marginRight: "10px" }}>
        Product
      </NavLink>
      <NavLink to="/User" style={{ marginRight: "10px" }}>
        User
      </NavLink>
      <button
        onClick={(e) => {
          navigate("/login");
        }}
      >
        Login
      </button>
    </>
  );
};

export default DWNavLink;
