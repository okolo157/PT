import React from "react";
import { Link } from "react-router-dom";

import "../styles/Header.css";
import logo from "../assets/images/logo.png";

function Header({ one, two, three, four }) {
  return (
    <div className="container-new">
      <div className="logoContainer">
        <img className="image" src={logo} alt="my-logo" />
      </div>
      <div className="navbar">
        <Link className="items" to="/home">
          {one}
        </Link>
        <Link className="items" to="/about">
          {two}
        </Link>
        <Link className="items" to="/services">
          {three}
        </Link>
        <Link className="items" to="/contact">
          {four}
        </Link>
        <Link className="items" to="/todo">
          Todo
        </Link>
        <Link className="items" to="/counter">
          Counter
        </Link>
      </div>
    </div>
  );
}

export default Header;
