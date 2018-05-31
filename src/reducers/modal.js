import {OPEN_MODAL, CLOSE_MODAL} from '../actions/modal';

const initialState = {
  isOpen : false
};

const modalReducer = (state = initialState, action) => {
  if (action.type === OPEN_MODAL){
    return {
      isOpen : true
    };
  }

  if (action.type === CLOSE_MODAL){
    return {
      isOpen : false
    };
  }
  else {
    return state;
  }
};

export default modalReducer;