import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/About.css";
import image from "../assets/images/man.jpg";

function Card() {
  const [showInformation, setShowInformation] = useState(false);

  console.log(showInformation);

  return (
    <div className="container">
      <div className="inner-card">
        <div className="inner-elements">
          <div className="image-container">
            <img
              style={{ width: "80%", height: "80%", borderRadius: "15px" }}
              alt="my-img"
              src={image}
            />
          </div>
          <div className="text-container">
            <div className="text-items">
              <div className="Status-name">
                <div className="info-container">
                  <div className="name">
                    <h1>Victor Okolo</h1>
                    <FontAwesomeIcon
                      style={{ margin: "10px", cursor: "pointer" }}
                      onClick={() => setShowInformation(!showInformation)}
                      icon={showInformation ? faCaretUp : faCaretDown}
                    />
                  </div>
                  <p className="more-info">
                    {showInformation
                      ? "A full-stack developer, working with React and other technologies."
                      : ""}
                  </p>
                </div>
              </div>
              <p className="items">
                <span style={{ fontWeight: "bold" }}>Email: </span>
                okolodubem9@gmail.com
              </p>
              <p className="items">
                <span style={{ fontWeight: "bold" }}>Location: </span>
                Lagos, Nigeria
              </p>
              <p className="items">
                <span style={{ fontWeight: "bold" }}>Occupation: </span>
                Web Developer
              </p>
              <p className="items">
                <span style={{ fontWeight: "bold" }}>About me: </span>I am a web
                developer, I love recreating UI designs with code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="about-container">
      <Card />
    </div>
  );
}

export default About;
