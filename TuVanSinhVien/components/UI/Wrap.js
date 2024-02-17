import { StyleSheet, View } from 'react-native';

import { Colors } from '../../constants/styles';

export default function Wrap({ children, style }) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.form}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderTopStartRadius: 32,
    borderTopEndRadius: 32,
    backgroundColor: Colors.ghostWhite,
  },
  form: {
    margin: 32,
  },
});
