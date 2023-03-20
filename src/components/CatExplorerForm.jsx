import React from "react";
import Discover from "./Discover";
import Info from "./Info";

const CatExplorerForm = () => {
  return (
    <form className="cat-explorer-form">
      <Info />
      <Discover />
    </form>
  );
};

export default CatExplorerForm;
