import { Context } from "context";
import React, { useContext } from "react";
import MovieSearchBlock from "../MovieSearchBlock";

const App: React.FC = () => {
  const { globalFunctions } = useContext(Context);
  const clickHandler = () => {
      globalFunctions.closeSelect();
  };
  return (
    <div className="App" onMouseUp={clickHandler}>
      <MovieSearchBlock />
    </div>
  );
};

export default App;
