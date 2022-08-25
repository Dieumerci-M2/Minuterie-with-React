import React from "react";
import '../styles/App.css'
import BreakLength from "./BreakLength";
import Session from "./Session";
import SessionLength from "./SessionLength";
import {useState} from 'react';
let interval;
function App() {
  const [second, setsecond] = useState(0)
  const [minute , setminute] = useState(25)
  const [valeurbreak , setValeurbreak] = useState(5)
  const [valeur , setValeur] = useState(25)
  //let [interval , setInter] = useState()
  

  // Fonction pour Incrementer la valeur passée en paramètre
  
      const incremente = ()=>{
          setValeur(valeur+1)
      }
  // Fonction pour Décrementer la valeur passée en parametre
  
      const decremente = ()=>{
          setValeur(valeur-1)
      }
       // Fonction pour Incrementer la valeur passée en paramètre
  
       const incrementeBreak = ()=>{
        setValeurbreak(valeurbreak+1)
    }
// Fonction pour Décrementer la valeur passée en parametre

    const decrementeBreak = ()=>{
        setValeurbreak(valeurbreak-1)
    }
    const decrementer = ()=>{

     interval = setInterval(()=>{
      setsecond((lastTime)=> {
        if(!lastTime) setminute(min => min - 1);
        return lastTime ? lastTime-1 : 59
      })
    }, 1000)
}
const refleshPage = ()=>{
  window.location.reload(false);
}
const breaker = ()=>{
  return clearInterval(interval)
}
  return (
    <div className="Container">
      <div className="Sub-Container">
        <BreakLength
          incremente = {incrementeBreak} decremente = {decrementeBreak}
          valeurbreak = {valeurbreak}
        />
        <Session
          refleshPage = {refleshPage} decrementer = {decrementer}
          valeur = {valeur} minute = {minute} second = {second}
          breaker = {breaker}
        />
        <SessionLength
          incremente = {incremente} decremente = {decremente}
          valeur = {valeur} 
        />  
      </div>
    </div>
      
  );
}

export default App;
