import { CountdownCircleTimer } from "react-countdown-circle-timer"

const DownCountTimer = (key = 1, timer = 25, animate = true, children) => {
  return (
  <CountdownCircleTimer>
    key = {key}
    isPlaying = {animate}
    duration = {timer * 60}
    color = {['#1E1E1E' , 0.5]}
    strokewidth = {6}
    trailcolor = {'##5E6C96'}
    onComplete = {()=>{
      // stopAnimate()
    }}
  </CountdownCircleTimer>

  )
}

export default DownCountTimer;