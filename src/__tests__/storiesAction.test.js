import { requestStories, REQUEST_STORIES, storiesSuccess, STORIES_SUCCESS, storiesError, STORIES_ERROR, charactersSuccess, CHARACTERS_SUCCESS, settingsSuccess, SETTINGS_SUCCESS, plotsSuccess, PLOTS_SUCCESS } from '../actions/stories';

describe('requestStories action', ()=>{
  it('Should return the correct action', ()=>{
    const action = requestStories();
    expect(action.type).toEqual(REQUEST_STORIES);
  });
});

describe('storiesSuccess action', ()=>{
  it('Should return the correct action', ()=>{
    const data = 'testData';
    const action = storiesSuccess(data);
    expect(action.type).toEqual(STORIES_SUCCESS);
    expect(action.data).toEqual(data);
  });
});

describe('storiesError action', ()=>{
  it('Should return the correct action', ()=>{
    const error = 'testError';
    const action = storiesError(error);
    expect(action.type).toEqual(STORIES_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('charactersSuccess action', ()=>{
  it('Should return the correct action', ()=>{
    const data = 'testData';
    const storyId = 4;
    const action = charactersSuccess(data,storyId);
    expect(action.type).toEqual(CHARACTERS_SUCCESS);
    expect(action.data).toEqual(data);
    expect(action.storyId).toEqual(storyId);
  });
});

describe('settingsSuccess action', ()=>{
  it('Should return the correct action', ()=>{
    const data = 'testData';
    const storyId = 4;
    const action = settingsSuccess(data,storyId);
    expect(action.type).toEqual(SETTINGS_SUCCESS);
    expect(action.data).toEqual(data);
    expect(action.storyId).toEqual(storyId);
  });
});

describe('plotsSuccess action', ()=>{
  it('Should return the correct action', ()=>{
    const data = 'testData';
    const storyId = 4;
    const action = plotsSuccess(data,storyId);
    expect(action.type).toEqual(PLOTS_SUCCESS);
    expect(action.data).toEqual(data);
    expect(action.storyId).toEqual(storyId);
  });
});

describe('getStories async action', ()=>{
  //To-Do
});

describe('updateStory async action', ()=>{
  //To-Do
});

describe('createStory async action', ()=>{
  //To-Do
});

describe('deleteStory async action', ()=>{
  //To-Do
});

describe('getCharacters async action', ()=>{
  //To-Do
});

describe('updateCharacter async action', ()=>{
  //To-Do
});

describe('createCharacter async action', ()=>{
  //To-Do
});

describe('deleteCharacter async action', ()=>{
  //To-Do
});

describe('getSettings async action', ()=>{
  //To-Do
});

describe('updateSetting async action', ()=>{
  //To-Do
});

describe('createSetting async action', ()=>{
  //To-Do
});

describe('deleteSetting async action', ()=>{
  //To-Do
});

describe('getPlots async action', ()=>{
  //To-Do
});

describe('updatePlot async action', ()=>{
  //To-Do
});

describe('createPlot async action', ()=>{
  //To-Do
});

describe('deletePlot async action', ()=>{
  //To-Do
});