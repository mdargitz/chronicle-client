import { REQUEST_CHARACTERS, CHARACTERS_SUCCESS, CHARACTERS_ERROR } from '../actions/character';

const initialState = {
  characters: [],
  loading: false,
  error: null
};

const characterReducer = (state = initialState, action) =>{
  if (action.type === REQUEST_CHARACTERS){
    return {
      ...state,
      loading: true
    };
  }
  if (action.type === CHARACTERS_SUCCESS){
    console.log('made it to the reducer!');
    return {
      ...state,
      loading: false,
      characters : action.data,
      error: null
    };
  }
  if (action.type === CHARACTERS_ERROR){
    return {
      ...state,
      loading: false,
      characters : [],
      error: action.error
    };
  }
  else {
    return state;
  }
};

export default characterReducer;