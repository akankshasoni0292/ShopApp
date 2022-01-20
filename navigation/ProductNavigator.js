import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductOverview from '../screens/shop/ProductsOverview';
import Color from '../constants/Color';

const ProductNavigationStack = createNativeStackNavigator();

const ProductNavigator = props => {
  return (
    <ProductNavigationStack.Navigator
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
      <ProductNavigationStack.Screen
        name="Products"
        component={ProductOverview}
      />
    </ProductNavigationStack.Navigator>
  );
};

export default ProductNavigator;
