import axios from 'axios';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../actionTypes/index';

const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

const registerSuccess = (data) => ({
  type: REGISTER_SUCCESS,
  payload: data,
});

const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

// eslint-disable-next-line func-names
const registerUser = (userData) => async (dispatch) => {
  const urlData = 'https://warehouse-api-backend.herokuapp.com/api/v1/register';
  dispatch(registerRequest());
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(urlData, userData, axiosConfig.headers);
    dispatch(registerSuccess(res.data));
    window.location.href = '/';
  } catch (error) {
    dispatch(registerFailure(error));
  }
};

export default registerUser;
