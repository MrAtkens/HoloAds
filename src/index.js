import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import { LazyMotion, domAnimation } from "framer-motion"

Modal.setAppElement("#root");

ReactDOM.render(
    <LazyMotion features={domAnimation}>
        <App />
    </LazyMotion>,
  document.getElementById("root")
);
