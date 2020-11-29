import React, { createContext } from "react";

export const Context = createContext({
  globalFunctions: {
    moveToSlide: (number: number)=>{},
    closeSelect: ()=>{}
  }
});

export  const ContextProvider: React.FC = ({ children }) => {
    const globalFunctions = {
        moveToSlide: (number: number)=>{},
        closeSelect: ()=>{}
    };
    return (
        <Context.Provider value={{globalFunctions}} >
            {children}
        </Context.Provider>
    )
};
