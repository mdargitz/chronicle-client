import {API_BASE_URL} from '../config';
import jwtDecode from 'jwt-decode';
import {SubmissionError} from 'redux-form';

//Add the jwt token sent by server to redux state
export const SET_STATE_TOKEN = 'SET_STATE_TOKEN';
export const setStateToken = token => {
  return {
    type : SET_STATE_TOKEN,
    token
  };
};

//Remove any current jwt token currently in the redux state
export const REMOVE_STATE_TOKEN = 'REMOVE_STATE_TOKEN';
export const removeStateToken = () => {
  return {type : REMOVE_STATE_TOKEN};
};

//Set loading to true when beginning to login
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const requestLogin = () => {
  return {type : REQUEST_LOGIN};
};

//Add currentUser to redux state after successful login
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = currentUser => {
  return {
    type : LOGIN_SUCCESS,
    currentUser
  };
};

//Add error info to redux state on unsuccessful login
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
  dispatch(loginSuccess(decodeToken.user.username));
  try {
    localStorage.setItem('token', token);
  }
  catch (e) {dispatch(loginError({
    error : 'Failure to load token into local storage. Please adjust your browser settings.'}));}
};

//Async function to make post request to server authentication
//On success, stores the authentication token in localStorage & the redux state
export const login = (username, password) => dispatch => {
  dispatch(requestLogin());
  return fetch(`${API_BASE_URL}/api/auth`, {
    method : 'POST',
    headers : {
      'content-type' : 'application/json'
    },
    body : JSON.stringify({username, password}) 
  })
    .then(result => {
      if (result.ok){
        return result.json();
      }
      else {
        throw new SubmissionError( {_error:'Uh oh, Login failed! Please try again or register a new account'});
      }
    })
    .then(({authToken}) => storeToken(authToken, dispatch))
    .catch(e => {
      dispatch(loginError(e.errors._error));});
};

//Async action to remove token from Local Storage
export const logout = () => () => {
  localStorage.clear();
};