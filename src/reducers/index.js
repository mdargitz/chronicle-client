import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import loginReducer from './login';

const rootReducer = combineReducers({
  form : formReducer,
  loginReducer
});

export default rootReducer;