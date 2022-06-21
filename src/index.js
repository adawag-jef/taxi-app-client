import React from "react";
import ReactDOM from "react-dom";
import "bootswatch/dist/lumen/bootstrap.css";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

ReactDOM.render(
  // changed
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
