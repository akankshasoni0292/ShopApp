import React, {useLayoutEffect} from 'react';
import {StyleSheet, View, Flatlist, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Color from '../../constants/Color';

const Orders = props => {
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
    <View>
      <Text>Order's Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Orders;
