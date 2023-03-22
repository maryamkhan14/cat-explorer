import { createContext, useReducer } from "react";
export const CatExplorerContext = createContext();

export const catExplorerReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_CURRENT_CAT":
      return { ...state, currentCat: action.payload };
    case "ADD_TO_BAN_LIST":
      let key = action.payload[0];
      if (state.banList.hasOwnProperty(key)) {
        return {
          ...state,
          banList: {
            ...state.banList,
            key: [...state.banList[key], action.payload[1]],
          },
        };
      } else {
        return {
          ...state,
          banList: {
            ...state.banList,
            [key]: [action.payload[1]],
          },
        };
      }
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
    banList: {},
  });
  return (
    <CatExplorerContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CatExplorerContext.Provider>
  );
};
