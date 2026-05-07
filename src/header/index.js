import React, { useEffect, useState } from "react";
import "./style.css";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { logotext } from "../content_option";
import Themetoggle from "../components/themetoggle";

const navItems = [
  { label: "Work", to: "/portfolio" },
  { label: "Services", to: "/open-for-work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Headermain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("ovhidden", menuOpen);
    return () => document.body.classList.remove("ovhidden");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site__header">
      <div className="site__header_inner">
        <Link className="site_brand" to="/" onClick={closeMenu}>
          <span className="site_brand__mark" aria-hidden="true">MS</span>
          <span>{logotext}</span>
        </Link>

        <nav className="site_nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? "is-active" : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site_actions">
          <Themetoggle />
          <button
            className="menu__button"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile_nav ${menuOpen ? "is-open" : ""}`}
        aria-label="Mobile navigation"
      >
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} onClick={closeMenu}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Headermain;
