import "./App.css";
import Player from "./Components/player";
import TimeChallenge from "./Components/TimeChallenge";

function App() {
  return (
    <div className="intro">
      <Player />
      <TimeChallenge title="Beginner" timer={1} />
      <TimeChallenge title="Easy" timer={5} />
      <TimeChallenge title="Medium" timer={10} />
      <TimeChallenge title="Getting Tough" timer={15} />
      <TimeChallenge title="Pro Level" timer={20} />
      <TimeChallenge title="Advance Level" timer={60} />

    </div>
  );
}

export default App;

