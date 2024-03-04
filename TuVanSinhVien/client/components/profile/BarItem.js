import { View, Text, Pressable, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Colors, FONT } from '../../constants/styles';

export default function BarItem({ title }) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>{title}</Text>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <AntDesign name='right' size={24} color={Colors.black75} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  title: {
    fontFamily: FONT,
    fontSize: 16,
    color: Colors.black75,
  },
  button: {
    backgroundColor: '#e3e7ea',
    padding: 6,
    borderRadius: 24,
  },
  pressed: {
    opacity: 0.7,
  },
});
