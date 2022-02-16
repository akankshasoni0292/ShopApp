import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Font from '../../constants/Font';

const SubText = props => {
  return (
    <Text {...props} style={{...styles.text, ...props.style}}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Font.regular,
    fontSize: 18,
  },
});

export default SubText;
