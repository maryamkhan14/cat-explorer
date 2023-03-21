import React from "react";
import { getCat } from "../utilities/getCat";
import { CatExplorerContext } from "../context/CatExplorerContext";
import { useContext } from "react";

const Discover = () => {
  const { banList, dispatch } = useContext(CatExplorerContext);
  const handleDiscoverClick = async (e) => {
    e.preventDefault();
    dispatch({
      type: "UPDATE_CURRENT_CAT",
      payload: await getCat(banList),
    });
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
