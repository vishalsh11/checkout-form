import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
