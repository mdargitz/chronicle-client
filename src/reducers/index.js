import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import loginReducer from './login';
import storyReducer from './stories';
import modalReducer from './modal';
import navigationReducer from './navigation';

const rootReducer = combineReducers({
  form : formReducer,
  loginReducer,
  content : storyReducer,
  modal : modalReducer,
  navigation : navigationReducer
});

export default rootReducer;