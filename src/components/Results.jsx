import React from "react";
import { useContext } from "react";
import { CatExplorerContext } from "../context/CatExplorerContext";
import { bannableAttributes } from "../utilities/attributes";
import Attribute from "./Attribute";
const Results = () => {
  const { currentCat } = useContext(CatExplorerContext);
  return (
    <div className="results">
      <h4>About This Breed</h4>
      <div className="attributes">
        <Attribute
          attributeName="name"
          attributeValue={currentCat.breeds["name"]}
          bannable={true}
          key="name"
        />
        <Attribute
          attributeName="origin"
          attributeValue={currentCat.breeds["origin"]}
          bannable={true}
          key="origin"
        />

        <Attribute
          attributeName="rare"
          attributeValue={currentCat.breeds["rare"] == 0 ? "Not rare" : "Rare"}
          bannable={true}
          key="rare"
        />

        <Attribute
          attributeName="description"
          attributeValue={currentCat.breeds["description"]}
          bannable={false}
          key="description"
        />
        <div className="cat-image">
          <img src={currentCat.url} width={500} />
        </div>
      </div>
    </div>
  );
};

export default Results;
