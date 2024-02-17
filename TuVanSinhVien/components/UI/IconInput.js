import { StyleSheet, TextInput, View } from 'react-native';

export default function IconInput({
  children,
  placeholder,
  placeholderTextColor,
  secureTextEntry
}) {
  return (
    <View style={styles.container}>
      {children}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 8,
  },
  input: {
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 18,
  },
});
