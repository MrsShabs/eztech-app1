import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

export default function Footer() {

return(
    <div className="footer">
        <a>
            <NavLink to="/support">Support</NavLink>
        </a>
        <div></div>
        <a>
            <NavLink to="/about">About Us</NavLink>
        </a>
    </div>
)

} //closing tag for Footer