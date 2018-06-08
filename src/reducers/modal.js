import {OPEN_MODAL, CLOSE_MODAL, OPEN_ABOUT, CLOSE_ABOUT} from '../actions/modal';

const initialState = {
  isOpen : false,
  aboutOpen : false,
  id: null
};

const modalReducer = (state = initialState, action) => {
  if (action.type === OPEN_MODAL){

    return {
      isOpen : true,
      id : action.id,
      aboutOpen: false
    };
  }

  if (action.type === CLOSE_MODAL){
    return {
      isOpen : false,
      id : null,
      aboutOpen:false
    };
  }

  if (action.type === OPEN_ABOUT){
    return {
      aboutOpen : true,
      isOpen: false,
      id: null
    };
  }

  if (action.type === CLOSE_ABOUT){
    return {
      aboutOpen : false,
      isOpen: false,
      id: null
    };
  }
  else {
    return state;
  }
};

export default modalReducer;