const API = 'https://warehouse-api-backend.herokuapp.com/api/v1/';

export const logIn = (user) => ({
  type: 'LOGIN',
  user,
})

export const createUser = (username, password) => (dispatch) => {
  fetch(`${API}users`, {
    method: 'post',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  }).then((res) => res.json())
    .then((response) => {
      if (response.username) {
        dispatch(logIn(response.username))
      }
      console.log(response)
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
      if (response.username) {
        dispatch(logIn(response.username))
      }
      console.log(response)
    })
    .catch((err) => { throw Error(`Error: ${err}`); });
}
