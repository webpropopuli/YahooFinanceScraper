import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import Auth from "../utils/auth";

/*
This is the destination page any time we try to reach a <RouteProtected> page. We get redirected here from the page component.
*/

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };
  login = () => {
    Auth.authenticate(() => {
      this.setState(() => ({ redirectToReferrer: true }));
    });
  };
  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };

    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }
    // else
    return (
      <div>
        <p>Log in to view this page ({from.pathname})</p>
        <button onClick={this.login}>Log in NOW</button>
      </div>
    );
  }
}

const LogoutButton = withRouter(({ history }) =>
  !Auth.isAuthenticated ? (
    <></>
  ) : (
    <div>
      <p>Hey {Auth.currUser}</p>
      <button
        onClick={() => {
          Auth.signout(() => history.push("/"));
        }}>
        Sign out
      </button>
    </div>
  )
);

export { Login, LogoutButton };
