import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>, 
  document.getElementById("root"));
