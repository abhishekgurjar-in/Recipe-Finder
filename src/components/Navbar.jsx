import React from "react";
import logo from "../assets/image/logo.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <h1>Find Recipe</h1>
      </div>
      <div className="nav-text">
        <NavLink to="/">
          {" "}
          <h2>Home</h2>
        </NavLink>
        <NavLink to="/new-recipe">
          {" "}
          <h2>New Recipe</h2>
        </NavLink>
        <NavLink to="/trending">
          {" "}
          <h2>Trending</h2>
        </NavLink>
        <NavLink to="/favorites">
          {" "}
          <h2>Favorite</h2>
        </NavLink>
        <NavLink to="/about">
          {" "}
          <h2>About</h2>
        </NavLink>
        <NavLink to="/contact">
          {" "}
          <h2>Contact</h2>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
