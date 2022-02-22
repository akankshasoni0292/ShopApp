import moment from 'moment';
import Order from '../../models/Order';
import {HIDE_LOADER} from './LoaderAction';

export const ADD_ORDER = 'ADD_ORDER';
export const FETCH_ORDERS = 'FECTH_ORDERS';

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

export const fetchOrderAction = () => {
  return async dispatch => {
    const response = await fetch(
      'https://shopapp-rn-9290d-default-rtdb.firebaseio.com/orders/u1.json',
    );

    response.json().then(data => {
      const loadedOrders = [];

      for (const key in data) {
        loadedOrders.push(
          new Order(
            key.slice(1),
            data[key].cartItems,
            data[key].totalAmount,
            new moment(data[key].date).format('MMM Do YYYY, h:mm a'),
          ),
        );
      }

      loadedOrders.sort(function (a, b) {
        return (
          moment(b.orderDate, 'MMM Do YYYY, h:mm a') -
          moment(a.orderDate, 'MMM Do YYYY, h:mm a')
        );
      });

      dispatch({
        type: FETCH_ORDERS,
        fetchedOrders: loadedOrders,
      });

      dispatch({
        type: HIDE_LOADER,
        loading: false,
      });
    });
  };
};
