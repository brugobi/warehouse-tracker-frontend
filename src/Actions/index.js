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

export const createItem = (code, name, ideal_quantity, current_quantity, user_id) => {
  fetch(`${API}items`, {
    method: 'post',
    body: JSON.stringify({code, name, ideal_quantity, current_quantity, user_id }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  }).then(res => res.json())
  .then(res => {console.log(res)})
}

export const createUser = (username, password) => (dispatch) => {
  fetch(`${API}register`, {
    method: 'post',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  }).then((res) => res.json())
    .then((response) => {
      if (response.error) {
        dispatch(displayError(response.error));
      }
      if (response.username) {
        localStorage.setItem('username', JSON.stringify(response))
        dispatch(logIn(response))
      }
    })
    .catch((err) => { throw Error(`Error: ${err}`); });
}

export const fetchUser = (username, password) => (dispatch) => {
  fetch(`${API}authenticate`, {
    method: 'post',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  }).then((res) => res.json())
    .then((response) => {
      if (response.error) {
        dispatch(displayError(response.error));
      }
      if (response.username) {
        localStorage.setItem('username', JSON.stringify(response))
        dispatch(logIn(response))
      }
      console.log(response)
    })
    .catch((err) => { throw Error(`Error: ${err}`); });
}
