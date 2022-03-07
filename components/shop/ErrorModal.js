import React from 'react';
import {View, StyleSheet, Modal, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Color from '../../constants/Color';
import HeaderText from './HeaderText';
import SubText from './SubText';
import * as exceptionActions from '../../store/actions/ExceptionAction';

const ErrorModal = props => {
  const error = useSelector(state => state.exception.error);
  const isVisible = useSelector(state => state.exception.visible);
  console.log('Error In Modal: ', error);
  const dispatch = useDispatch();
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.container}>
        <View style={styles.errorContainer}>
          <HeaderText>Error Name</HeaderText>
          <View style={styles.divider} />
          <SubText style={styles.errorText}>Error Message</SubText>
          <View style={styles.divider} />
          <Button
            title="OK"
            onPress={() => {
              dispatch(exceptionActions.showOrHideErrorAction(null));
            }}
          />
        </View>
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
  errorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '80%',
    padding: 20,
    borderRadius: 15,
  },
  divider: {
    width: '100%',
    borderColor: Color.loader,
    borderWidth: 0.4,
    marginVertical: 10,
  },
});

export default ErrorModal;
