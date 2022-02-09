import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Font from '../../constants/Font';

const SubText = props => {
  return <Text style={{...props.style, ...styles.text}}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Font.regular,
    fontSize: 18,
  },
});

export default SubText;
