import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import loginReducer from './login';
import storyReducer from './stories';

const rootReducer = combineReducers({
  form : formReducer,
  loginReducer,
  content : storyReducer
});

export default rootReducer;