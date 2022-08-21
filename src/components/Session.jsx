import React from 'react'
import '../styles/Session.css'
import { useState } from 'react'
import {BsPlayCircle} from 'react-icons/bs'
import {FaRegPauseCircle} from 'react-icons/fa'
import {GrPowerReset} from 'react-icons/gr'

const Session = () => {
  const [initial, setInitial] = useState(25)
  const decrementer = ()=>{
    setInitial(initial+1)
  }
  return (
    <div>
        <h1>Pomodoro</h1>
        <h3>Session</h3>
        <span>{initial}</span>
        <div>
          <button onClick={decrementer} id='play'>
            <BsPlayCircle />
          </button>
          <button onClick={''} id ='pause' >
            <FaRegPauseCircle />
          </button>
          <button onClick={''} id ='reset'>
            <GrPowerReset />
          </button>
        </div> 
    </div>
  )
}

export default Session;