import { StyleSheet, View } from 'react-native';

import { Colors } from '../../constants/styles';

export default function Container({ children, style }) {
  return (
    <View style={[styles.rootContainer, style]}>
      <View style={styles.formContainer}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
    borderTopStartRadius: 32,
    borderTopEndRadius: 32,
    backgroundColor: Colors.ghostWhite,
  },
  formContainer: {
    marginVertical: 16,
    marginHorizontal:32,
  },
});
