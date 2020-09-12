import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./ContextStateProvider";
import { countReducer, instialState } from "./reducer/countReducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={instialState} reducer={countReducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
