import {ERROR_REGISTRATION, REQUEST_REGISTRATION} from '../actions/registration';

const initialState = {
  error: null,
  loading: false
};

const authReducer = (state = initialState, action) => {
  if (action.type === ERROR_REGISTRATION) {
    return {
      ...state,
      loading: false,
      error : action.error
    };
  }

  if (action.type === REQUEST_REGISTRATION) {
    return {
      ...state,
      loading: true
    };
  }

  else return state;
};

export default authReducer;