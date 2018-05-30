import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import loginReducer from './login';
import characterReducer from './characters';

const rootReducer = combineReducers({
  form : formReducer,
  loginReducer,
  characterReducer
});

export default rootReducer;