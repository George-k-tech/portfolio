import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () =>{
  return(
    <div className="navbar">
      <ul>
       <NavLink to= "/">Logo</NavLink>
       <NavLink to="/work">Recent Work</NavLink>
       <NavLink to="/contacts">Contacts</NavLink>
      </ul>
    </div>
  )
}

export default Navbar;
  