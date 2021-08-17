import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Nav from './Components/Nav';
import ProtectedRoute from './Components/ProtectedRoute';
import Home from './Components/Home';
import store from './Reducers/index';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          
          <Switch>
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Signup" component={Signup} />
            <ProtectedRoute exact path='/' component={Home} />
          </Switch>
      </Provider>
    </div>
  );
}

export default App;
