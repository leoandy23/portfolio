// En tu componente Navbar.jsx
import React, { useState } from "react";
import "../../styles/Navbar.css"; // Asegúrate de tener la ruta correcta

const Navbar = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };

  const closeMenu = () => {
    setMenuVisibility(false);
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand-menu">
          <div className="brand">
            <a href="#home" onClick={closeMenu}>
              Leoandy
            </a>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            &#9776;
          </div>
        </div>
        <ul className={`nav-list ${isMenuVisible ? "show" : ""}`}>
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
