import { StyleSheet, View } from 'react-native';

export default function IconNavigation({ children }) {
  return <View style={styles.root}>{children}</View>;
}

const styles = StyleSheet.create({
  root: {
    borderRadius: 16,
    backgroundColor: 'red'
  },
});
