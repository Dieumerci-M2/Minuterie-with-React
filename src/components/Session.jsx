import React from 'react'
import '../styles/Session.css'
import {BsPlayCircle} from 'react-icons/bs'
import {FaRegPauseCircle} from 'react-icons/fa'
import {GrPowerReset} from 'react-icons/gr'
import SessionLength from './SessionLength'
import {useState } from 'react'

const Session = (props) => {
  const [startTime, setstartTime] = useState(60)

const decrementer = ()=>{
  setInterval(()=>{
    setstartTime((lastTime)=> lastTime - 1)
  }, 1000)
}

  return (
    <div>
        <h1>Pomodoro</h1>
        <h3>Session</h3>
        <h3>{startTime}</h3>
        <div>
          <button onClick={()=>decrementer()} id='play'>
            <BsPlayCircle />
          </button>
          <button onClick={()=>{}} id ='pause' >
            <FaRegPauseCircle />
          </button>
          <button onClick={()=>{}} id ='reset'>
            <GrPowerReset />
          </button>
        </div> 
    </div>
  )
}

export default Session;