import React from "react";
import { Link } from "react-router-dom";
//logo import
//import images from "../../images/react-img.png";

function Header() {
  return (
    <nav
      className="navbar p-0 sticky-top"
      style={{ backgroundColor: "#008057" }}
    >
      <Link to="/" className="text-decoration-none">
        <h1
          className="container-fluid display-5 fw-bolder header-link"
          style={{ color: "black" }}
        >
          The TrueValue
        </h1>
      </Link>
    </nav>
  );
}

export default Header;
