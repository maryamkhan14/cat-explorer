import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CatExplorerForm from "./components/CatExplorerForm";

function App() {
  return (
    <div className="App">
      <CatExplorerForm />
      <BanList />
    </div>
  );
}

export default App;
