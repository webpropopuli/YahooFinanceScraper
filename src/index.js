import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import MainPage from "./pages/front";

ReactDOM.render(
  <Router>
    <Route component={MainPage} />
  </Router>,
  document.getElementById("root")
);
