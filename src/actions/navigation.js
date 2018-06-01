export const NAVIGATE_TO = 'NAVIGATE_TO';
export const navigateTo = path => {
  return {
    type: NAVIGATE_TO,
    path
  };
};