import {navigateTo} from '../actions/navigation';

import navigationReducer from '../reducers/navigation';

describe('navigationReducer', ()=>{

  it('Should set the initial state when nothing is passed in', ()=>{
    const state = navigationReducer(undefined, {type: '@@NOTATHING'});
    expect(state).toEqual({
      path : null
    });
  });

  it('Should return the current state on an unknown action', ()=>{
    let currentState = {};
    const state = navigationReducer(currentState, {type: '@@NOTATHING'});
    expect(state).toBe(currentState);
  });

  describe('navigateTo',()=>{
    it('Should set path', ()=>{
      let state;
      const path = 'testpath';
      state = navigationReducer(state, navigateTo(path));
      expect(state).toEqual({
        path
      });
    });
  });
});