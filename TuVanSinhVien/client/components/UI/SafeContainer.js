import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SafeContainer({ children }) {
  return <SafeAreaView style={styles.rootContainer}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
