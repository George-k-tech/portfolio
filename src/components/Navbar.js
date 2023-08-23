import React from "react";
import { NavLink } from "react-router-dom";
import "../main.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">George Kariuki</NavLink>
      </div>
      <div className="navbar-body">
        <div className="navbar-body-work"> 
          <NavLink to="/work">Recent Work</NavLink>
        </div>
        <div className="navbar-body-contact">
          <NavLink to="/contacts">Contacts</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
