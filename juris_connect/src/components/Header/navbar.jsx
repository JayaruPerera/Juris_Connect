import React, {useState} from "react";
import "./navbar.css";

function Navbar() {
    const [active, setActive] = useState("nav_menu");
    const [toggleIcon, setToggleIcon] = useState("nav_toggler");

    const navToggle = () => {
        active === 'nav_menu' ? setActive('nav_menu nav_active') : setActive('nav_menu');

        toggleIcon === "nav_toggler" ? setToggleIcon("nav_toggler toggle") : setToggleIcon("nav_toggler");
    };

    return (
        <nav className="nav">
            <a href="#" className="nav_brand">JURISCONNECT</a>
            <ul className={active}>
                <li className="nav_item"><a href="Home" className="nav_link">Home</a></li>
                <li className="nav_item"><a href="Legalcon" className="nav_link">Community Forum</a></li>
                <li className="nav_item"><a href="About" className="nav_link">About Us</a></li>
            </ul>
            <button className="login_btn">Login</button>
            <div onClick = {navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
            </div>
        </nav>
    );
    
}

export default Navbar;
