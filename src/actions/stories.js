import {API_BASE_URL} from '../config';

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

export const CHARACTERS_SUCCESS = 'CHARACTERS_SUCCESS';
export const charactersSuccess = (data, storyId) => {
  return {
    type: CHARACTERS_SUCCESS,
    data,
    storyId
  };
};

// *********** STORY ASYNC ACTIONS *********** //

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
    .catch(err => console.log(err));
 
};

//Edit a Story (general details)
export const updateStory = (updateObj, id) => dispatch => {
  dispatch(requestStories());
  console.log('update story running');
  const token = localStorage.getItem('token');
  return fetch(`${API_BASE_URL}/api/stories/${id}`, {
    method: 'PUT',
    headers: {
      'Authorization' : `Bearer ${token}`,
      'content-type' : 'application/json'
    },
    body: JSON.stringify(updateObj) 
  })
    .then(()=> {
      console.log('dispatching get stories');
      return dispatch(getStories());})
    .catch(() => console.log('an error!'));
};

//Create a Story
export const createStory = title => dispatch => {
  dispatch(requestStories());
  console.log(title);
  const token = localStorage.getItem('token');
  return fetch(`${API_BASE_URL}/api/stories`, {
    method: 'POST',
    headers: {
      'Authorization' : `Bearer ${token}`,
      'content-type' : 'application/json'
    },
    body: JSON.stringify({title}) 
  })
    .then(()=> dispatch(getStories()))
    .catch(() => console.log('an error!'));
};

//Delete a Story
export const deleteStory = id => dispatch => {
  dispatch(requestStories());
  const token = localStorage.getItem('token');
  return fetch(`${API_BASE_URL}/api/stories/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
    .then(() => dispatch(getStories()))
    .catch((err) => dispatch(storiesError(err)));
};


// *********** CHARACTER ASYNC ACTIONS *********** //
export const getCharacters = storyId => dispatch => {
  dispatch(requestStories());
  const token = localStorage.getItem('token');
  return fetch(`${API_BASE_URL}/api/characters/${storyId}`, {
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
    .then(data => dispatch(charactersSuccess(data, storyId)))
    .catch(err => console.log(err));

};