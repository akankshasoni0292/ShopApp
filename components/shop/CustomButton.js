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
    color: Color.accent,
    fontFamily: Font.bold,
    fontSize: 15,
  },
  button: {
    borderColor: Color.accent,
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 6,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 33,
  },
});

export default CustomButton;
