import { Pressable, StyleSheet, Text } from 'react-native';

import { FONT } from '../../../constants/styles';

export default function LoginButton({ children, onPress }) {
  return (
    <Pressable
    onPress={onPress}
      style={({ pressed }) => [styles.rootContainer, pressed && styles.pressed]}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: '#97ccfd',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    fontFamily: FONT,
  },
});
