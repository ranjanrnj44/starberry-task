import React from "react";
//logo import
//import images from "../../images/react-img.png";

function Header() {
  return (
    <nav
      className="navbar p-0 sticky-top"
      style={{ backgroundColor: "#008057" }}
    >
      <h1
        className="container-fluid display-5 fw-bolder header-link"
        style={{ color: "black" }}
      >
        The TrueValue
      </h1>
    </nav>
  );
}

export default Header;
