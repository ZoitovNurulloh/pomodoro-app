import './App.css'
import Timer from './components/Timer/Timer';
import Type from './components/Type/type';

function App() {

  return (
    <div className='app'>
      <div className="app-wrapper">
        <img className='app-logo' src="/public/image/logo.svg" alt="Pomodoro logo" width="156" height="32"/>
        <Type/>
        <Timer/>
      </div>
    </div>
  )
}

export default App
