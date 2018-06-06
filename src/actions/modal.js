//Simple action to set openModal to **true** in redux store (applies to all 'edit' modals)
export const OPEN_MODAL = 'OPEN_MODAL';
export const openModal = id => {
  return {
    type: OPEN_MODAL,
    id
  };
};

//Simple action to set openModal to **false** in redux store (applies to all 'edit' modals)
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

//Simple action to set openAbout to **true** in redux store (applies to all 'about' modals)
export const OPEN_ABOUT = 'OPEN_ABOUT';
export const openAbout = () => {
  return {
    type: OPEN_ABOUT
  };
};

//Simple action to set openAbout to **false** in redux store (applies to all 'about' modals)
export const CLOSE_ABOUT = 'CLOSE_ABOUT';
export const closeAbout = () => {
  return {
    type: CLOSE_ABOUT
  };
};