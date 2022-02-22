import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CartItem from './CartItem';
import HeaderText from './HeaderText';
import SubText from './SubText';

const OrderItem = props => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.detail}>
          <HeaderText>{props.orderId}</HeaderText>
          <SubText>${props.amount.toFixed(2)}</SubText>
        </View>
        <View style={styles.detail}>
          <View style={styles.order}>
            <SubText style={styles.date}>{props.orderDate}</SubText>
          </View>
          <View style={styles.info}>
            <Icon.Button
              name={showDetails ? 'angle-down' : 'angle-up'}
              size={23}
              color="gray"
              backgroundColor="transparent"
              underlayColor="transparent"
              onPress={() => setShowDetails(prevState => !prevState)}
            />
          </View>
        </View>
      </View>
      {showDetails && (
        <View style={styles.cart}>
          {props.items.map(item => (
            <CartItem key={item.id} product={item} />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '95%',
    maxWidth: '95%',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 20,
    padding: 20,
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  order: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    alignItems: 'center',
  },
  info: {
    width: '20%',
    alignItems: 'center',
  },
  date: {
    color: 'gray',
    fontSize: 17,
  },
  cart: {
    width: '100%',
  },
});

export default OrderItem;
