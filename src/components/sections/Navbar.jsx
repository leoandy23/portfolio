// En tu componente Navbar.jsx
import React, { useState } from "react";
import "../../styles/Navbar.css";
import logo from "../../assets/images/logo-light.png";

const Navbar = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };

  const closeMenu = () => {
    setMenuVisibility(false);
  };
  return (
    <nav className="custom-navbar">
      <div className="navbar-container">
        <div className="brand-menu">
          <div className="brand">
            <a href="#home" onClick={closeMenu}>
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            &#9776;
          </div>
        </div>
        <ul className={`nav-list m-0 p-0 ${isMenuVisible ? "show" : ""}`}>
          <li className="nav-item">
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#works" onClick={closeMenu}>
              Works
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
