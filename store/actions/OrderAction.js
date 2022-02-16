export const ADD_ORDER = 'ADD_ORDER';

export const addOrderAction = (cartItems, totalAmount) => {
  return {
    type: ADD_ORDER,
    orderData: {items: cartItems, amount: totalAmount},
  };
};
