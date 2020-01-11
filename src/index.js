import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers/reducersForCars";

import App from "./App";

import "bulma/css/bulma.css";
import "./styles.scss";



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
