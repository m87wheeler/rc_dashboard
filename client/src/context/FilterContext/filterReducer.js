export const filterReducer = (prevState, action) => {
  switch (action.type) {
    case "POPULATE_ENTRIES":
      return {
        ...prevState,
        entries: [...action.payload],
      };
    // case "FILTER_PERIOD":
    //   const filtered = prevState.entries.filter(
    //     (entry) =>
    //
    //   );
    //   return {
    //     ...prevState,
    //     filteredEntry: filtered[0],
    //   };
    case "FILTER_PERIOD":
      const index = prevState.entries.findIndex(
        (entry) =>
          entry.month === action.month && entry.year === parseInt(action.year)
      );
      return {
        ...prevState,
        filteredIndex: index,
      };
    default:
      return prevState;
  }
};
