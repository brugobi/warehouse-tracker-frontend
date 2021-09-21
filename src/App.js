import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ProtectedRoute from './Components/ProtectedRoute';
import Home from './Components/Home';
import CreateItem from './Components/CreateItem';
import Items from './Components/Items';
import Statistics from './Components/Statistics';
import store from './Reducers/index';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <>
            <Switch>
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Signup" component={Signup} />
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/CreateItem" component={CreateItem} />
              <ProtectedRoute exact path="/Items" component={Items} />
              <ProtectedRoute exact path="/Statistics" component={Statistics} />
            </Switch>
          </>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
