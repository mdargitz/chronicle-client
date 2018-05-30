import { SET_STATE_TOKEN, REMOVE_STATE_TOKEN, REQUEST_LOGIN, LOGIN_ERROR, LOGIN_SUCCESS } from '../actions/login';

const initialState = {
  loading: false,
  token : null,
  currentUser : null,
  error : null
};

const loginReducuer = (state = initialState, action ) => {
  if (action.type === SET_STATE_TOKEN){
    return {
      ...state,
      token : action.token
    };
  }
  if (action.type === REMOVE_STATE_TOKEN){
    return {
      ...state,
      token : null
    };
  }
  if (action.type === REQUEST_LOGIN){
    return {
      ...state,
      loading : true
    };
  }
  if (action.type === LOGIN_ERROR){
    return {
      ...state,
      error : action.error,
      loading: false
    };
  } 
  if (action.type === LOGIN_SUCCESS){
    //run thunk to dispach(pushtoStories), push to stories location react-router
    return {
      ...state,
      loading: false,
      currentUser : action.currentUser
    };
  }
  else{
    return state;
  }  
};

export default loginReducuer;