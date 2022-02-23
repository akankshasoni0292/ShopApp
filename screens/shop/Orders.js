import React, {useEffect, useLayoutEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import OrderItem from '../../components/shop/OrderItem';
import Color from '../../constants/Color';
import * as orderActions from '../../store/actions/OrderAction';
import * as loaderActions from '../../store/actions/LoaderAction';
import SubText from '../../components/shop/SubText';

const Orders = props => {
  const orders = useSelector(state => state.order.orders);
  const isLoading = useSelector(state => state.loader.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loaderActions.showOrHideLoaderAction(true));
    dispatch(orderActions.fetchOrderAction());
  }, [dispatch]);

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
  const emptyListInfo =
    !isLoading && orders.length === 0
      ? 'No orders placed. Start shopping!'
      : '';
  if (orders.length === 0) {
    return (
      <View style={styles.emptyList}>
        <SubText>{emptyListInfo}</SubText>
      </View>
    );
  } else {
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
  }
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
  emptyList: {
    flex: 1,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Orders;
