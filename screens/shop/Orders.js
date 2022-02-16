import React, {useLayoutEffect} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import OrderItem from '../../components/shop/OrderItem';
import Color from '../../constants/Color';

const Orders = props => {
  const orders = useSelector(state => state.order.orders);
  console.log('orders', orders);
  useLayoutEffect(() => {
    props.navigation.setOptions({
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
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={orders}
        renderItem={itemData => (
          <OrderItem
            orderId={itemData.item.id}
            amount={itemData.item.totalAmount}
            orderDate={itemData.item.id}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flexGrow: 1,
    alignItems: 'center',
  },
});

export default Orders;
