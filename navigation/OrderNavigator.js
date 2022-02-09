import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Orders from '../screens/shop/Orders';
import Color from '../constants/Color';

const OrderNavigationStack = createNativeStackNavigator();

const OrderNavigator = () => {
  return (
    <OrderNavigationStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Color.primary,
        },
        headerTintColor: 'white',
        headerLargeTitle: true,
        headerLargeStyle: {
          backgroundColor: Color.primary,
        },
        headerLargeTitleShadowVisible: true,
        headerShadowVisible: true,
      }}>
      <OrderNavigationStack.Screen name="Order" component={Orders} />
    </OrderNavigationStack.Navigator>
  );
};

export default OrderNavigator;
