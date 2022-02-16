import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import ShopNavigator from './navigation/ShopNavigator';
import {productReducer} from './store/reducers/ProductReducer';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import {composeWithDevTools} from 'redux-devtools-extension';
import {addOrRemoveCartReducer} from './store/reducers/CartReducer';
import {orderReducer} from './store/reducers/OrderReducer';

enableScreens();

const rootReducer = combineReducers({
  products: productReducer,
  cart: addOrRemoveCartReducer,
  order: orderReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <ShopNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
