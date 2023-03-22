import React from "react";
import { useContext } from "react";
import { CatExplorerContext } from "../context/CatExplorerContext";
import Attribute from "./Attribute";
import "./styling/Results.css";

const Results = () => {
  const { currentCat } = useContext(CatExplorerContext);
  return (
    <div className="results">
      <h4>About This Breed</h4>
      <div className="attributes">
        <Attribute attributeName="name" key="name" />
        <Attribute attributeName="origin" key="origin" />
        <Attribute attributeName="rare" key="rare" />
        <Attribute attributeName="description" key="description" />
        <div className="cat-image">
          <img src={currentCat.url} width={500} />
        </div>
      </div>
    </div>
  );
};

export default Results;
