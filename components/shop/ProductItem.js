import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Color from '../../constants/Color';
import Font from '../../constants/Font';
import CustomButton from './CustomButton';

const ProductItem = props => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Image
          style={styles.image}
          source={{uri: props.imageUrl}}
          resizeMode="stretch"
        />
        <View style={styles.actionContainer}>
          <View style={styles.detailContainer}>
            <Text style={styles.details} numberOfLines={0}>
              {props.title}
            </Text>
            <Text style={styles.details}>${props.price} </Text>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton title="Details" onPress={props.viewDetails} />
            <CustomButton title="Add to Cart" onPress={props.addToCart} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {width: 2, height: 3},
    elevation: 5,
    margin: 10,
    backgroundColor: Color.view,
    borderRadius: 10,
  },
  itemContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  actionContainer: {
    width: '40%',
    height: '100%',
    padding: 5,
  },
  image: {
    width: '50%',
    height: '100%',
  },
  detailContainer: {
    alignItems: 'center',
    height: '55%',
  },
  details: {
    fontFamily: Font.bold,
    fontSize: 18,
    color: Color.accent,
    textAlign: 'center',
  },
  buttons: {
    padding: 10,
  },
  buttonContainer: {
    alignItems: 'center',
  },
});

export default ProductItem;
