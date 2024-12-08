import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Counter Application</h1>        
        <div className="counter">
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <p>Current Count: {count}</p>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
      </header>
    </div>
  );
}

export default App;
