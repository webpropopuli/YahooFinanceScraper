import React from "react";
import { Link } from "react-router-dom";
import "./menubar.css";

function Menubar(props) {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">The Vault</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menubar;
