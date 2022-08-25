import React from 'react'
import '../styles/Session.css'
import {BsPlayCircle} from 'react-icons/bs'
import {FaRegPauseCircle} from 'react-icons/fa'
import {GrPowerReset} from 'react-icons/gr'
import audio from '../assets/Iphone-13-Prototype-2022.mp3'
import { useState } from 'react'

const Session = ({refleshPage , decrementer , minute , second,breaker}) => {
  const[alarm , setAlarm] = useState(audio)
  
  return (

    <div>
        <h1>25-5 Clock</h1>
        <h3>Session</h3>
        {/* <h2>{setAlarm(audio.onPlay())}</h2> */}
        <span>{minute}</span><span>:</span><span>{second}</span>
        <div>
          <button onClick={()=>{decrementer() }} id='play'>
            <BsPlayCircle />
          </button>
          <button onClick={()=>{breaker()}} id ='pause' >
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