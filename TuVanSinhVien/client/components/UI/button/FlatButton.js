import { Pressable, StyleSheet, Text } from 'react-native';

import { Colors, FONT } from '../../../constants/styles';

function FlatButton({ children, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.rootContainer.style,
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default FlatButton;

const styles = StyleSheet.create({
  rootContainer: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    textAlign: 'center',
    color: Colors.black75,
    fontFamily: FONT,
  },
});
