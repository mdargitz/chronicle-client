import {NAVIGATE_TO, navigateTo} from '../actions/navigation';

describe('navigateTo action', ()=>{
  it('Should return the correct action', ()=>{
    const path = 'testpath';
    const action = navigateTo(path);
    expect(action.type).toEqual(NAVIGATE_TO);
    expect(action.path).toEqual(path);
  });
});