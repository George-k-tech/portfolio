import React from "react";
import { NavLink } from "react-router-dom";
import "../main.css";
const Navbar = () => {
  return (
    <div className="navbar">

      <div className="navbar-logo">
        <NavLink to="/">George Kariuki</NavLink>
      </div>

      <ul className="navlinks">
      <input type="checkbox" id="checkbox-toggle"></input>
      <label htmlFor="checkbox-toggle" className="hamburger">&#9776;</label>
        <div className="menu">
        <li><NavLink to="/work" className="a">Recent Work</NavLink></li>
        <li><NavLink to="/contact" className="a">Contacts</NavLink></li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
