import React, { useEffect } from "react";
import "./Layout.css";

import { Link } from "react-router-dom";
import logoActive from "../../assets/images/logo-active.png";

export default ({ children }) => {
  useEffect(() => {
    const menus = document.querySelectorAll(".navMenu a");
    menus.forEach((menu) => {
      menu.onmouseover = () => {
        menu.childNodes[1].animate(
          { width: [0, "30px"] },
          {
            duration: 300,
            iterations: 1,
            fill: "forwards",
          }
        );
      };
      menu.onmouseleave = () => {
        menu.childNodes[1].animate(
          { width: ["30px", 0] },
          {
            duration: 300,
            iterations: 1,
            fill: "forwards",
          }
        );
      };
    });
  });
  return (
    <div className="container">
      <header className="homeHeader">
        <nav>
          <img src={logoActive} alt="logo" />
          <div className="navMenu">
            <Link to="/about">
              ABOUT<div className="borderBox"></div>
            </Link>
          </div>
        </nav>
      </header>
      <section className="content">{children}</section>
    </div>
  );
};
