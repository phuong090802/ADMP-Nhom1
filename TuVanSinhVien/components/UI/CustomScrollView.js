import { StyleSheet, ScrollView } from 'react-native';

export default function CustomScrollView({ children }) {
  return (
    <ScrollView
      contentContainerStyle={styles.root}
      keyboardShouldPersistTaps='handled'
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
  },
});
