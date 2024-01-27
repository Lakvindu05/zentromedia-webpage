import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      setMenuVisible(!isScrollingDown);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);

    // Disable scrolling on the body element when the menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "auto"; // Restore scrolling on the body element when the menu is closed
  };

  return (
    <div className="whole-navbar">
      <nav className={`${isMenuVisible ? "" : "hide"}`}>
        <img src="Nav Bar Zentro Media Logo.png" alt="Zentro Media Logo" />
        <div
          className={`menu-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#Revenue" onClick={closeMenu}>
              Our Philosophy
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#companies" onClick={closeMenu}>
              Clients
            </a>
          </li>
          <li>
            <a href="#team" onClick={closeMenu}>
              Our Team
            </a>
          </li>
        </ul>
        <Link
          to="ContactBox"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="desktop-button"
          onClick={closeMenu}
        >
          Let's Talk
        </Link>
      </nav>
      <hr />
    </div>
  );
}