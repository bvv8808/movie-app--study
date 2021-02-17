import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navi-container">
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
    </div>
  );
};

export default Navigation;
