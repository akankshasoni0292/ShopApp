import moment from 'moment';
import {v4 as uuidv4} from 'uuid';
import Order from '../../models/Order';
import {ADD_ORDER} from '../actions/OrderAction';

const initialState = {
  orders: [],
};

export const orderReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_ORDER:
      const newOrder = new Order(
        'ODR'.concat(uuidv4().slice(0, 8)),
        actions.orderData.items,
        actions.orderData.amount,
        new moment().format('MMM Do YYYY, h:mm a'),
      );
      console.log('New Order:', newOrder);
      return {...state, orders: state.orders.concat(newOrder)};
    default:
      return state;
  }
};
