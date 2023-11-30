import { useEffect } from "react";
import { useState } from "react";

function App() {
  // Using usestate hooks to setting the time and running or not
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState(0);

  const startTime = Date.now();
  // console.log(startTime);
  // using useeffect to effects of the components and set up a time
  // basically useeffect will do something after render

  // formatting time
  const formatTime = (ms) => {
    const pad = (num) => num.toString().padStart(2, "0");
    const padd = (num) => num.toString().padStart(4, "0"); // Adjust padding to 4 digits for milliseconds

    const milliseconds = Math.floor(ms);
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    return `${pad(hours)}:${pad(minutes % 60)}:${pad(seconds % 60)}:${padd(
      milliseconds % 1000
    )}`;
  };
  // console.log(formattedTime);

  useEffect(() => {
    let interval;
    // defining the condition here and return
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => Date.now() - startTime);
      }, 1);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, isPaused]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <div className="stopwatch-card">
        {/* set time in this section */}
        <p>{formatTime(time)}</p>
        <div className="buttons">
          <button onClick={handleStartStop}>
            {isRunning && !isPaused ? "Stop" : "Start"}
          </button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handlePause} disabled={!isPaused || isPaused}>Pause</button>
        </div>
      </div>
    </div>
  );
}

export default App;
