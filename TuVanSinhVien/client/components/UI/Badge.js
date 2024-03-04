import { View, Text, StyleSheet } from 'react-native';

export default function Badge({ text }) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'red',
    borderRadius: 16,
    width: 16,
    height: 16,
    position: 'absolute',
    top: -8,
    end: -8,
    
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  text: {
    // alignSelf: 'center',
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
});
