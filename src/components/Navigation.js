import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="/">
        <div className="navigation_logo">
          <img src="./img/logo192.png" alt="logo" />
          <h3>React Course</h3>
        </div>
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "nav-active" : "")}
        to="/"
      >
        Accueil
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "nav-active" : "")}
        to="/about"
      >
        About
      </NavLink>
    </div>
  );
};

export default Navigation;
