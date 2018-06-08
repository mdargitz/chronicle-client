import {openModal, closeModal, openAbout, closeAbout} from '../actions/modal';

import modalReducer from '../reducers/modal';

describe('modalReducer', ()=>{

  it('Should set the initial state when nothing is passed in', ()=>{
    const state = modalReducer(undefined, {type: '@@NOTATHING'});
    expect(state).toEqual({
      isOpen : false,
      aboutOpen : false,
      id: null
    });
  });

  it('Should return the current state on an unknown action', ()=>{
    let currentState = {};
    const state = modalReducer(currentState, {type: '@@NOTATHING'});
    expect(state).toBe(currentState);
  });

  describe('openModal',()=>{
    it('Should set isOpen to true and set ID', ()=>{
      let state;
      const id = 4;
      state = modalReducer(state, openModal(4));
      expect(state).toEqual({
        isOpen : true,
        aboutOpen : false,
        id
      });
    });
  });

  describe('closeModal', ()=>{
    it('Should set isOpen to false and reset Id', ()=>{
      let state;
      state = modalReducer(state, closeModal());
      expect(state).toEqual({
        isOpen : false,
        aboutOpen : false,
        id : null
      });
    });
  });

  describe('openAbout', ()=>{
    it('Should set about to true', ()=>{
      let state;
      state = modalReducer(state, openAbout());
      expect(state).toEqual({
        aboutOpen: true,
        isOpen: false,
        id : null
      });
    });
  });

  describe('closeAbout', ()=>{
    it('Should set about to false', ()=>{
      let state;
      state = modalReducer(state, closeAbout());
      expect(state).toEqual({
        aboutOpen: false,
        isOpen : false,
        id : null
      });
    });
  });
});