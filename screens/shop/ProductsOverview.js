import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';

const ProductOverview = props => {
  const products = useSelector(state => state.products.availableProducts);
  return (
    <View style={styles.listContainer}>
      <FlatList
        contentContainerStyle={styles.list}
        data={products}
        renderItem={itemData => (
          <ProductItem
            imageUrl={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            viewDetail={() => {}}
            addToCart={() => {}}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    alignItems: 'center',
  },
  list: {
    flexGrow: 1,
    //width: '95%',
    alignItems: 'center',
    paddingVertical: 15,
  },
});

export default ProductOverview;
