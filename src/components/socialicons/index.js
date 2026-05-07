import React from "react";
import "./style.css";
import { socialprofils } from "../../content_option";

const LABELS = {
  github: "GitHub",
  linkedin: "LinkedIn",
  youtube: "YouTube",
};

export const Socialicons = () => {
  return (
    <footer className="site_socials">
      <div>
        <p>Elsewhere</p>
        <ul>
          {Object.entries(socialprofils).map(([platform, url]) => (
            <li key={platform}>
              <a href={url} target="_blank" rel="noreferrer">
                {LABELS[platform] || platform}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
