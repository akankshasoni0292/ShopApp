import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Color from '../../constants/Color';
import HeaderText from './HeaderText';
import SubText from './SubText';
import * as cartActions from '../../store/actions/CartAction';
import {useDispatch} from 'react-redux';

const CartItem = props => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <HeaderText numberOfLines={2}>{props.product.productTitle}</HeaderText>
        <SubText>${props.product.productPrice.toFixed(2)}</SubText>
      </View>
      <View style={styles.quantityContainer}>
        <SubText>{props.product.quantity}</SubText>
      </View>
      <View style={styles.deleteContainer}>
        {props.deletable && (
          <Icon.Button
            name="trash-alt"
            backgroundColor="transparent"
            underlayColor={Color.view}
            color="red"
            onPress={() => {
              dispatch(cartActions.removeFromCartAction(props.product.id));
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 85,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityContainer: {
    width: '30%',
    alignItems: 'center',
  },
  productContainer: {
    width: '50%',
    paddingLeft: 20,
  },
  deleteContainer: {
    width: '20%',
    alignItems: 'flex-end',
  },
});

export default CartItem;
