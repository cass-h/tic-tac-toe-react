import React, { useState } from "react";
import "./App.css";
import { Board } from "./Board/Board";

function App() {
  const [x, setX] = useState<boolean>(true);
  const Context = React.createContext(x);
  return (
    <div className="App">
      <h1>Tic Tac Toe!</h1>
      <p onClick={() => setX(!x)}>{x ? "X" : "O"}'s start</p>
      <Context.Provider value={x}>
        <Board xStart={x} />
      </Context.Provider>
    </div>
  );
}

export default App;
