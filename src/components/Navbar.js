import React from "react";
import { NavLink } from "react-router-dom";
import "../main.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">George Kariuki</NavLink>
      </div>
      <ul>
        <li><NavLink to="/work">Recent Work</NavLink></li>
        <li><NavLink to="/contact">Contacts</NavLink></li>
      </ul>
    </div>
  );
};

export default Navbar;
