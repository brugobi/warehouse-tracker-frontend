import {
  REGISTER,
  DELETE_REGISTRATION_SESSION,
} from '../actionTypes/index';

const initialState = {
  username: '',
  password: '',
  passwordConfirmation: '',
  isRegisteredAndLogged: false,
};

const registrationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      return {
        ...state,
        ...payload,
        isRegisteredAndLogged: true,
      };

    case DELETE_REGISTRATION_SESSION:
      return {
        ...state,
        ...payload,
        loading: false,
        isRegisteredAndLogged: false,
      };
    default:
      return state;
  }
};

export default registrationReducer;
