import React from "react";

const Attribute = ({ attributeName, attributeValue, bannable }) => {
  return (
    <div className={`attribute ${attributeName} ${bannable ? "bannable" : ""}`}>
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
