import React from "react";
import "./styling/BanList.css";
import { useContext, useState, useEffect } from "react";
import { CatExplorerContext } from "../context/CatExplorerContext";
import Attribute from "./Attribute";
import BannedAttribute from "./BannedAttribute";
const BanList = () => {
  const { banList, banListVisible, dispatch } = useContext(CatExplorerContext);
  const [bannedVals, setBannedVals] = useState(new Set([]));
  useEffect(() => {
    let allVals = bannedVals;
    Object.keys(banList).forEach((key) => {
      allVals = new Set([...allVals, ...banList[key]]);
    });
    setBannedVals(allVals);
  }, [banList]);
  return (
    <div className={`ban-list-container`}>
      {bannedVals.size > 0 ? (
        <div
          className={`ban-list banned-attributes ${
            banListVisible ? "visible" : "invisible"
          }`}
        >
          <h1>Ban List</h1>
          {Array.from(bannedVals).map((bannedVal) => (
            <BannedAttribute attributeValue={bannedVal} />
          ))}
        </div>
      ) : (
        <div
          className={`ban-list info ${
            banListVisible ? "visible" : "invisible"
          }`}
        >
          <p>
            <b>No attributes in your ban list yet.</b>
          </p>
          <p>
            To ban an attribute from consequent searches, click it. (Hint: only
            attributes that turn red when hovered over are bannable.)
          </p>
        </div>
      )}
      <div
        className={`toggle-ban-list ${
          banListVisible ? "list-visible" : "list-invisible"
        }`}
        onClick={() => {
          dispatch({ type: "TOGGLE_BAN_LIST", payload: null });
        }}
      >
        <button />
      </div>
    </div>
  );
};

export default BanList;
