import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';

const ProductOverview = props => {
  const products = useSelector(state => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      renderItem={itemData => <Text>{itemData.item.title} </Text>}
    />
  );
};

const styles = StyleSheet.create({});

export default ProductOverview;
