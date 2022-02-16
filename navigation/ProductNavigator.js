import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductOverview from '../screens/shop/ProductsOverview';
import ProductDetails from '../screens/shop/ProductDetails';
import Color from '../constants/Color';
import CartOverview from '../screens/shop/CartOverview';

const ProductNavigationStack = createNativeStackNavigator();

const ProductNavigator = props => {
  return (
    <ProductNavigationStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Color.primary,
        },
        headerTintColor: 'white',
        //Resolve the issue!
        // headerLargeTitle: true,
        // headerLargeStyle: {
        //   backgroundColor: Color.primary,
        // },
        // headerLargeTitleShadowVisible: true,
        headerShadowVisible: true,
      }}>
      <ProductNavigationStack.Screen
        name="Products"
        component={ProductOverview}
      />
      <ProductNavigationStack.Screen
        name="Details"
        component={ProductDetails}
      />
      <ProductNavigationStack.Screen name="Cart" component={CartOverview} />
    </ProductNavigationStack.Navigator>
  );
};

export default ProductNavigator;
