import React from "react";
import { useContext } from "react";
import { CatExplorerContext } from "../context/CatExplorerContext";
const Attribute = ({ attributeName, attributeValue, bannable }) => {
  const { dispatch } = useContext(CatExplorerContext);
  const handleAttributeClick = (e) => {
    dispatch({
      type: "ADD_TO_BAN_LIST",
      payload: { attributeName: attributeValue },
    });
  };
  return (
    <div
      className={`attribute ${attributeName} ${bannable ? "bannable" : ""}`}
      onClick={handleAttributeClick}
    >
      <div>
        <p className="attribute-value">
          {attributeName == "wikipedia_url" ? (
            <a href={attributeValue} target="_blank">
              See the Wiki
            </a>
          ) : (
            attributeValue
          )}
        </p>
      </div>
    </div>
  );
};

export default Attribute;
