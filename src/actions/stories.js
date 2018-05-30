import {API_BASE_URL} from '../config';
import jwtDecode from 'jwt-decode';

export const REQUEST_STORIES = 'REQUEST_STORIES';
export const requestStories = () => {
  return {type: REQUEST_STORIES};
};

export const STORIES_SUCCESS = 'STORIES_SUCCESS';
export const storiesSuccess = data => {
  return {
    type: STORIES_SUCCESS,
    data
  };  
};

export const STORIES_ERROR = 'STORIES_ERROR';
export const storiesError = error => {
  return {
    type: STORIES_ERROR,
    error
  };
};

//Get all Stories (general info)
export const getStories = () => dispatch => {
  
  dispatch(requestStories());
  const token = localStorage.getItem('token');
  return fetch(`${API_BASE_URL}/api/stories`, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
    .then(result => {
      if (result.ok){
        return result.json();
      }
      throw new Promise.reject(result.statusText);
    })
    .then(data => dispatch(storiesSuccess(data)))
    // .catch(err => dispatch(storiesError(err)));
    .catch(err => console.log(err));
 
};

