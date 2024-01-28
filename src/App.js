import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("josy")
  return (
    <div className="App">
      <h1>{name}</h1>
    </div>
  );
}

export default App;
