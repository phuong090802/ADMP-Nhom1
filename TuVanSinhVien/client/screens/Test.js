import { StyleSheet, View } from 'react-native';
import HeaderButton from '../components/UI/header/HeaderButton';
import { Colors } from '../constants/styles';

export default function Test() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <HeaderButton />
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
