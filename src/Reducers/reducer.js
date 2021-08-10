import { combineReducers } from 'redux';

const user = '';
const error = '';

function userReducer(state = user, action) {
  switch (action.type) {
    case 'LOGIN':
      return action.user;
    default:
      return state;
  }
}

function errorReducer(state = error, action) {
  switch (action.type) {
    case 'ERROR':
      return action.error;
    default:
      return state;
  }
}

const reducers = {
  userReducer,
  errorReducer,
};

const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    localStorage.removeItem('token');
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
