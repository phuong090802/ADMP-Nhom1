import { StyleSheet, ScrollView } from 'react-native';

export default function CustomScrollView({ children, style }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[styles.rootContainer, style]}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flexGrow: 1,
  },
});
