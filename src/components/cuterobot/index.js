import React from "react";
import "./style.css";

const CuteRobot = ({ className = "", label = "Friendly moving robot" }) => {
  return (
    <div className={`cute-robot ${className}`} role="img" aria-label={label}>
      <div className="cute-robot__antenna">
        <span></span>
      </div>
      <div className="cute-robot__head">
        <div className="cute-robot__eyes">
          <span></span>
          <span></span>
        </div>
        <div className="cute-robot__mouth"></div>
      </div>
      <div className="cute-robot__neck"></div>
      <div className="cute-robot__body">
        <span className="cute-robot__core"></span>
        <span className="cute-robot__meter"></span>
      </div>
      <div className="cute-robot__arm cute-robot__arm--left"></div>
      <div className="cute-robot__arm cute-robot__arm--right"></div>
      <div className="cute-robot__tracks">
        <span></span>
        <span></span>
      </div>
      <div className="cute-robot__shadow"></div>
    </div>
  );
};

export default CuteRobot;