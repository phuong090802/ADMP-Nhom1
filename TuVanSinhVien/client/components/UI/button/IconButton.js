import { Pressable, StyleSheet } from 'react-native';

export default function IconButton({ children, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.rootContainer, pressed && styles.pressed]}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginStart: 4,
  },
  pressed: {
    opacity: 0.7,
  },
});
