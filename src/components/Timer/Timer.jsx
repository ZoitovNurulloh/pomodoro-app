import './Timer.css';
import { useContext, useEffect } from 'react';
import {GlobalContext} from '../../GlobalContext/Context';

const Timer = () => {
  const {state, dispatch} = useContext(GlobalContext);
  const {isRunning, timeLeft} = state;

  useEffect(() => {
    let interval = null;
    if (isRunning > 0 &&  timeLeft > 0) {
      interval = setInterval(() => {
        dispatch({type: "TICK"})
      }, 1000);
    }

    return () => clearInterval(interval)
  },[isRunning, timeLeft, dispatch])


  // MM:SS
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2,0)}:${s.toString().padStart(2,0)}`;
  }

  return (
    <div className="timer">
      <div className="timer__wrapper">
        <div className="timer__inner">
          <div className="timer__info">
            <h2 className='timer__time'>{formatTime(timeLeft)}</h2>
          {/* <button className='timer__button'
            onClick={() => dispatch({type: isRunning ? "PAUSE" : "START"})}>
          {isRunning ? "PAUSE" : "START"}</button> */}
            <button className='timer__button' >start</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Timer