import {SET_STATE_TOKEN, setStateToken, removeStateToken, 
  REMOVE_STATE_TOKEN, requestLogin, REQUEST_LOGIN, loginSuccess, 
  LOGIN_SUCCESS, loginError, LOGIN_ERROR} from '../actions/login';

describe('setStateToken action', ()=>{
  it('Should return the action', () => {
    const token = 'testToken';
    const action = setStateToken(token);
    expect(action.type).toEqual(SET_STATE_TOKEN);
    expect(action.token).toEqual(token);
  });
});

describe('removeStateToken action', ()=>{
  it('Should return the action', ()=>{
    const action= removeStateToken();
    expect(action.type).toEqual(REMOVE_STATE_TOKEN);
  });
});

describe('requestLogin action', () => {
  it('Should return the action', ()=>{
    const action = requestLogin();
    expect(action.type).toEqual(REQUEST_LOGIN);
  });
});

describe('loginSuccess action', ()=>{
  it('Should return the action', () =>{
    const currentUser = 'testUser';
    const action = loginSuccess(currentUser);
    expect(action.type).toEqual(LOGIN_SUCCESS);
    expect(action.currentUser).toEqual(currentUser);
  });
});

describe('loginError action', () => {
  it('Should return the action', ()=>{
    const error = 'testError';
    const action = loginError(error);
    expect(action.type).toEqual(LOGIN_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('storeToken function', () => {
  //To-do
});

describe('login async action', () => {
  //To-do
});

describe('logout async action', () => {
  //To-do
});