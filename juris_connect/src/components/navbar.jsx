import React from "react";
import "../navbar.css";

function Navbar() {
    return (
        <nav className="nav">
            <a href="#" className="nav_brand">JURISCONNECT</a>
            <ul className="nav_menu">
                <li className="nav_item"><a href="#" className="nav_link">Home</a></li>
                <li className="nav_item"><a href="#" className="nav_link">Community Forum</a></li>
                <li className="nav_item"><a href="#" className="nav_link">About Us</a></li>
            </ul>
            <button className="login_btn">Login</button>
            <div className="nav_toggler">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
            </div>
        </nav>
    );
    
}

export default Navbar;
