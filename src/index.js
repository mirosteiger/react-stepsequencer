import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./fonts/minimal.otf";
import "./fonts/MavenPro-Black.ttf";
import "./fonts/MavenPro-Bold.ttf";
import "./fonts/MavenPro-Medium.ttf";
import "./fonts/MavenPro-Regular.ttf";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App tab="home" />
  </React.StrictMode>
);
