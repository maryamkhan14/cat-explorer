import React from "react";
import axios from "axios";
const handleDiscoverClick = async (e) => {
  e.preventDefault();
  let { data } = await getCat();
  console.log("cat: ", data);
};
const getCat = async () => {
  return await axios({
    method: "get",
    maxBodyLength: Infinity,
    url: "https://api.thecatapi.com/v1/images/search?has_breeds=1",
    headers: {
      "x-api-key":
        "live_oI1GpJbIyp8EEN9xKlduCRxeLfaJR3J40dlix5pdqQmPEmnKi08SjOpujYgD0LjP",
    },
  });
};
const Discover = () => {
  return (
    <div className="discover">
      <button type="submit" onClick={handleDiscoverClick}>
        Discover!
      </button>
    </div>
  );
};

export default Discover;
