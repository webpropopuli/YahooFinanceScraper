/*
This is the destination page any time we try to reach a <RouteProtected> page. We get redirected here from the page component.
*/
import React from "react";
import { Redirect } from "react-router-dom";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      loggedIn: false
    };
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };

    //const { redirectToReferrer } = this.state;

    if (this.state.redirectToReferrer === true) {
      return <Redirect to={from} />;
    } else
      return (
        <div>
          <p>Log in or register to view this page ({from.pathname})</p>
        </div>
      );
  }
}
