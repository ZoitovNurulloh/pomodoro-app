import { createContext, useReducer } from "react";

export const GlobalContext = createContext();


const initialState = {
  mode:"pomodoro", // pomodoro | short | long
  // font:"",
  // color:"",
  time: 25 * 60,
  timeLeft: 25 * 60,
  isRunning: false,
}

const reducer = (state, action) => {
  const {type, payload} = action;

  switch(type) {
    case "TICK":
      return {...state, timeLeft: state.timeLeft - 1}
    case "START":
      return {...state, isRunning:true}
    case "PAUSE":
      return {...state, isRunning:false}
    case "RESET":
      return {...state, timeLeft:state.time, isRunning:false}

    default: return state;
  }
}


export const GlobalContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return ( <GlobalContext.Provider value={{
    state,
    dispatch,
  }}>
    {children}
  </GlobalContext.Provider>
  )
}