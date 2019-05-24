import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { LoginoutButton, RegisterButton } from "../utils/login";
import { RegisterForm } from "../pages/register";

import "./menubar.css";

export default class Menubar extends Component {
  constructor(props) {
    super(props);

    this.state = { reload: 0, loggedIn: false };
  }

  updateState = st => {
    this.setState({ loggedIn: st });
  };

  render(props) {
    let RegisterBtn;

    if (this.state.loggedIn) {
      RegisterBtn = <></>;
    } else {
      RegisterBtn = (
        <Link class="topButton" to="/register">
          Register{" "}
        </Link>
      );
    }

    return (
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio">The Vault</Link>
          </li>
          <span style={{ float: "right" }}> time now </span>
        </ul>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "start" }}>
          <LoginoutButton style={{ float: "left" }} setLogin={this.updateState} />
          {RegisterBtn}
        </div>
      </nav>
    );
  }
}
