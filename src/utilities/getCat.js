import axios from "axios";
import { attributesToKeep } from "./attributes";

const refineAttributes = (cat) => {
  cat.breeds = Object.entries(...cat.breeds).reduce(
    (accumulator, currentValue) => {
      if (attributesToKeep.includes(currentValue[0])) {
        return { ...accumulator, [currentValue[0]]: currentValue[1] };
      } else {
        return accumulator;
      }
    },
    {}
  );
  return cat;
};

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
  return refineAttributes(data[0]);
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
  while (!isValidCat(cat.breeds, banList)) {
    cat = await fetchCat();
  }

  return cat;
};
