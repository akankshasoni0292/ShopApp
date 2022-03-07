import React, {useLayoutEffect} from 'react';
import {StyleSheet, View, ScrollView, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../components/shop/CustomButton';
import HeaderText from '../../components/shop/HeaderText';
import SubText from '../../components/shop/SubText';
import Color from '../../constants/Color';
import * as cartActions from '../../store/actions/CartAction';

const ProductDetails = props => {
  const {productId} = props.route.params;
  const products = useSelector(state => state.products.availableProducts);
  const selectedProduct = products.find(product => product.id === productId);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: selectedProduct.title,
    });
  });

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: selectedProduct.imageUrl}}
            style={styles.image}
            resizeMode="stretch"
          />
        </View>
        {/* {errorMethod()} */}
        <View style={styles.cartContainer}>
          <View style={styles.priceContainer}>
            <HeaderText>Price:</HeaderText>
            <SubText>${selectedProduct.price}</SubText>
          </View>
          <CustomButton
            title="Add to Cart"
            onPress={() => {
              dispatch(cartActions.addtoCartAction(selectedProduct));
            }}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <HeaderText>Description</HeaderText>
          <SubText>{selectedProduct.description} </SubText>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    height: 400,
    backgroundColor: Color.view,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  priceContainer: {},
  cartContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
  },
  descriptionContainer: {
    width: '100%',
    paddingHorizontal: 15,
  },
});

export default ProductDetails;
