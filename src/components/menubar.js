import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LoginoutButton } from "../utils/login";
import "./menubar.css";

export default class Menubar extends Component {
  constructor(props) {
    super(props);

    this.state = { loggedIn: false };
  }

  toggleState = st => {
    this.setState({ loggedIn: st });
  };

  render() {
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
        <LoginoutButton setLogin={this.toggleState} />
      </nav>
    );
  }
}
