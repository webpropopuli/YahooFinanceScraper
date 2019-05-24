import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
//BrowserRouter allows React Router to pass the app’s routing information down to any child component it needs (via context)
import "../App.css";

import About from "./about";
import Portfolio from "./portfolio";
import Menubar from "../components/menubar";
import Login from "../pages/login";
import Register from "../pages/register";

import Auth from "../utils/auth";
import Home from "./home";

/***************
 * Wrap protected routes in here. If Auth then render the route normally,
 * else redirect to login page, passing in from location as state
 */
const RouteProtected = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        Auth.authOk() ? (
          <Component user={Auth.currUser} {...props} />
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
};

// Display the main landing bage
function MainPage() {
  return (
    <BrowserRouter>
      <>
        <Menubar />

        <Route exact path="/" render={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <RouteProtected path="/Portfolio" component={Portfolio} />
      </>
    </BrowserRouter>
  );
}

export default MainPage;
