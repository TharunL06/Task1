import { useState } from "react";


function App() {

  // Storing value using use state
  const [ time, setTime] = useState({ms:0,s:0,m:0})


  return <div className="App">
    <h1>Stopwatch</h1>
    <div className="stopwatch-card">
      <p>00.00.0000</p>
      <div className="buttons">
        <button>Start</button>
        <button>Stop</button>
        <button>Pause</button>
      </div>
    </div>
  </div>;
}

export default App;
