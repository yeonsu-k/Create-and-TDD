import React from "react";
import Toggle from "./Toggle";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to="/home">Main</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
      <Toggle />
    </>
  );
};

export default Header;
