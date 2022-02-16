import React, {useLayoutEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector, useDispatch} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import Color from '../../constants/Color';
import * as cartActions from '../../store/actions/CartAction';

const ProductOverview = props => {
  const products = useSelector(state => state.products.availableProducts);
  console.log('products', products);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Icon.Button
          name="shopping-cart"
          backgroundColor="transparent"
          underlayColor={Color.accent}
          onPress={() => {
            props.navigation.navigate('Cart');
          }}
        />
      ),
      headerLeft: () => (
        <Icon.Button
          name="bars"
          backgroundColor="transparent"
          underlayColor={Color.accent}
          onPress={() => {
            props.navigation.toggleDrawer();
          }}
        />
      ),
    });
  });

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
            viewDetail={() => {
              props.navigation.navigate('Details', {
                productId: itemData.item.id,
              });
            }}
            addToCart={() => {
              dispatch(cartActions.addtoCartAction(itemData.item));
            }}
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
    width: '100%',
  },
});

export default ProductOverview;
