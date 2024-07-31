import PropTypes from "prop-types";
import winSound from "../assets/mixkit-video-game-win-2016.wav";
import loseSound from "../assets/mixkit-retro-arcade-lose-2027.wav";


import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const winAudio = new Audio(winSound);
const loseAudio = new Audio(loseSound);

function TimeChallenge({ title, timer }) {
  const ref = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(timer * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < timer * 1000;

  if (timeRemaining <= 0) {
    clearInterval(ref.current);
    dialog.current.showModal();
    loseAudio.currentTime = 0;
    loseAudio.play();
  }

  function handleReset() {
    setTimeRemaining(timer * 1000);
  }
  function handleStart() {
    ref.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.showModal();
    clearInterval(ref.current);
    winAudio.currentTime = 0;
    winAudio.play();
  }
  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={timer}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <div className="challenge">
        <h3 className="title">{title}</h3>
        <p className="timer">{timer} Second</p>
        <button
          className="start stop"
          onClick={timerIsActive ? handleStop : handleStart}
        >
          {timerIsActive ? "Stop" : "Start"} Challenge
        </button>
        <p className={timerIsActive ? "status-running" : "status"}>
          {timerIsActive ? "timer is running" : " timer is inactive"}
        </p>
      </div>
    </>
  );
}
TimeChallenge.propTypes = {
  title: PropTypes.string.isRequired,
  timer: PropTypes.number.isRequired,
};

export default TimeChallenge;
