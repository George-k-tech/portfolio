import React from "react";
import { NavLink } from "react-router-dom";
import "../main.css";
const Navbar = () => {
  return (
    <nav className="navbar">
    
    <div className="logo">George Mungai.</div>

    <ul className="nav-links">

     
      <input type="checkbox" id="checkbox_toggle" />
      <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

     
      <div className="menu">

        <li><a href="/">Recent Works</a></li>
        <li><a href="/">Contacts</a></li>

      </div>
    </ul>
  </nav>
  );
};

export default Navbar;
