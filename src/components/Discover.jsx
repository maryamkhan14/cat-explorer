import React from "react";
import { getCat } from "../services/getCat";
import { CatExplorerContext } from "../context/CatExplorerContext";
import { useContext } from "react";

const Discover = () => {
  const { banList, dispatch } = useContext(CatExplorerContext);
  const handleDiscoverClick = async (e) => {
    e.preventDefault();
    updateCat();
  };
  const updateCat = async () => {
    let data = await getCat(banList);
    dispatch({ type: "UPDATE_CURRENT_CAT", payload: data });
  };
  return (
    <div className="discover">
      <button type="submit" onClick={handleDiscoverClick}>
        Discover!
      </button>
    </div>
  );
};

export default Discover;
