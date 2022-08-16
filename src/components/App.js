import React from "react";
import {useState} from 'react';
function App() {
  const [valeur , setValeur] = useState(0)
const input = document.querySelector('.input');
const incremente = ()=>{
 
  setValeur(valeur +1)
}
const decremente = () =>{

  setValeur(valeur-1)
}

const reset = ()=>{
  setValeur(25)
}
  return (
     <div className="Container">
      <h1>Pomodoro</h1>
      <h1>{valeur}</h1>
      <button onClick={incremente}>+</button>
      <button onClick={decremente}>-</button>
      <span>{valeur}</span>
      <button onClick={reset}>Reset</button>

      </div>
      
  );
}

export default App;
