import React from "react";
import { useContext } from "react";
import { CatExplorerContext } from "../context/CatExplorerContext";
import { bannableAttributes } from "../utilities/attributes";
import Attribute from "./Attribute";
const Results = () => {
  const { currentCat } = useContext(CatExplorerContext);

  return (
    <div className="results">
      <h4>{currentCat.name}</h4>
      {Object.entries(currentCat.breeds).map((attribute) => (
        <Attribute
          attributeName={attribute[0]}
          attributeValue={attribute[1]}
          bannable={bannableAttributes.includes(attribute[0])}
          key={attribute[0]}
        />
      ))}
      <img src={currentCat.url} width={300} />
    </div>
  );
};

export default Results;
