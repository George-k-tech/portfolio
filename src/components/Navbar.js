import React from "react";
import { NavLink } from "react-router-dom";
import "../main.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" className="a">George Kariuki</NavLink>
      </div>

      <div className="navbar-body">
        <ul className="navlinks">
          <input type="checkbox" id="checkbox-toggle"></input>
          <label htmlFor="checkbox-toggle" className="hamburger">
            &#9776;
          </label>
          <div className="menu">
            <li>
              <NavLink to="/work" className="a">
                Recent Work
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts" className="a">
                Contacts
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
