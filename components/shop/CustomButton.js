import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Color from '../../constants/Color';
import Font from '../../constants/Font';

const CustomButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontFamily: Font.bold,
    fontSize: 15,
  },
  button: {
    backgroundColor: Color.accent,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
  },
});

export default CustomButton;
