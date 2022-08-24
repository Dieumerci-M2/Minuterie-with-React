import React from 'react'
import '../styles/Session.css'
import {BsPlayCircle} from 'react-icons/bs'
import {FaRegPauseCircle} from 'react-icons/fa'
import {GrPowerReset} from 'react-icons/gr'
import audio from '../assets/Iphone-13-Prototype-2022.mp3'

const Session = (props) => {
  
  return (
    <div>
        <h1>25-5 Clock</h1>
        <h3>Session</h3>
        <span>{props.minute}</span><span>:</span><span>{props.second}</span>
        <div>
          <button onClick={()=>{props.decrementer()}} id='play'>
            <BsPlayCircle />
          </button>
          <button onClick={()=>{clearInterval(props.interval)}} id ='pause' >
            <FaRegPauseCircle />
          </button>
          <button onClick={()=>{props.refleshPage()}} id ='reset'>
            <GrPowerReset />
          </button>
        </div> 
    </div>
  )
}

export default Session;