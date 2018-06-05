import {API_BASE_URL} from '../config';
import {SubmissionError} from 'redux-form';


//Set loading to true when initiating registration
export const REQUEST_REGISTRATION = 'REQUEST_REGISTRATION';
export const requestRegistration = () => {
  return {
    type : REQUEST_REGISTRATION
  };
};

//Add error to redux state if registraton problem
export const ERROR_REGISTRATION = 'ERROR_REGISTRATION';
export const errorRegistration = error => {
  return {
    type : ERROR_REGISTRATION,
    error
  };
};

//Async function to make post request to Users endpoint in server
//Given user, should return results (automatic login happens in component)
export const registerUser = user => dispatch => {
  dispatch(requestRegistration());
  return fetch(`${API_BASE_URL}/api/users`, {
    method : 'POST',
    headers : {
      'content-type' : 'application/json'
    },
    body : JSON.stringify(user)
  })
    .then(result => {
      if (result.ok){
        return result.json();
      }
      else {
        throw new SubmissionError( {_error:'Uh oh, registration failed! Username already exists.'});
      }
    })
    .catch(e => {
      let error = 'Uh oh, server error! Please reload or try again later';
      if (e.errors){
        error = e.errors._error;
      }
      dispatch(errorRegistration(error));});
};