import React from "react";
import "./style.css";
import { featuredVideo } from "../../content_option";

export const Socialicons = () => {
  return (
    <footer className="site_socials">
      <div>
        <p>Video source</p>
        <ul>
          <li>
            <a href={featuredVideo.watchUrl} target="_blank" rel="noreferrer">
              Watch on YouTube
            </a>
          </li>
          <li>
            <a href={featuredVideo.authorUrl} target="_blank" rel="noreferrer">
              {featuredVideo.author}
            </a>
          </li>
          <li>
            <a href="#top">Back to top</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
