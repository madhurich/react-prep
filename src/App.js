import './App.css';
import User from './components/User'
import { useState } from 'react';

function App() {
  const [name, setName] = useState("initial name")
  const changeName = (nameFromChild) => {
    setName(nameFromChild)
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      <User name={name} changeName={(n) => changeName(n)}/>
    </div>
  );
}

export default App;
