import React from "react";

const Attribute = ({ attributeName, attributeValue }) => {
  if (attributeName == "rare") {
    attributeValue == 1
      ? (attributeValue = "Rare")
      : (attributeValue = "Not Rare");
  }
  return (
    <div className="attribute">
      <p className="attribute-value">{attributeValue}</p>
    </div>
  );
};

export default Attribute;
