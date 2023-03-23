import React from "react";
import { useContext, useState, useEffect } from "react";
import { CatExplorerContext } from "../context/CatExplorerContext";
import { bannableAttributes } from "../utilities/attributes";
import "./styling/Attribute.css";

const Attribute = ({ attributeName }) => {
  const { dispatch, currentCat } = useContext(CatExplorerContext);
  const [attributeDisplayValue, setAttributeDisplayValue] = useState(
    currentCat.breeds[attributeName]
  );
  const bannable = bannableAttributes.includes(attributeName);

  if (attributeName == "rare" && attributeDisplayValue == 0) {
    setAttributeDisplayValue("Not Rare");
  }
  if (attributeName == "rare" && attributeDisplayValue == 1) {
    setAttributeDisplayValue("Rare");
  }
  const handleAttributeClick = () => {
    if (bannable) {
      dispatch({
        type: "ADD_TO_BAN_LIST",
        payload: [attributeName, currentCat.breeds[attributeName]],
      });
    }
  };

  useEffect(() => {
    setAttributeDisplayValue(currentCat.breeds[attributeName]);
    if (attributeName == "rare" && attributeDisplayValue == 0) {
      setAttributeDisplayValue("Not rare");
    }
    if (attributeName == "rare" && attributeDisplayValue == 1) {
      setAttributeDisplayValue("Rare");
    }
  }, [currentCat]);

  return (
    <div
      className={`attribute ${attributeName} ${bannable ? "bannable" : ""}`}
      onClick={handleAttributeClick}
    >
      <div>
        <p className="attribute-value">
          {attributeName == "wikipedia_url" ? (
            <a href={attributeDisplayValue} target="_blank">
              See the Wiki
            </a>
          ) : (
            attributeDisplayValue
          )}
        </p>
      </div>
    </div>
  );
};

export default Attribute;
