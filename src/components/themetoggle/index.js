import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import "./style.css";

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  return storedTheme === "light" || storedTheme === "dark" ? storedTheme : "dark";
};

const Themetoggle = () => {
  const [theme, settheme] = useState(getInitialTheme);
  const themetoggle = () => {
    settheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme ); 
  }, [theme]);

  const Icon = theme === "dark" ? FiSun : FiMoon;

  return (
    <button
      className="theme_toggle nav_ac"
      type="button"
      onClick={themetoggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <Icon aria-hidden="true" />
    </button>
  );
};

export default Themetoggle;
