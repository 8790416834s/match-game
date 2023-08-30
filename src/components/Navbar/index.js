import './index.css'

const Navbar = props => {
  const {score, count} = props

  return (
    <li className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="logo-img"
      />
      <div className="score-timer-container">
        <div className="score-container">
          <p>Score: </p>
          <p className="score">{score}</p>
        </div>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-img"
          />
          <p>{count} sec</p>
        </div>
      </div>
    </li>
  )
}
export default Navbar
