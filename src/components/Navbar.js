import React from "react";
import { NavLink } from "react-router-dom";
import "../main.css";
const Navbar = () => {
  return (
    <nav className="navbar">
    
    <div className="logo"><NavLink to="/">George Mungai.</NavLink> </div>

    <ul className="nav-links">

     
      <input type="checkbox" id="checkbox_toggle" />
      <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

     
      <div className="menu">


        <NavLink to="/work"><li><a >Recent Works</a></li></NavLink>
        <NavLink to="/contacts"><li><a >Contacts</a></li></NavLink>


      </div>
    </ul>
  </nav>
  );
};

export default Navbar;
