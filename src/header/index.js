import React, { useEffect, useState } from "react";
import "./style.css";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { logotext } from "../content_option";
import Themetoggle from "../components/themetoggle";

const navItems = [
  { label: "Watch", href: "#watch" },
  { label: "Plan", href: "#plan" },
  { label: "Resources", href: "#resources" },
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
          <span className="site_brand__mark" aria-hidden="true">SB</span>
          <span>{logotext}</span>
        </Link>

        <nav className="site_nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
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
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Headermain;
