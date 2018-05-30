import jwtDecode from 'jwt-decode';
import {API_BASE_URL} from '../config';

export const SET_STATE_TOKEN = 'SET_STATE_TOKEN';
export const setStateToken = token => {
  return {
    type : SET_STATE_TOKEN,
    token
  };
};

export const REMOVE_STATE_TOKEN = 'REMOVE_STATE_TOKEN';
export const removeStateToken = () => {
  return {type : REMOVE_STATE_TOKEN};
};

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const requestLogin = () => {
  return {type : REQUEST_LOGIN};
};

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = currentUser => {
  return {
    type : LOGIN_SUCCESS,
    currentUser
  };
};

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const loginError = error => {
  return {
    type : LOGIN_ERROR,
    error
  };
};

//Helper function to store token into state and local storage
const storeToken = (token, dispatch) => {
  const decodeToken = jwtDecode(token);
  dispatch(setStateToken(token));
  dispatch(loginSuccess(decodeToken.user));
  try {
    localStorage.setItem('token', token);
  }
  //To Do - something with the catch?
  catch (e) {console.log(e);}
};

export const login = (username, password) => dispatch => {
  dispatch(requestLogin());
  return fetch(`${API_BASE_URL}/api/auth`, {
    method : 'POST',
    headers : {
      'content-type' : 'application/json'
    },
    body : JSON.stringify({username, password}) 
  })
    .then(result => result.json())
    .then(({authToken}) => storeToken(authToken, dispatch))
    .catch(e => console.log(e));
};