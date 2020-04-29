import React from "react";
import CreateMonster from "./CreateMonster";

import "./App.css";

function App() {
  return (
    <div className="App">
      <img src="/images/logo.svg" alt="monster-img"></img>
      <h1>Monsters</h1>
      <CreateMonster />
    </div>
  );
}

export default App;
