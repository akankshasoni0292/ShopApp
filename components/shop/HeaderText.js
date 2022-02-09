import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Color from '../../constants/Color';
import Font from '../../constants/Font';

const HeaderText = props => {
  return <Text style={{...styles.text, ...props.style}}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Font.bold,
    fontSize: 20,
    color: Color.accent,
  },
});

export default HeaderText;
