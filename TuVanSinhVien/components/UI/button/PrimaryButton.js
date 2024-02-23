import { Pressable, StyleSheet, Text } from 'react-native';

import { Colors, FONT } from '../../../constants/styles';

export default function PrimaryButton({ children, disabled, onPress, style }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.container,
        disabled && styles.disable,
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.text, style]}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: Colors.primary,
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
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: FONT,
  },
  disable: {
    backgroundColor: Colors.disabled,
  },
});
