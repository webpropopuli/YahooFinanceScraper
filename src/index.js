import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import MainPage from "./pages/main";

ReactDOM.render(
  <BrowserRouter>
    <Route component={MainPage} />
  </BrowserRouter>,
  document.getElementById("root")
);
