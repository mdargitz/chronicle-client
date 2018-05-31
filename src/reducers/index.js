import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import loginReducer from './login';
import storyReducer from './stories';
import modalReducer from './modal';

const rootReducer = combineReducers({
  form : formReducer,
  loginReducer,
  content : storyReducer,
  modal : modalReducer
});

export default rootReducer;