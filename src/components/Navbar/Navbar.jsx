import "./Navbar.css";
import { useState } from "react";
import logo from "../../assets/fosspng.svg";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className={`menu ${menuVisible ? "show" : ""}`}>
        <ul>
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/events">
            <li>Events</li>
          </a>
          <a href="/team">
            <li>Team</li>
          </a>
          <a href="/about">
            <li>About</li>
          </a>
          <a href="/gallery">
            <li>Gallery</li>
          </a>
        </ul>
      </div>
      <div className="contact-button">
        <a href="/contact-us">
          <span>Contact Us!</span>
          <i className="fa fa-phone"></i>
        </a>
      </div>
      <div className="mobile-menu-button" onClick={toggleMenu}>
        {menuVisible ? (
          <div className="close-icon">&times;</div>
        ) : (
          <div className="hamburger-icon">&#9776;</div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
