import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import { colors, fonts } from '../../../constant';

const MyButton = ({ title, onPress, color }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    borderRadius: 16,
    paddingHorizontal: 8,
  },
  title: {
    fontFamily: fonts.BahnschriftBold,
    fontSize: 20,
    color: '#fff',
  },
});
