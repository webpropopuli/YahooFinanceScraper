import React from "react";
import { BrowserRouter, Route, Redirect, withRouter } from "react-router-dom";
//BrowserRouter allows React Router to pass the app’s routing information down to any child component it needs (via context)

import About from "./about";
import Home from "./home";
import Secret from "./secret";
import Menubar from "../components/menubar";

import Auth from "../auth";

const RouteProtected = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const AuthButton = withRouter(({ history }) =>
  Auth.isAuthenticated ? (
    <div>
      <p>
        {" "}
        Hey User #43541
        <button
          onClick={() => {
            Auth.signout(() => history.push("/"));
          }}>
          Sign out
        </button>
      </p>{" "}
    </div>
  ) : (
    <div>
      <p>anonymous user</p>
    </div>
  )
);

// Display the main landing bage
function FrontPageAndLogin() {
  return (
    <BrowserRouter>
      <>
        <Menubar />
        <AuthButton />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <RouteProtected path="/secret" component={Secret} />
      </>
    </BrowserRouter>
  );
}

/*
This is the destination page any time we try to reach a <RouteProtected> page.
We get redirected here from the page component.
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

    return (
      <div>
        <p>Log in to view this page ({from.pathname})</p>
        <button onClick={this.login}>Log in NOW</button>
      </div>
    );
  }
}

export default FrontPageAndLogin;
