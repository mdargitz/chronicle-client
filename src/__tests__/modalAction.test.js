import { openModal, OPEN_MODAL, closeModal, CLOSE_MODAL, openAbout, OPEN_ABOUT, closeAbout, CLOSE_ABOUT } from '../actions/modal';

describe('openModal action', ()=>{
  it('Should return the action', () => {
    const id = 4;
    const action = openModal(id);
    expect(action.type).toEqual(OPEN_MODAL);
    expect(action.id).toEqual(id);
  });
});

describe('closeModal action', () => {
  it('Should return the action', () => {
    const action = closeModal();
    expect(action.type).toEqual(CLOSE_MODAL);
  });
});

describe('openAbout action', () => {
  it('Should return the action', ()=>{
    const action = openAbout();
    expect(action.type).toEqual(OPEN_ABOUT);
  });
});

describe('closeAbout action', () => {
  it('Should return the action', ()=>{
    const action = closeAbout();
    expect(action.type).toEqual(CLOSE_ABOUT);
  });
});