import React from "react";
import { NavLink } from "react-router-dom";
import "../main.css";
const Navbar = () => {
  return (
    <nav class="navbar">
    
    <div class="logo">George Mungai.</div>

    <ul class="nav-links">

     
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>

     
      <div class="menu">

        <li><a href="/">Recent Works</a></li>
        <li><a href="/">Contacts</a></li>

      </div>
    </ul>
  </nav>
  );
};

export default Navbar;
