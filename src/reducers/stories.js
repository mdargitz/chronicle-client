import { REQUEST_STORIES, STORIES_SUCCESS, STORIES_ERROR, CHARACTERS_SUCCESS } from '../actions/stories';

const initialState = {
  loading: false,
  error: false,
  stories: {}
};

const storyReducer = (state=initialState, action) =>{
  if (action.type === REQUEST_STORIES) {
    return {
      ...state,
      loading: true
    };
  }

  if (action.type === STORIES_SUCCESS) {
    const stories = {};
    action.data.map(story => {
      return stories[story.id] = {...story};
    });
    return {
      ...state,
      loading: false,
      stories
    };
  }

  if (action.type === STORIES_ERROR){
    return {
      ...state,
      loading: false,
      error : action.error
    };
  }

  if(action.type === CHARACTERS_SUCCESS){
    //TO DO - clean this up if possible?
    const updatedStory = Object.assign({},state.stories[action.storyId],{
      characters : action.data
    });

    const updatedStories = {...state.stories};
    updatedStories[action.storyId] = updatedStory;

    return {
      ...state,
      loading: false,
      stories: updatedStories
    };
  }
  else {
    return {...state};
  }
};

export default storyReducer;