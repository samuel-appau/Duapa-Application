
import React, { createContext, useState, useMemo } from 'react';

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [searchState, setSearchState] = useState({
    searchMode: false,
  });
  const value = useMemo(() => ({ searchState, setSearchState }), [
    searchState,
    setSearchState,
  ]);
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchContextProvider;
