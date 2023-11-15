import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    {/* <div className="home">
      <h1>Weather App</h1>
      <h1>Input city name</h1>
    </div> */}
    <App />
  </React.StrictMode>
);
