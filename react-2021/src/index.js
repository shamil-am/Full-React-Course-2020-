import React from "react";
import reactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./router/App";
import { BrowserRouter as Router } from "react-router-dom";
const root = document.getElementById("root");

reactDom.render(
  <Router>
    <App />
  </Router>,
  root
);
