import {API_BASE_URL} from '../config';
const defaultStoryPicture = 'https://image.ibb.co/fr2L08/11254352304_380614c695_m.jpg';
const defaultCharacterPicture = 'https://impactspace.com/images/uploads/person-default.png';
const defaultSettingPicture = 'https://image.ibb.co/gwtb3T/Webp_net_resizeimage.png';
const defaultPlotPicture = 'https://image.ibb.co/ikrV08/1385845308_logo.png';


//Simple action to set loading to true when requesting stories list
export const REQUEST_STORIES = 'REQUEST_STORIES';
export const requestStories = () => {
  return {type: REQUEST_STORIES};
};

//Simple action to set stories object in redux state on successful get request
export const STORIES_SUCCESS = 'STORIES_SUCCESS';
export const storiesSuccess = data => {
  return {
    type: STORIES_SUCCESS,
    data
  };  
};

//Simple action to set error in redux state on unsuccessful get request
export const STORIES_ERROR = 'STORIES_ERROR';
export const storiesError = error => {
  return {
    type: STORIES_ERROR,
    error
  };
};

//Adds characters array to current stories list in redux store
export const CHARACTERS_SUCCESS = 'CHARACTERS_SUCCESS';
export const charactersSuccess = (data, storyId) => {
  return {
    type: CHARACTERS_SUCCESS,
    data,
    storyId
  };
};

//Adds settings array to current stories list in redux store
export const SETTINGS_SUCCESS = 'SETTINGS_SUCCESS';
export const settingsSuccess = (data, storyId) => {
  return {
    type: SETTINGS_SUCCESS,
    data,
    storyId
  };
};

//Adds plots array to current stories list in redux store
export const PLOTS_SUCCESS = 'PLOTS_SUCCESS';
export const plotsSuccess = (data, storyId) => {
  return {
    type: PLOTS_SUCCESS,
    data,
    storyId
  };
};



// *********** STORY ASYNC ACTIONS *********** //

//Get all Stories (general info) - called after every other async action
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
      throw new Error(result);
    })
    .then(data => dispatch(storiesSuccess(data)))
    .catch(err => {
      dispatch(storiesError(err));
    });
 
};

//Edit a Story (general details)
export const updateStory = (updateObj, id) => dispatch => {
  dispatch(requestStories());
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
      return dispatch(getStories());})
    .catch(() => {
      dispatch(storiesError('Server Error: Could not update this story. Please check your connection and reload'));
    });
};

//Create a Story
export const createStory = title => dispatch => {
  dispatch(requestStories());
  const token = localStorage.getItem('token');
  return fetch(`${API_BASE_URL}/api/stories`, {
    method: 'POST',
    headers: {
      'Authorization' : `Bearer ${token}`,
      'content-type' : 'application/json'
    },
    body: JSON.stringify({title, picture:defaultStoryPicture}) 
  })
    .then(result => {
      if (result.ok){
        return result.json();
      }
      else throw new Error({message: 'An error occurred! Please try again'});
    })
    .then(()=> dispatch(getStories()))
    .catch(() => {dispatch(storiesError(
      'Server Error: Could not add a new story. Please check your network connection and reload'));});
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
    .catch(() => {
      dispatch(storiesError('Server Error: Could not delete this story. Please check your connection and reload'));
    });
};






// *********** CHARACTER ASYNC ACTIONS *********** //
//get all - requires storyId
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
      throw new Error(result.statusText);
    })
    .then(data => dispatch(charactersSuccess(data, storyId)))
    .catch(() => {dispatch(storiesError('Server Error: Could not get characters. Please check your connection and reload'));
    });
};

//edit existing character - requires charater's id, the story id to which it belogs, and an object with updates
export const updateCharacter = (updateObj, id, storyId) => dispatch => {
  dispatch(requestStories());
  const token = localStorage.getItem('token');
  return fetch(`${API_BASE_URL}/api/characters/${storyId}/${id}`, {
    method: 'PUT',
    headers: {
      'Authorization' : `Bearer ${token}`,
      'content-type' : 'application/json'
    },
    body: JSON.stringify(updateObj) 
  })
    .then(()=> {
      return dispatch(getCharacters(storyId));})
    .catch(() => {dispatch(storiesError('Server Error: Could not edit character. Please check your connection and reload'));
    });
};

//add new character, requires character name and the story to which it is associated
export const createCharacter = (name, storyId) => dispatch => {
  dispatch(requestStories());
  const token = localStorage.getItem('token');
  return fetch(`${API_BASE_URL}/api/characters/${storyId}`, {
    method: 'POST',
    headers: {
      'Authorization' : `Bearer ${token}`,
      'content-type' : 'application/json'
    },
    body: JSON.stringify({name, picture: defaultCharacterPicture}) 
  })
    .then(()=> dispatch(getCharacters(storyId)))
    .catch(() => {dispatch(storiesError('Server Error: Could not create character. Please check your connection and reload'));
    });
};

