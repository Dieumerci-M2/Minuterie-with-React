import React from "react";
import '../styles/App.css'
import BreakLength from "./BreakLength";
import Session from "./Session";
import SessionLength from "./SessionLength";

function App() {
  
  return (
    <div className="Container">
      <div className="Sub-Container">
        <BreakLength/>
        <Session/>
        <SessionLength/>
      </div>
    </div>
      
  );
}

export default App;
