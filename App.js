import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import ShopNavigator from './navigation/ShopNavigator';
import {productReducer} from './store/reducers/ProductReducer';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import {composeWithDevTools} from 'redux-devtools-extension';
import {addOrRemoveCartReducer} from './store/reducers/CartReducer';
import {orderReducer} from './store/reducers/OrderReducer';
import ReduxThunk from 'redux-thunk';
import Loader from './components/shop/Loader';
import {loaderReducer} from './store/reducers/LoaderReducer';

enableScreens();

const rootReducer = combineReducers({
  products: productReducer,
  cart: addOrRemoveCartReducer,
  order: orderReducer,
  loader: loaderReducer,
});

const storeEnhancer = compose(
  applyMiddleware(ReduxThunk),
  //composeWithDevTools(),
);

const store = createStore(rootReducer, storeEnhancer);

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <ShopNavigator />
        </NavigationContainer>
        <Loader />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
