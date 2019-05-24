import React from "react";
import { withRouter } from "react-router-dom";
import Auth from "../utils/auth";
import RegisterForm from "../pages/register";

/************
 * One button for both will toggle login status.
 * Pages like '/' do not have props.location but '/portfolio' does
 */
const LoginoutButton = withRouter(props =>
  !Auth.authOk() ? (
    <div>
      <button
        onClick={function() {
          Auth.login(data => {
            console.log("Auth.login()", data);
            if (data.userValid) {
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
          console.log("Auth.logout()");
          Auth.logout(x => {
            props.history.push("/");
            props.setLogin(Auth.authOk());
          });
        }}>
        Logout
      </button>
      <p style={{ display: "inline", marginLeft: "10px" }}>Hey {Auth.state.currUser}</p>
    </div>
  )
);

/********** REGISTER */
//tbd this data needs to come from a form...
const dataIn = {
  email: "webpropopuli@gmail.com",
  password: "123456",
  name: "David"
};

const RegisterButton = withRouter(props => (
  <div>
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
));

const RegisterPopup = withRouter(props => (
  <div>
    <button
      onClick={function() {
        Auth.register(dataIn, dataOut => {
          console.log("Auth.register()", dataOut);
          if (dataOut.userValid) {
            alert("New user created"); //? working?
          }
          //tbd check for error also...
          props.history.push("/"); // return to initial screen
        });
      }}>
      Register
    </button>
  </div>
));

export { LoginoutButton, RegisterButton };
