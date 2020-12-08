import React, { createContext } from "react";

export const Context = createContext({
  globalFunctions: {
    moveToSlide: (_: number) => {},
    closeSelect: () => {},
  },
});

export const ContextProvider: React.FC = ({ children }) => {
  const globalFunctions = {
    moveToSlide: (_: number) => {},
    closeSelect: () => {},
  };
  return (
    <Context.Provider value={{ globalFunctions }}>{children}</Context.Provider>
  );
};
