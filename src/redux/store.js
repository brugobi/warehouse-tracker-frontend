import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import registrationReducer from './user/registrationReducer';

const store = createStore(registrationReducer, applyMiddleware(thunk, logger));

export default store;
