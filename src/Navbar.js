import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState (false);

    return (
    <nav className="nav">
      {/* insert image in to the navbar */}
      <div className="img">
        <img src="./assets/logo.svg" width="100" height="100"></img> 
      </div>
        <Link to="/" className="site-title"> 
        StreamList
        </Link>
        <div className="menu" onClick={() => {setMenuOpen(!menuOpen);}}>
          <span></span>
          <span></span>
          <span></span>
        </div> 
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/movie" className="pages">Movie</NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="pages">Cart</NavLink>
          </li>
          <li>
            <NavLink to="/userProfile" className="pages">User Profile</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="pages">About Us</NavLink>
          </li>
        </ul>
      </nav>
    );
};

export default Navbar;