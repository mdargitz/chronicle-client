export const REQUEST_REGISTER_USER = 'REQUEST_REGISTER_USER';
export const requestRegisterUser = () => {
  return {
    type : REQUEST_REGISTER_USER
  };
};

export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const registerUserSuccess = (token) => {
  return {
    type : REGISTER_USER_SUCCESS,
    token
  };
};


export const registerUser = values => dispatch => {};