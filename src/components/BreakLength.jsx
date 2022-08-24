import React from 'react'
import '../styles/BreakLength.css'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {AiOutlineMinusCircle} from 'react-icons/ai'

const BreakLength = ({valeurbreak, incremente, decremente}) => {
    

  return (
    <div>
        <h3>Break Length</h3>
        <h1>{valeurbreak}</h1>
        <button onClick={incremente} id = 'btnPlus'>
        <AiOutlinePlusCircle />  
        </button>
        <button onClick={decremente} id = 'btnMinus' >
            <AiOutlineMinusCircle />
        </button>
    </div>
  )
}

export default BreakLength;