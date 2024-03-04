import { View, Text, ActivityIndicator, StyleSheet, Modal } from 'react-native';

import { Colors, FONT } from '../../constants/styles';

export default function LoadingOverlay({ message }) {
  return (
    <Modal transparent={true} animationType='slide' visible={true}>
      <View style={styles.rootContainer}>
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size='large' color={Colors.primary} />
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: Colors.black50,
  },
  spinnerContainer: {
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    borderRadius: 6,
    flexDirection: 'row',
  },
  message: {
    fontSize: 16,
    fontFamily: FONT,
    color: Colors.black50,
    marginHorizontal: 6,
  },
});
