export const SHOW_ERROR = 'SHOW_ERROR';
export const HIDE_ERROR = 'HIDE_ERROR';

export const showOrHideErrorAction = error => {
  console.log('Error in Action: ', error);
  return {type: error != null ? SHOW_ERROR : HIDE_ERROR, errorData: error};
};
