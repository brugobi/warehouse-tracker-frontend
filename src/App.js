import React, { useEffect } from 'react';
import { createUser } from './Actions';
import './App.css';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(createUser('try99', '123456')) }, []);
  return (
    <div className="App">
      testing
    </div>
  );
}

export default App;
