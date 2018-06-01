import {NAVIGATE_TO} from '../actions/navigation';

const initialState = {
  path : null
};

export default function navigationReducer(state = initialState, action){
  if (action.type === NAVIGATE_TO){
    return {
      path : action.path
    };
  }
  else {
    return state;
  }
}