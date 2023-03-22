import React from "react";
import Discover from "./Discover";
import Info from "./Info";
import { useContext } from "react";
import { CatExplorerContext } from "../context/CatExplorerContext";
import Results from "./Results";
import "./styling/CatExplorerForm.css";

const CatExplorerForm = () => {
  const { currentCat } = useContext(CatExplorerContext);
  return (
    <form className="cat-explorer-form">
      <Info />
      {Object.keys(currentCat).length > 0 && <Results />}
      <Discover />
    </form>
  );
};

export default CatExplorerForm;
