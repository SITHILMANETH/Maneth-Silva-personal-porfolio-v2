import React from "react";
import "./style.css";

const PageIntro = ({ eyebrow, title, children }) => (
  <header className="page_intro">
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h1>{title}</h1>
    {children && <div className="page_intro__copy">{children}</div>}
  </header>
);

export default PageIntro;
