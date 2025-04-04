import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faVideo, faListUl, faCartShopping, faUser,  } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState (false);

    return (
    <nav className="nav">
      {/* insert image in to the navbar */}
      <div className="img">
        <img src="/assets/Logo.png" alt="streamlist-logo" width="100" height="100"></img> 
      </div>
        <Link to="/" className="site-title"> 
        StreamList
        <FontAwesomeIcon icon={faHouse} size="m" style={{color: "#912020",}} />
        
        </Link>
        <div className="menu" onClick={() => {setMenuOpen(!menuOpen);}}>
          <span></span>
          <span></span>
          <span></span>
        </div> 
        <ul className={menuOpen ? "open" : ""}>
          <li>
          <FontAwesomeIcon icon={faVideo} style={{color: "912020", }} />
            <NavLink to="/movie" className="pages">Movie</NavLink>
          </li>
          <li>
          <FontAwesomeIcon icon={faListUl} style={{color: "912020",}} />
            <NavLink to="/lists" className="pages">Lists</NavLink>
          </li>
          <li>
          <FontAwesomeIcon icon={faCartShopping} style={{color: "912020",}} />  
            <NavLink to="/cart" className="pages">Cart</NavLink>
          </li>
          <li>
          <FontAwesomeIcon icon={faUser} style={{color: "912020",}} />
            <NavLink to="/userProfile" className="pages">User Profile</NavLink>
          </li>
        </ul>
      </nav>
    );
};

export default Navbar;