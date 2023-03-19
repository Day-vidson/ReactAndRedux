import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import counterReducer from "./counterReducer";
import "./index.css";
import App from "./App";

var destination = document.querySelector("#container");

// Magazyn
var store = createStore(counterReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    destination
);