import moment from 'moment';

export const ADD_ORDER = 'ADD_ORDER';

export const addOrderAction = (cartItems, totalAmount) => {
  const date = new moment();
  return async dispatch => {
    const response = await fetch(
      'https://shopapp-rn-9290d-default-rtdb.firebaseio.com/orders/u1.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cartItems,
          totalAmount,
          date: date.toISOString(),
        }),
      },
    );

    response.json().then(data => {
      dispatch({
        type: ADD_ORDER,
        orderData: {
          id: data.name,
          items: cartItems,
          amount: totalAmount,
          orderDate: date,
        },
      });
    });
  };
};
