import React from "react";
import '../styles/App.css'
import BreakLength from "./BreakLength";
import Buttons from "./Buttons";
import Session from "./Session";
import SessionLength from "./SessionLength";

function App() {
  
  return (
     <div className="Container">
      <h1>Pomodoro</h1>
      <div className="Sub-Container">
        <BreakLength/>
        <div>
          <Session/>
          <Buttons/>
        </div>
        <SessionLength/>
      </div>
      
      </div>
      
  );
}

export default App;
