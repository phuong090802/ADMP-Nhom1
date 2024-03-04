import { StyleSheet, View } from 'react-native';

import Header from './header/Header';

export default function Layout({ children }) {


  return (
    <View style={styles.rootContainer}>
      <Header />
      <View style={styles.contentContainer}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  contentContainer: {
    flex: 1,
  },
});
