import React from 'react';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
      <Login />
      <h1>Signup</h1>
      <Signup />
    </div>
  );
}

export default App;
