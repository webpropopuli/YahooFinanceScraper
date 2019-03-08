import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import Auth from "../utils/auth";

/*
This is the destination page any time we try to reach a <RouteProtected> page. We get redirected here from the page component.
*/

class Login extends React.Component {
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
          <p>Log in to view this page ({from.pathname})</p>
        </div>
      );
  }
}

/************
 * One button for both will toggle login status.
 * Pages like '/' do not have props.location but '/portfolio' does
 */
const LoginoutButton = withRouter(props =>
  !Auth.authOk() ? (
    <div>
      <button
        onClick={function() {
          Auth.login(ok => {
            console.log("Auth.login()");
            if (ok) {
              if (undefined !== props.location.state) {
                props.history.push(props.location.state.from.pathname);
                console.log("login:", props.location.state);
              }
            } else {
              props.history.push("/");
              console.log("ERR: Auth.login()");
            }
            props.setLogin(Auth.authOk());
          });
        }}>
        Login
      </button>
    </div>
  ) : (
    <div>
      <button
        style={{ display: "inline" }}
        onClick={() => {
          Auth.logout(x => {
            console.log("logout:", x);
            props.history.push("/");
            props.setLogin(Auth.authOk());
          });
        }}>
        Logout
      </button>
      <p style={{ display: "inline", marginLeft: "10px" }}>Hey {Auth.currUser}</p>
    </div>
  )
);

export { Login, LoginoutButton };
