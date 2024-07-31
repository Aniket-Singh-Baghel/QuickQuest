import { useRef, useState } from "react";


function Player() {
    const inputRef = useRef(null);
    const [playerName, setPlayerName] = useState(null);
    function handleClick() {
      setPlayerName(inputRef.current.value);
      inputRef.current.value = "";
    } 
  
    return (
      <main className="main">
          <h1 className="Player-title">The Alomost Final Countdown</h1>
          <p className="desc">
            Stop the timer once you estimate that the time is (almost) up
          </p>
          <h3 className="name">Welcome {playerName ?? "Unkown Entity"}</h3>
          <input type="text" ref={inputRef} />
          <button onClick={handleClick}>Submit</button>
      </main>
    );
}

export default Player