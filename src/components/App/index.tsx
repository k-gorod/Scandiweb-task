import { Context } from "context";
import React, { useContext } from "react";
import MovieSearchBlock from "../MovieSearchBlock";

const App: React.FC = () => {
  const { globalFunctions } = useContext(Context);
  const clickHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> & { target: HTMLDivElement }
  ) => {
    if (
      !e.target.classList.contains("select__opt") &&
      !e.target.classList.contains("select__wrp")
    )
      globalFunctions.closeSelect();
  };
  return (
    <div className="App" onMouseUp={clickHandler}>
      <MovieSearchBlock />
    </div>
  );
};

export default App;
