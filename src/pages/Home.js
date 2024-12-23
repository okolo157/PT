import React from "react";
import "../App.css";
import "../styles/CenterText.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div className="center-text">
      <h2 className="item item1">VICTOR OKOLO</h2>
      <h1 className="item item2">DESIGNING</h1>
      <h2 className="item item3">
        I’m a Creative Developer and I make things work. Turning your dreams
        into reality.
      </h2>
      <div className="icon-container">
        <a target="_blank" rel="noreferrer" href="https://github.com/okolo157">
          <FontAwesomeIcon icon={faGithub} className="itemx itemm1" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://x.com">
          <FontAwesomeIcon icon={faXTwitter} className="itemx itemm2" />
        </a>
        <a target="_blank" rel="noreferrer" href="x.com">
          <FontAwesomeIcon icon={faFacebook} className="itemx itemm3" />
        </a>
      </div>
    </div>
  );
}

export default Home;
