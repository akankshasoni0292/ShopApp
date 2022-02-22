export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';

export const showOrHideLoaderAction = loading => {
  return {type: loading ? SHOW_LOADER : HIDE_LOADER};
};
