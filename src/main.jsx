import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CatExplorerContextProvider } from "./context/CatExplorerContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CatExplorerContextProvider>
      <App />
    </CatExplorerContextProvider>
  </React.StrictMode>
);
