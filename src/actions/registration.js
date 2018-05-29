import {API_BASE_URL} from '../config';

export const registerUser = user => dispatch => {
  return fetch(`${API_BASE_URL}/api/users`, {
    method : 'POST',
    headers : {
      'content-type' : 'application/json'
    },
    body : JSON.stringify(user)
  })
    .then(results => results.json())
    //TO DO- handle form errors
    .catch(err => console.log(err));
};