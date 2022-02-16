import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HeaderText from './HeaderText';
import SubText from './SubText';

const OrderItem = props => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <HeaderText>{props.orderId}</HeaderText>
        </View>
        <View style={styles.detail}>
          <SubText>{props.amount}</SubText>
          <SubText>{props.orderDate}</SubText>
          <Icon.Button
            name="info-circle"
            size={25}
            color="gray"
            backgroundColor="transparent"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    margin: 10,
  },
  card: {
    width: '90%',
    maxWidth: '90%',
    height: 80,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 20,
    padding: 15,
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
});

export default OrderItem;
