import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)

  const onIncrement = () => {
    setCounter(counter + 1)
  }
  return (
    <div className="App">
      {counter}
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}

export default App;
