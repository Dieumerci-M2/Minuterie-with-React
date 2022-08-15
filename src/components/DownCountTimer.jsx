import { useContext } from "react"
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import { settingContext } from "../context/settings"

const DownCountTimer = (key = 1, timer = 25, animate = true, children) => {

  const {pauseTimer} = useContext{settingContext}
  return (
  <CountdownCircleTimer>
    key = {key}
    isPlaying = {animate}
    duration = {timer * 60}
    color = {['#1E1E1E' , 0.5]}
    strokewidth = {6}
    trailcolor = {'#5E6C96'}
    onComplete = {()=>{
      pauseTimer()
    }}
  </CountdownCircleTimer>

  )
}

export default DownCountTimer;