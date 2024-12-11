import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <div className="container-new">
      <div className="navbar">
        <a style={{ textDecoration: "none", color: "black" }} href="#home">
          Home
        </a>
        <a style={{ textDecoration: "none", color: "black" }} href="#about">
          About
        </a>
        <a style={{ textDecoration: "none", color: "black" }} href="#services">
          Services
        </a>
        <a style={{ textDecoration: "none", color: "black" }} href="#contact">
          Contact Us
        </a>
      </div>
      <div className="authContainer">
        <a style={{ textDecoration: "none", color: "black" }} href="#about">
          Login
        </a>
        <a style={{ textDecoration: "none", color: "black" }} href="#services">
          Signup
        </a>
      </div>
    </div>
  );
}

export default Header;
