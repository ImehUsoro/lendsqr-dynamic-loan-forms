import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import { AnimatePresence } from "framer-motion";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AnimatePresence>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </AnimatePresence>
  </React.StrictMode>
);

reportWebVitals();
