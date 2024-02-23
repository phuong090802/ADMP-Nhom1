import { StyleSheet, ScrollView } from 'react-native';

export default function CustomScrollView({ children, style }) {
  return (
    <ScrollView
      contentContainerStyle={[styles.root, style]}
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
