import React from "react";
import { Link } from "react-router-dom";

const css = {
  backgroundColor: "#ddd"
};

function Menubar(props) {
  return (
    <div className="navbar" style={css}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/secret">The Vault</Link>
        </li>
      </ul>
    </div>
  );
}
export default Menubar;
