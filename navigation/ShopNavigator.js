import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import ProductNavigator from '../navigation/ProductNavigator';
import OrderNavigator from '../navigation/OrderNavigator';
import Color from '../constants/Color';

const ShopNavigatorDrawer = createDrawerNavigator();

const ShopNavigator = () => {
  return (
    <ShopNavigatorDrawer.Navigator
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
        headerShown: false,
      }}>
      <ShopNavigatorDrawer.Screen
        name="ProductDrawer"
        component={ProductNavigator}
        options={{
          title: 'Products',
        }}
      />
      <ShopNavigatorDrawer.Screen
        name="OrderDrawer"
        component={OrderNavigator}
        options={{
          title: 'Orders',
        }}
      />
    </ShopNavigatorDrawer.Navigator>
  );
};

export default ShopNavigator;
