import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App({error, user}) {
  return (
    <div className="App">
      <Login />
      <h1>Signup</h1>
      <h2>{ error }</h2>
      <Signup />
    </div>
  );
}

const mapStateToProps = (state) => ({
  error: state.errorReducer,
  user: state.userReducer
});

export default connect(mapStateToProps, null)(App)
