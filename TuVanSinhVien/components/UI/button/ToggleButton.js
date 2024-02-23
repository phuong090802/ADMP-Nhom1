import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

import { Colors } from '../../../constants/styles';

const ICON_SIZE = 16;

export default function ToggleButton({ onPress }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleToggle() {
    setIsExpanded((prevData) => !prevData);
    onPress();
  }

  return (
    <Pressable
      onPress={handleToggle}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <Ionicons
        name={isExpanded ? 'caret-up-sharp' : 'caret-down-sharp'}
        size={ICON_SIZE}
        color='white'
        style={styles.icon}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    borderRadius: 8,
    padding: 10,
  },
});
