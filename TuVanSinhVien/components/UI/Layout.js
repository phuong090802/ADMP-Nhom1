import { StyleSheet, View } from 'react-native';

import Header from './header/Header';

export default function Layout({ children }) {


  return (
    <View style={styles.root}>
      <Header />
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: 16,
  },
  content: {
    flex: 1,
  },
});
