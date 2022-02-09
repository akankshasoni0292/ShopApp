import {abs} from 'react-native-reanimated';
import Cart from '../../models/Cart';
import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions/CartAction';

const initialState = {
  cartItems: {},
  totalAmount: 0,
};

export const addOrRemoveCartReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_TO_CART:
      const selectedProduct = actions.product;
      const title = selectedProduct.title;
      const price = selectedProduct.price;
      let updateOrNewCart;
      if (state.cartItems[selectedProduct.id]) {
        updateOrNewCart = new Cart(
          selectedProduct.id,
          title,
          price,
          state.cartItems[selectedProduct.id].quantity + 1,
          state.cartItems[selectedProduct.id].amount + price,
        );
      } else {
        updateOrNewCart = new Cart(selectedProduct.id, title, price, 1, price);
      }
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          [selectedProduct.id]: updateOrNewCart,
        },
        totalAmount: state.totalAmount + price,
      };

    case REMOVE_FROM_CART:
      const selectedCartItem = state.cartItems[actions.id];
      const currentQty = selectedCartItem.quantity;
      let updatedCartItems;
      if (currentQty > 1) {
        const updatedCartItem = new Cart(
          selectedCartItem.id,
          selectedCartItem.productTitle,
          selectedCartItem.productPrice,
          selectedCartItem.quantity - 1,
          selectedCartItem.amount - selectedCartItem.productPrice,
        );
        updatedCartItems = {...state.cartItems, [actions.id]: updatedCartItem};
      } else {
        updatedCartItems = {...state.cartItems};
        delete updatedCartItems[actions.id];
      }

      return {
        ...state,
        cartItems: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItem.productPrice,
      };
  }
  return state;
};
