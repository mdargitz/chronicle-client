import authReducer from './auth';
import { combineReducers } from 'redux';
import loginReducer from './login';
import modalReducer from './modal';
import navigationReducer from './navigation';
import { reducer as formReducer } from 'redux-form';
import storyReducer from './stories';

const rootReducer = combineReducers({
  form : formReducer,
  loginReducer,
  content : storyReducer,
  modal : modalReducer,
  navigation : navigationReducer,
  auth : authReducer
});

export default rootReducer;