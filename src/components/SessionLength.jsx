import React from 'react'
import '../styles/SessionLength.css'
import {AiOutlinePlusCircle} from 'react-icons/ai'

const SessionLength = ({valeur, incremente, decremente}) => {
  return (
    <div>
        <h3>Session Length</h3>
        <h1>{valeur}</h1>
        <button onClick={incremente} id ='btnPlus'>
        <AiOutlinePlusCircle />  
        </button>
        <button onClick={decremente} id = 'btnMinus'>-</button>
    </div>
  )
}

export default SessionLength;