import React, {useLayoutEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
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
            orderDate={itemData.item.orderDate}
            items={itemData.item.items}
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
    width: '100%',
    flexGrow: 1,
    alignItems: 'center',
    padding: 10,
  },
});

export default Orders;
