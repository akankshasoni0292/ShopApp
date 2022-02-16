import Order from '../../models/Order';
import {ADD_ORDER} from '../actions/OrderAction';

const initialState = {
  orders: [],
};

export const orderReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_ORDER:
      const newOrder = new Order(
        new Date().toDateString(),
        actions.orderData.items,
        actions.orderData.amount,
        new Date(),
      );
      console.log('New Order:', newOrder);
      return {...state, orders: state.orders.concat(newOrder)};
    default:
      return state;
  }
};
