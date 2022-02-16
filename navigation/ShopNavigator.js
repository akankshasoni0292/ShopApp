import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import ProductNavigator from '../navigation/ProductNavigator';
import OrderNavigator from '../navigation/OrderNavigator';
import Color from '../constants/Color';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Font from '../constants/Font';

const ShopNavigatorDrawer = createDrawerNavigator();

const ShopNavigator = () => {
  return (
    <ShopNavigatorDrawer.Navigator
      screenOptions={{
        drawerActiveTintColor: Color.primary,
        headerShown: false,
        drawerType: 'slide',
      }}>
      <ShopNavigatorDrawer.Screen
        name="ProductDrawer"
        component={ProductNavigator}
        options={{
          drawerLabel: 'Products',
          drawerLabelStyle: {
            fontFamily: Font.bold,
            fontSize: 20,
          },
          drawerIcon: config => (
            <Icon name="shopping-cart" size={20} color={config.color} />
          ),
        }}
      />
      <ShopNavigatorDrawer.Screen
        name="OrderDrawer"
        component={OrderNavigator}
        options={{
          drawerLabel: 'Orders',
          drawerLabelStyle: {
            fontFamily: Font.bold,
            fontSize: 20,
          },
          drawerIcon: config => (
            <Icon name="bars" size={20} color={config.color} />
          ),
        }}
      />
    </ShopNavigatorDrawer.Navigator>
  );
};

export default ShopNavigator;
