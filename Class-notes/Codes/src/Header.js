import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header-container">
      <nav className="second-container">
        <Link
          className="item"
          to="/Home"
          style={{ textDecoration: "none", color: "white" }}
        >
          Home
        </Link>
        <Link
          className="item"
          to="/Service"
          style={{ textDecoration: "none", color: "white" }}
        >
          Service
        </Link>
        <Link
          className="item"
          to="/Contact"
          style={{ textDecoration: "none", color: "white" }}
        >
          Contact Us
        </Link>
        {/* <Link
          className="item"
          to="/About"
          style={{ textDecoration: "none", color: "white" }}
        >
          About{" "}
        </Link> */}
        <Link
          className="item"
          to="/Todo"
          style={{ textDecoration: "none", color: "white" }}
        >
          Todo
        </Link>
        {/* <Link
          className="item"
          to="/Counter"
          style={{ textDecoration: "none", color: "white" }}
        >
          Counter
        </Link> */}
      </nav>
    </div>
  );
}

export default Header;
