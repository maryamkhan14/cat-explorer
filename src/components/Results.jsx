import React from "react";
import { useContext } from "react";
import { CatExplorerContext } from "../context/CatExplorerContext";

const Results = () => {
  const { currentCat } = useContext(CatExplorerContext);

  return (
    <div className="results">
      <h4>{currentCat.name}</h4>
    </div>
  );
};

export default Results;
