import {API_BASE_URL} from '../config';
const defaultStoryPicture = 'data:image/png;base64,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';
const defaultCharacterPicture = 'https://impactspace.com/images/uploads/person-default.png';
const defaultSettingPicture = 'http://files.softicons.com/download/system-icons/web0.2ama-icons-by-chrfb/png/256x256/World%20-%20America.png';
const defaultPlotPicture = 'http://plugins.netbeans.org/data/images/1385845308_logo.png';


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
