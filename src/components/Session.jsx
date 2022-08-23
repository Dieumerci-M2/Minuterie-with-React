import React from 'react'
import '../styles/Session.css'
import {BsPlayCircle} from 'react-icons/bs'
import {FaRegPauseCircle} from 'react-icons/fa'
import {GrPowerReset} from 'react-icons/gr'
import SessionLength from './SessionLength'
import {useState } from 'r
const Session = (props) => {
  const [second, setsecond] = useState(0)
  const [minute , setminute] = useState(25)


const decrementer = ()=>{

    // setminute(minute-1)
    // setsecond(59)
     setInterval(()=>{
      setsecond((lastTime)=> {
        if(!lastTime) setminute(min => min - 1);
        return lastTime ? lastTime-1 : 59
      })
    }, 400)
}
const refleshPage = ()=>{
  window.location.reload(false);
}

  return (
    <div>
        <h1>25-5 Clock</h1>
        <h3>Session</h3>
        <span>{minute}</span><span>:</span><span>{second}</span>
        <div>
          <button onClick={()=>{decrementer()}} id='play'>
            <BsPlayCircle />
          </button>
          <button onClick={()=>{}} id ='pause' >
            <FaRegPauseCircle />
          </button>
          <button onClick={()=>{refleshPage()}} id ='reset'>
            <GrPowerReset />
          </button>
        </div> 
    </div>
  )
}

export default Session;