import { createContext} from 'react'
import { useState } from 'react'
export const settingContext = createContext()
const settingsProvider = (props) => {
    const [pomodoro , setpomodoro] = useState(0)
    const [executing , setexecuting] = useState({})
    const [startAnimate , setstartAnimate] = useState(false) 

    function startTimer() {
        setstartAnimate(true)
    }
    function pauseTimer() {
        setstartAnimate(false)
    }
    function resumeAnimate(){
        setstartAnimate(false)
    }
    function updateExecute (settingupdate){
        setexecuting(settingupdate)
    }

    const setTimer = (evaluate) =>{
        switch (evaluate.active){
            case 'work' : 
                setpomodoro(evaluate.work)
                break;
            case 'short' : 
                setpomodoro(evaluate.short)
                break;
            case 'long' : 
            setpomodoro(evaluate.long)
            break;
            default : 

        }
    }

  return (
    <settingContext.Provider value={{pauseTimer , updateExecute }}>

        {props.children}

    </settingContext.Provider>
  )
}

export default settingsProvider;