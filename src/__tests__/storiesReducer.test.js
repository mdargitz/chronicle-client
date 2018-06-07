import {requestStories, storiesSuccess, storiesError, 
  charactersSuccess, settingsSuccess, plotsSuccess} 
  from '../actions/stories';

import storyReducer from '../reducers/stories';

describe('storyReducer', ()=>{

  it('Should set the initial state when nothing is passed in', ()=>{
    const state = storyReducer(undefined, {type: '@@NOTATHING'});
    expect(state).toEqual({
      loading: false,
      error: false,
      stories: {}
    });
  });

  it('Should return the current state on an unknown action', ()=>{
    let currentState = {};
    const state = storyReducer(currentState, {type: '@@NOTATHING'});
    expect(state).toEqual(currentState);
  });

  describe('requestStories',()=>{
    it('Should set loading to true', ()=>{
      let state;
      state = storyReducer(state, requestStories());
      expect(state).toEqual({
        loading: true,
        error: false,
        stories: {}
      });
    });
  });

  describe('storiesError',()=>{
    it('Should set loading to true', ()=>{
      let state;
      const error = 'testError';
      state = storyReducer(state, storiesError(error));
      expect(state).toEqual({
        loading: false,
        error,
        stories: {}
      });
    });
  });

  describe('storiesSuccess',()=>{
    it('Should set stories equal to data', ()=>{
      let state;
      const data = [
        {
          id : 1,
          title : 'title1'},
        {
          id : 2,
          title : 'title2'}];
      state = storyReducer(state, storiesSuccess(data));
      expect(state).toEqual({
        loading: false,
        error: false,
        stories: {
          1 : {
            id : 1,
            title : 'title1'},
          2: {
            id : 2,
            title : 'title2'}
        }
      });
    });
  });

  const storyState = {
    loading: false,
    error: false,
    stories: {
      1 : {
        id : 1,
        title : 'title1'},
      2: {
        id : 2,
        title : 'title2'}
    }};

  const itemData =  [
    {
      id : 1,
      name : 'name1'},
    {
      id : 2,
      name : 'name2'}];

  describe('charactersSuccess',()=>{
    it('Should add characters array to relevant story', ()=>{
      let state;
      state = storyReducer(storyState, charactersSuccess(itemData, 1));
      expect(state).toEqual({
        loading: false,
        error: false,
        stories: {
          1 : {
            id : 1,
            title : 'title1',
            characters: [
              {
                id : 1,
                name : 'name1'},
              {
                id : 2,
                name : 'name2'}]},
          2: {
            id : 2,
            title : 'title2'}
        }
      });
    });
  });

  describe('settingsSuccess',()=>{
    it('Should add characters array to relevant story', ()=>{
      let state;
      state = storyReducer(storyState, settingsSuccess(itemData, 1));
      expect(state).toEqual({
        loading: false,
        error: false,
        stories: {
          1 : {
            id : 1,
            title : 'title1',
            settings: [
              {
                id : 1,
                name : 'name1'},
              {
                id : 2,
                name : 'name2'}]},
          2: {
            id : 2,
            title : 'title2'}
        }
      });
    });
  });

  describe('plotsSuccess',()=>{
    it('Should add characters array to relevant story', ()=>{
      let state;
      state = storyReducer(storyState, plotsSuccess(itemData, 1));
      expect(state).toEqual({
        loading: false,
        error: false,
        stories: {
          1 : {
            id : 1,
            title : 'title1',
            plots: [
              {
                id : 1,
                name : 'name1'},
              {
                id : 2,
                name : 'name2'}]},
          2: {
            id : 2,
            title : 'title2'}
        }
      });
    });
  });
});