import loginReducer from '../reducers/login';

import{setStateToken, removeStateToken, requestLogin, loginSuccess, loginError} from '../actions/login';

describe('loginReducer', ()=>{


  it('Should set the initial state when nothing is passed in', ()=>{
    const state = loginReducer(undefined, {type: '@@NOTATHING'});
    expect(state).toEqual({
      loading: false,
      token : null,
      currentUser : null,
      error : null
    });
  });

  it('Should return the current state on an unknown action', ()=>{
    let currentState = {};
    const state = loginReducer(currentState, {type: '@@NOTATHING'});
    expect(state).toBe(currentState);
  });

  describe('setStateLoading',()=>{
    it('Should set login loading', ()=>{
      let state;
      const token = 'testToken';
      state = loginReducer(state, setStateToken(token));
      expect(state).toEqual({
        loading: false,
        token,
        currentUser : null,
        error : null
      });
    });
  });

  describe('requestLogin', ()=>{
    it('Should set loading to true', ()=>{
      let state;
      state = loginReducer(state, requestLogin());
      expect(state).toEqual({
        loading: true,
        token: null,
        currentUser : null,
        error : null
      });
    });
  });

  describe('removeStateToken', ()=>{
    it('Should set token to null', ()=>{
      let state;
      state = loginReducer(state, removeStateToken());
      expect(state).toEqual({
        loading: false,
        token: null,
        currentUser : null,
        error : null
      });
    });
  });

  describe('loginSuccess', ()=>{
    it('Should set loading to false, and current user', ()=>{
      let state;
      const currentUser = 'testUser';
      state = loginReducer(state, loginSuccess(currentUser));
      expect(state).toEqual({
        loading: false,
        token: null,
        currentUser,
        error : null
      });
    });

    describe('loginError', ()=>{
      it('Should set loading to false, and error', ()=>{
        let state;
        const error = 'testError';
        state = loginReducer(state, loginError(error));
        expect(state).toEqual({
          loading: false,
          token: null,
          currentUser: null,
          error
        });
      });
    });
  });
});