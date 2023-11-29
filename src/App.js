import { useEffect } from "react";
import { useState } from "react";

function App() {
  // Using usestate hooks to setting the time and running or not
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  // using useeffect to effects of the components and set up a time
  // basically useeffect will do something after render
  useEffect(() => {
    let interval;
    // defining the condition here and return
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  
  

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <div className="stopwatch-card">
        {/* set time in this section */}
        <p>{time}</p>
        <div className="buttons">
          <button onClick={handleStartStop}>
            {isRunning ? "Stop" : "Start"}
          </button>
          <button onClick={handleReset}>Reset</button>
          <button>Pause</button>
        </div>
      </div>
    </div>
  );
}

export default App;
