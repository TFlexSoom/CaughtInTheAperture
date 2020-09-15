/*
 * Tristan Hilbert
 * 9/12/2020
 * Entry File
 * 
 */

// Fonts
import "fontsource-roboto";
import "fontsource-noto-sans-jp";

// Stylesheets
import "./style/style.css";

import {App} from "./components/App";

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<App />, document.getElementById("root"));

module.hot.accept();