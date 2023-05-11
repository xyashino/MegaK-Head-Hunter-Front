import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./main.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <App />
    <Toaster position="top-right" />
  </>
);
