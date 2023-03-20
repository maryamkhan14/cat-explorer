import { createContext, useReducer } from "react";
export const CatExplorerContext = createContext();

export const catExplorerReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_CURRENT_CAT":
      return { ...state, currentCat: action.payload };
    case "ADD_TO_BAN_LIST":
      let key = Object.keys(action.payload)[0];
      return { ...state, key: [...state.banList[key], action.payload[key]] };
    case "REMOVE_FROM_BAN_LIST":
      return {
        ...state,
        banList: banList.filter((attr) => attr != action.payload),
      };
    default:
      return state;
  }
};
export const CatExplorerContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(catExplorerReducer, {
    currentCat: {},
    banList: { origin: ["United States"] },
  });
  return (
    <CatExplorerContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CatExplorerContext.Provider>
  );
};
