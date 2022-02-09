export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addtoCartAction = selectedProduct => {
  return {type: ADD_TO_CART, product: selectedProduct};
};

export const removeFromCartAction = productId => {
  return {type: REMOVE_FROM_CART, id: productId};
};
