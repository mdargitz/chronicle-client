import {API_BASE_URL} from '../config';

export const REQUEST_CHARACTERS = 'REQUEST_CHARACTERS';
export const requestCharacters = () => {
  return {type: REQUEST_CHARACTERS};
};

export const CHARACTERS_SUCCESS = 'CHARACTERS_SUCCESS';
export const charactersSuccess = data => {
  return {
    type: CHARACTERS_SUCCESS,
    data
  };  
};

export const CHARACTERS_ERROR = 'CHARACTERS_ERROR';
export const charactersError = error => {
  return {
    type: CHARACTERS_ERROR,
    error
  };
};

export const getCharacters = storyId => (dispatch, getState) => {
  const token = localStorage.getItem('token');
  dispatch(requestCharacters());
  // return fetch(`${API_BASE_URL}/api/characters/${storyId}`,{
  return fetch('http://localhost:8080/api/characters/3',{    
    headers : {
      'Authorization' : `Bearer ${token}`
    }
  })
    .then(result => {
      if (result.ok){
        console.log('result okay!')
        return result.json();
      }
      console.log('result totes not okay!');
      throw new Promise.reject(result.statusText);
      
    })
    .then(result => dispatch(charactersSuccess(result)))   
    .catch(error => dispatch(charactersError(error)));
};