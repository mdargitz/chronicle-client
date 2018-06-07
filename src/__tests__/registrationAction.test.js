import { requestRegistration, REQUEST_REGISTRATION, errorRegistration, ERROR_REGISTRATION } from '../actions/registration';

describe('requestRegistration action', ()=>{
  it('Should return the correct action', ()=>{
    const action = requestRegistration();
    expect(action.type).toEqual(REQUEST_REGISTRATION);
  });
});

describe('errorRegistration action', () =>{
  it('Should return the correcta action', ()=>{
    const error = 'testError';
    const action = errorRegistration(error);
    expect(action.type).toEqual(ERROR_REGISTRATION);
    expect(action.error).toEqual(error);
  });
});

describe('registerUser async action', ()=>{
  //To-do
});