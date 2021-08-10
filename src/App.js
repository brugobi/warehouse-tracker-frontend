import React, { useEffect } from 'react';
import { createUser, fetchUser } from './Actions';
import './App.css';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchUser('try99', '123456')) }, []);
  return (
    <div className="App">
      testing
    </div>
  );
}

export default App;
