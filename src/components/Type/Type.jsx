import './Type.css';

const Type = () => {
  return (
    <div className='type'>
      <ul className="type__list">
        <li className="type__item  type__item--active">pomodoro</li>
        <li className="type__item">short break</li>
        <li className="type__item">long break</li>
      </ul>
    </div>
  )
}

export default Type