import React, { createContext, useContext, useState } from 'react';

const GridContext = createContext();

export const useGridContext = () => useContext(GridContext);

export const GridProvider = ({ children }) => {
  const [onCount, setOnCount] = useState(0);

  const handleToggle = (isOn) => {
    setOnCount((prevCount) => prevCount + (isOn ? 1 : -1));
  };

  return (
    <GridContext.Provider value={{ onCount, handleToggle }}>
      {children}
    </GridContext.Provider>
  );
};
