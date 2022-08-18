import React from 'react'
import '../styles/Session.css'
import { useState } from 'react'

const Session = () => {
  const [initial, setInitial] = useState(25)
  const decrementer = ()=>{
    setInitial(initial+1)
  }
  return (
    <div>
        <h3>Session</h3>
        <span>{initial}</span>
        <div>
          <button onClick={decrementer} id='play'>Play</button>
          <button onClick={''} id ='pause' >Pause</button>
          <button onClick={''} id ='reset'>Reset</button>
        </div> 
    </div>
  )
}

export default Session;