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
import {exceptionReducer} from './store/reducers/ExceptionReducer';
import {Alert} from 'react-native';
import ErrorModal from './components/shop/ErrorModal';
import RNRestart from 'react-native-restart';
import * as exceptionActions from './store/actions/ExceptionAction';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';

enableScreens();

const rootReducer = combineReducers({
  products: productReducer,
  cart: addOrRemoveCartReducer,
  order: orderReducer,
  loader: loaderReducer,
  exception: exceptionReducer,
});

const storeEnhancer = compose(
  applyMiddleware(ReduxThunk),
  //composeWithDevTools(),
);

const store = createStore(rootReducer, storeEnhancer);

const jsExceptionHandler = (error, isFatal) => {
  if (error.message != null) {
    Alert.alert(
      error.name,
      '\n' + error.message + '\n' + error.componentStack,
      [
        {
          text: 'Restart',
          onPress: () => {
            RNRestart.Restart();
          },
        },
      ],
    );
    //store.dispatch(exceptionActions.showOrHideErrorAction(error));
  }
};

setJSExceptionHandler(jsExceptionHandler, true);

const nativeExceptionHandler = error => {
  if (error.message != null) {
    Alert.alert(
      error.name,
      '\n' + error.message + '\n' + error.componentStack,
      [
        {
          text: 'Restart',
          onPress: () => {
            RNRestart.Restart();
          },
        },
      ],
    );
    //store.dispatch(exceptionActions.showOrHideErrorAction(error));
  }
};

setNativeExceptionHandler(nativeExceptionHandler, false, false);

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <ShopNavigator />
        </NavigationContainer>
        <Loader />
        <ErrorModal />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