//delete a character, requires character ID and the story ID to which it belongs
export const deleteCharacter = (id, storyId) => dispatch => {
  dispatch(requestStories());
  const token = localStorage.getItem('token');
  return fetch(`${API_BASE_URL}/api/characters/${storyId}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
    .then(() => dispatch(getCharacters(storyId)))
    .catch(() => {dispatch(storiesError('Server Error: Could not delete character. Please check your connection and reload'));
    });
};




// *********** Setting ASYNC ACTIONS *********** //
//get all settings associated with a certain story ID
export const getSettings = storyId => dispatch => {
  dispatch(requestStories());
  const token = localStorage.getItem('token');
  return fetch(`${API_BASE_URL}/api/settings/${storyId}`, {
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
    .then(data => dispatch(settingsSuccess(data, storyId)))
    .catch(() => {dispatch(storiesError('Server Error: Could not get settings. Please check your connection and reload'));
    });

};

// edit an existing setting
// requires the id of the setting, the story ID to which it belongs and an object representing updates
export const updateSetting = (updateObj, id, storyId) => dispatch => {
  dispatch(requestStories());
  const token = localStorage.getItem('token');
  return fetch(`${API_BASE_URL}/api/settings/${storyId}/${id}`, {
    method: 'PUT',
    headers: {
      'Authorization' : `Bearer ${token}`,
      'content-type' : 'application/json'
    },
    body: JSON.stringify(updateObj) 
  })
    .then(()=> {
      return dispatch(getSettings(storyId));})
    .catch(() => {dispatch(storiesError('Server Error: Could not update this setting. Please check your connection and reload'));
    });
};

//add a new setting- requires setting name and the story ID to which it belongs
export const createSetting = (name, storyId) => dispatch => {
  dispatch(requestStories());
  const token = localStorage.getItem('token');
  return fetch(`${API_BASE_URL}/api/settings/${storyId}`, {
    method: 'POST',
    headers: {
      'Authorization' : `Bearer ${token}`,
      'content-type' : 'application/json'
    },
    body: JSON.stringify({name, picture: defaultSettingPicture}) 
  })
    .then(()=> dispatch(getSettings(storyId)))
    .catch(() => {dispatch(storiesError('Server Error: Could not create this setting. Please check your connection and reload'));
    });
};

//delete a setting - requires setting Id and the story ID to which it belongs
export const deleteSetting = (id, storyId) => dispatch => {
  dispatch(requestStories());
  const token = localStorage.getItem('token');
  return fetch(`${API_BASE_URL}/api/settings/${storyId}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
    .then(() => dispatch(getSettings(storyId)))
    .catch(() => {dispatch(storiesError('Server Error: Could not delete this setting. Please check your connection and reload'));
    });
};

// *********** Plot ASYNC ACTIONS *********** //
//get all plots- requires storyId to which they are associated
export const getPlots = storyId => dispatch => {
  dispatch(requestStories());
  const token = localStorage.getItem('token');
  return fetch(`${API_BASE_URL}/api/plots/${storyId}`, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
    .then(result => {
      if (result.ok){
        return result.json();
      }
      throw new Error(result);
    })
    .then(data => dispatch(plotsSuccess(data, storyId)))
    .catch(() => {dispatch(storiesError('Server Error: Could not get all plot points. Please check your connection and reload'));
    });

};

// edit existing plot point
// requires plot point's ID, the story ID to which it belongs and an object representing updates
export const updatePlot= (updateObj, id, storyId) => dispatch => {
  dispatch(requestStories());
  const token = localStorage.getItem('token');
  return fetch(`${API_BASE_URL}/api/plots/${storyId}/${id}`, {
    method: 'PUT',
    headers: {
      'Authorization' : `Bearer ${token}`,
      'content-type' : 'application/json'
    },
    body: JSON.stringify(updateObj) 
  })
    .then(()=> {
      return dispatch(getPlots(storyId));})
    .catch(() => {dispatch(storiesError('Server Error: Could not update this plot point. Please check your connection and reload'));
    });
};

//add new plot point - requires name and story ID to which it belongs
export const createPlot = (name, storyId) => dispatch => {
  dispatch(requestStories());
  const token = localStorage.getItem('token');
  return fetch(`${API_BASE_URL}/api/plots/${storyId}`, {
    method: 'POST',
    headers: {
      'Authorization' : `Bearer ${token}`,
      'content-type' : 'application/json'
    },
    body: JSON.stringify({name, picture: defaultPlotPicture}) 
  })
    .then(()=> dispatch(getPlots(storyId)))
    .catch(() => {dispatch(storiesError('Server Error: Could not create this plot point. Please check your connection and reload'));
    });
};

//delete a plot point - requires plot point ID and the storyId to which it is associated
export const deletePlot = (id, storyId) => dispatch => {
  dispatch(requestStories());
  const token = localStorage.getItem('token');
  return fetch(`${API_BASE_URL}/api/plots/${storyId}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
    .then(() => dispatch(getPlots(storyId)))
    .catch(() => {dispatch(storiesError('Server Error: Could not delete this plot point. Please check your connection and reload'));
    });
};
