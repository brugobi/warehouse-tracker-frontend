import React from 'react';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Login />
      <Signup />
    </div>
  );
}

export default App;
