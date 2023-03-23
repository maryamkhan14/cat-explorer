import React from "react";
import { useContext, useState, useEffect } from "react";
import { CatExplorerContext } from "../context/CatExplorerContext";
import { bannableAttributes } from "../utilities/attributes";
import "./styling/Attribute.css";

const BannedAttribute = ({ attributeValue }) => {
  console.log("created");
  return (
    <div className={`attribute banned`}>
      <div>
        <p className="attribute-value">{attributeValue}</p>
      </div>
    </div>
  );
};

export default BannedAttribute;
