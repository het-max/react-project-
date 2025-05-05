import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);

  return (

    <div className="card">

      <h1>Counter</h1>
   
      <h1>{value}</h1>

      <button onClick={() => setValue(value - 1)}>Decrement</button>

      <button onClick={() => setValue(0)}>Reset</button>

      <button onClick={() => setValue(value + 1)}>Increment</button>

    </div>

  );     
}
export default App;
