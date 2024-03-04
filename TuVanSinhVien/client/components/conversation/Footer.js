import { StyleSheet, View } from 'react-native';

import ChatInput from '../UI/input/ChatInput';
import { Colors } from '../../constants/styles';

export default function Footer({ onPress }) {
  return (
    <View style={styles.rootContainer}>
      <ChatInput onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.black10,
  },
});
