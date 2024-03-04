import { StyleSheet, View } from 'react-native';

export default function IconNavigation({ children }) {
  return <View style={styles.rootContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  rootContainer: {
    borderRadius: 16,
    backgroundColor: 'red'
  },
});
