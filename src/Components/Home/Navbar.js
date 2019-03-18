import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ ...props }) => {
  const theme = props.theme === "dark" ? "black" : "white";

  return (
    <nav
      className="navbar fixed-top"
      style={{
        padding: 20,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: 1,
        textTransform: "uppercase"
      }}
    >
      <div className="container">
        <Link
          style={{
            alignSelf: "flex-start",
            fontSize: "1.25em",
            color: theme,
            textDecoration: "none"
          }}
          to="/home"
        >
          Blog
        </Link>

        <div style={{ alignContent: "flex-end" }}>
          <a style={{ textDecoration: "none", color: theme }} href={"/"}>
            About{" "}
          </a>
          <a style={{ textDecoration: "none", color: theme }} href={"/"}>
            {" "}
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
