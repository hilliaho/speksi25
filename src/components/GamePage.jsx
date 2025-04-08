import SpinningWheel from "./SpinningWheel"
import Quiz from "./Quiz"
import '../GamePage.css';

const GamePage = () => {
  return(
    <div className="main">
      <SpinningWheel/>
      <Quiz />
    </div>
  )
}

export default GamePage