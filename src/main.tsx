import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
import "./reset.css";
import App from "./App";
import { products, users } from "./data";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App product={products()} user={users()} />
  </React.StrictMode>
);
