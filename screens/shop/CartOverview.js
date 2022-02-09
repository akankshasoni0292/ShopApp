import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import CartItem from '../../components/shop/CartItem';
import CustomButton from '../../components/shop/CustomButton';
import HeaderText from '../../components/shop/HeaderText';
import SubText from '../../components/shop/SubText';

const CartList = props => {
  if (props.cartItems.length === 0) {
    return (
      <View style={styles.emptyList}>
        <SubText>Your cart is empty. Start shopping!</SubText>
      </View>
    );
  } else {
    return (
      <FlatList
        contentContainerStyle={styles.list}
        data={props.cartItems}
        renderItem={itemData => <CartItem product={itemData.item} />}
      />
    );
  }
};

const CartOverview = props => {
  const Carts = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const cartItemsArray = Object.values(Carts);
  console.log('Cart items arry', cartItemsArray);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.orderContainer}>
          <View style={styles.priceContainer}>
            <HeaderText>Total : </HeaderText>
            <HeaderText style={styles.text}>
              ${Math.abs(totalAmount).toFixed(2)}
            </HeaderText>
          </View>
          <CustomButton
            title="Order Now"
            onPress={() => {}}
            disabled={Object.keys(Carts).length}
          />
        </View>
      </View>
      <View style={styles.listContainer}>
        <CartList cartItems={cartItemsArray} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    width: '90%',
    height: 60,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 20,
  },
  orderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
  },
  listContainer: {
    flex: 1,
    alignItems: 'center',
  },
  list: {
    width: '95%',
    flexGrow: 1,
    alignItems: 'center',
    padding: 10,
  },
  emptyList: {
    flex: 1,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
  },
});

export default CartOverview;
