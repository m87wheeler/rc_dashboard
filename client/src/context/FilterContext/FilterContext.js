import { createContext, useReducer } from "react";
import { filterReducer } from "./filterReducer";

export const initialState = {
  month: "202012",
};

export const FilterContext = createContext(null);

export const FilterProvider = ({ children }) => {
  const [filterState, dispatchFilter] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={[filterState, dispatchFilter]}>
      {children}
    </FilterContext.Provider>
  );
};
