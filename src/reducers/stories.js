import { REQUEST_STORIES, STORIES_SUCCESS, STORIES_ERROR } from '../actions/stories';

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
    // console.log('stories success!');
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
  else {
    // console.log('back to the initial state?' + action.type);
    return {...state};
  }
};

export default storyReducer;