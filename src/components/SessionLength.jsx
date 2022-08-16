import React from 'react'
import { useState } from 'react'
import '../styles/SessionLength.css'

const SessionLength = () => {
    const [valeur , setValeur] = useState(25)

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
        <h3>Session Length</h3>
        <h1>{valeur}</h1>
        <button onClick={incremente}>+</button>
        <button onClick={decremente}>-</button>
    </div>
  )
}

export default SessionLength;