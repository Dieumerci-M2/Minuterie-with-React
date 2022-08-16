import React from "react";
import '../styles/App.css'
import BreakLength from "./BreakLength";
import Buttons from "./Buttons";
import Session from "./Session";
import SessionLength from "./SessionLength";

function App() {
  
  return (
     <div className="Container">
      <BreakLength/>
      <div>
        <Session/>
        <Buttons/>
      </div>
      <SessionLength/>
      </div>
      
  );
}

export default App;
