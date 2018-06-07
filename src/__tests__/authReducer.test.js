import authReducer from '../reducers/auth';
import {errorRegistration, requestRegistration} from '../actions/registration';

describe('authReducer', ()=>{


  it('Should set the initial state when nothing is passed in', ()=>{
    const state = authReducer(undefined, {type: '@@NOTATHING'});
    expect(state).toEqual({
      error: null,
      loading: false
    });
  });

  it('Should return the current state on an unknown action', ()=>{
    let currentState = {};
    const state = authReducer(currentState, {type: '@@NOTATHING'});
    expect(state).toBe(currentState);
  });

  describe('requestRegistration',()=>{
    it('Should set auth loading', ()=>{
      let state;
      state = authReducer(state, requestRegistration());
      expect(state).toEqual({
        error: null,
        loading: true
      });
    });
  });

  describe('errorRegistration', ()=>{
    it('Should set auth error', ()=>{
      let state;
      state = authReducer(state, errorRegistration('testError'));
      expect(state).toEqual({
        error: 'testError',
        loading: false
      });
    });
  });
});