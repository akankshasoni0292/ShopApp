import {HIDE_LOADER, SHOW_LOADER} from '../actions/LoaderAction';

const initialState = {
  loading: false,
};

export const loaderReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SHOW_LOADER:
      return {...state, loading: true};

    case HIDE_LOADER:
      return {...state, loading: false};
  }
  return state;
};
