/* eslint-disable */
import axios from 'axios';

const API = 'https://warehouse-api-backend.herokuapp.com/api/v1/';

export const logIn = (user) => ({
  type: 'LOGIN',
  user,
});

export const displayError = (error) => ({
  type: 'ERROR',
  error,
});

export const addItem = (item) => ({
  type: 'ADD',
  item,
});

export const getRequest = (data) => ({
  type: 'GET_REQUEST',
  payload: data,
});

const fetchItemsSuccess = (id) => ({
  type: 'FETCH_ITEMS_SUCCESS',
  payload: id,
});

const fetchItemsFailure = (error) => ({
  type: 'FETCH_ITEMS_FAILURE',
  payload: error,
});

export const createItem = (code, name, idealQuantity, currentQuantity, userId) => {
  fetch(`${API}items`, {
    method: 'post',
    body: JSON.stringify({
      code, name, ideal_quantity: idealQuantity, current_quantity: currentQuantity, user_id: userId,
    }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  }).then((res) => res.json())
    .then((res) => { console.log(res); });
};

export const fetchItems = () => (dispatch) => {
  dispatch(getRequest);
  axios.get(`${API}items`)
    .then((response) => {
      const items = response.data;
      dispatch(fetchItemsSuccess(items));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchItemsFailure(errorMsg));
    });
};

export const createUser = (username, password) => (dispatch) => {
  fetch(`${API}users`, {
    method: 'post',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  }).then((res) => res.json())
    .then((response) => {
      if (response.error) {
        dispatch(displayError(response.error));
      }
      if (response.username) {
        localStorage.setItem('username', JSON.stringify(response));
        dispatch(logIn(response));
      }
    })
    .catch((err) => { throw Error(`Error: ${err}`); });
};

export const fetchUser = (username, password) => (dispatch) => {
  fetch(`${API}authentication`, {
    method: 'post',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  }).then((res) => res.json())
    .then((response) => {
      if (response.error) {
        dispatch(displayError(response.error));
      }
      if (response.username) {
        localStorage.setItem('username', JSON.stringify(response));
        dispatch(logIn(response));
      }
      console.log(response);
    })
    .catch((err) => { throw Error(`Error: ${err}`); });
};
