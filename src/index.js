import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/bootstrap-icons.min.css";
import "./assets/css/custom.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Provider } from "react-redux";
import ToastifyNotification from "./components/ToastifyNotification";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ToastifyNotification />
    <App />
  </Provider>
);
