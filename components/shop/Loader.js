import React from 'react';
import {View, ActivityIndicator, StyleSheet, Modal} from 'react-native';
import {useSelector} from 'react-redux';
import Color from '../../constants/Color';

const Loader = props => {
  const isLoading = useSelector(state => state.loader.loading);
  return (
    <Modal animationType="fade" transparent={true} visible={isLoading}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Color.primary} animating />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.loader,
  },
});

export default Loader;
