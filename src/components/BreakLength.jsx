import React from 'react'
import { useState } from 'react'
import '../styles/BreakLength.css'

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
        <h1>{valeur}</h1>
        <button onClick={incremente}>+</button>
        <button onClick={decremente}>-</button>
    </div>
  )
}

export default BreakLength;