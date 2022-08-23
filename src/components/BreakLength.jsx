import React from 'react'
import { useState } from 'react'
import '../styles/BreakLength.css'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {AiOutlineMinusCircle} from 'react-icons/ai'

const BreakLength = () => {
    
    const [valeur , setValeur] = useState(5)

// Fonction pour Incrementer la valeur passée en paramètre

    const incremente = ()=>{
        setValeur(valeur+1)
    }
// Fonction pour Décrementer la valeur passée en parametre

    const decremente = ()=>{
        setValeur(valeur-1)
    }
  return (
    <div>
        <h3>Break Length</h3>
        <h1>{valeur}</h1>
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