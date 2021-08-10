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
      // if (response.message) {
      //   dispatch(error(response.message))
      // }
      // if (response.user) {
      //   localStorage.setItem('token', response.user.token)
      //   let data = decode(response.user.token);
      //   let exp = data.exp * 1000
      //   if (new Date(exp) <= new Date()) {
      //     localStorage.removeItem('token')
      //     data = null;
      //     exp = null;
      //     return
      //   }
        console.log(response)
      // }
      
    })
    .catch((err) => { throw Error(`Error: ${err}`); });
}
