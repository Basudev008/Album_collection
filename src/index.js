import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import albumCollection from "./reducers";
import thunk from "redux-thunk";

const store = createStore(albumCollection, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
