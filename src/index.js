import React from "react";
import ReactDOM from "react-dom";

import FirebaseContext from "./context/firebase.context";

import { firebase, FieldValue } from "./lib/firebase";

import App from "./App";

import "./index.css";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
