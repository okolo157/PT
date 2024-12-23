import {
  faGithub,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/CenterText.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function CenterText() {
  return (
    <div className="center-text">
      <h2 className="item item1">VICTOR OKOLO</h2>
      <h1 className="item item2">DESIGNING</h1>
      <h2 className="item item3">
        I’m a Creative Developer and I make things work. Turning your dreams
        into reality.
      </h2>
      <div className="iconContainer">
        <a
          href="https://github.com/okolo157"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="icon-item" icon={faGithub} />
        </a>

        <a
          href="https://wa.me/2349044848699"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="icon-item" icon={faWhatsapp} />
        </a>

        <a
          href="https://x.com/vic_szn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="icon-item" icon={faXTwitter} />
        </a>

        <a
          href="https://mailto:okolodubem9@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="icon-item" icon={faEnvelope} />
        </a>

        
      </div>
    </div>
  );
}

export default CenterText;
