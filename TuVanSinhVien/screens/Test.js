import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { Colors } from '../constants/styles';

export default function Test() {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>abc</Text>
      <Text>abc</Text>
      <Text>abc</Text>
      <Text>abc</Text>

      <LoadingOverlay message='Đang gửi email đến: phuongjihn@gmail.com' />
      <Text>abc</Text>
      <Text>abc</Text>
      <Text>abc</Text>
      <Text>abc</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black50,
  },
  modalContainer: {
    width: '80%',
    padding: 12,
    borderRadius: 16,
  },
});
