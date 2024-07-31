import PropTypes from "prop-types";
import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },ref) {

  const userLost = remainingTime <= 0;
  const timeLeft = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  return (
    <dialog ref={ref} onClose={onReset}>
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your Score : {score}</h2>}
      <p>
        Your target time was <strong>{targetTime} Seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{timeLeft} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

ResultModal.propTypes = {
  remainingTime: PropTypes.number.isRequired,
  targetTime: PropTypes.number.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default ResultModal;
