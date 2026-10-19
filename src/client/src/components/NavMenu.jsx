import React, { useState } from "react";

import { Link, NavLink } from "react-router";

import navItems from "../data/navItems";

import "./styles/NavMenu.scss";

export default function NavMenu() {

  const [isOpen, setIsOpen] = useState(false);

  const handleNavToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav id="nav">
      <div className="nav-bar">
        <Link to="/" id="nav_logo" className="nav-logo">
          z-sys
        </Link>
        <ul id="nav-menu" className={`nav-list${isOpen ? " is-open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <NavLink to={item.path} className="nav-link" onClick={() => setIsOpen(false)}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          id="nav_toggle"
          className={`nav-toggle${isOpen ? " is-open" : ""}`}
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="nav-menu"
          onClick={handleNavToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
