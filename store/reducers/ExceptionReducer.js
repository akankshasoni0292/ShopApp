import {SHOW_ERROR, HIDE_ERROR} from '../actions/ExceptionAction';

const initialState = {
  error: null,
  visible: false,
};

export const exceptionReducer = (state = initialState, actions) => {
  const error = actions.errorData;
  console.log('Error Data: ', error);
  switch (actions.type) {
    case SHOW_ERROR:
      return {...state, error: error, visible: true};

    case HIDE_ERROR:
      return {...state, error: null, visible: false};
  }
  return state;
};
