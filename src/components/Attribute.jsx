import React from "react";
import { useContext } from "react";
import { CatExplorerContext } from "../context/CatExplorerContext";
import { bannableAttributes } from "../utilities/attributes";
import "./styling/Attribute.css";

const Attribute = ({ attributeName }) => {
  const { dispatch, currentCat } = useContext(CatExplorerContext);

  const attribute = [attributeName, currentCat.breeds[attributeName]];
  const bannable = bannableAttributes.includes(attributeName);

  const handleAttributeClick = () => {
    if (bannable) {
      dispatch({
        type: "ADD_TO_BAN_LIST",
        payload: attribute,
      });
    }
  };

  return (
    <div
      className={`attribute ${attributeName} ${bannable ? "bannable" : ""}`}
      onClick={handleAttributeClick}
    >
      <div>
        <p className="attribute-value">
          {attributeName == "wikipedia_url" ? (
            <a href={attribute[1]} target="_blank">
              See the Wiki
            </a>
          ) : (
            attribute[1]
          )}
        </p>
      </div>
    </div>
  );
};

export default Attribute;
