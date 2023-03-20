import axios from "axios";
const fetchCat = async () => {
  let { data } = await axios({
    method: "get",
    maxBodyLength: Infinity,
    url: "https://api.thecatapi.com/v1/images/search?has_breeds=1",
    headers: {
      "x-api-key":
        "live_oI1GpJbIyp8EEN9xKlduCRxeLfaJR3J40dlix5pdqQmPEmnKi08SjOpujYgD0LjP",
    },
  });
  return data[0];
};

const isValidCat = (catAttributes, banList) => {
  for (let banAttr of Object.keys(banList)) {
    if (banList[banAttr].includes(catAttributes[banAttr])) {
      return false;
    }
  }
  return true;
};

export const getCat = async (banList) => {
  let cat = await fetchCat();
  while (!isValidCat(...cat.breeds, banList)) {
    cat = await fetchCat();
  }
  return cat;
};
