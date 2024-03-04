import { StyleSheet, View, Text } from 'react-native';

import { Colors, FONT } from '../../constants/styles';

export default function Message({ message, self }) {
  return (
    <View style={[styles.rootContainer, self ? styles.isRight : styles.isLeft]}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    flex: 1,
  },
  isLeft: {
    borderBottomLeftRadius: 0,
    alignSelf: 'flex-start',
    backgroundColor: Colors.black10,
  },
  isRight: {
    borderBottomRightRadius: 0,
    backgroundColor: '#8bc7ff',
    alignSelf: 'flex-end',
  },
  textContainer: {
    width: '80%',
  },
  text: {
    color: Colors.black75,
    fontFamily: FONT,
    fontSize: 16,
  },
});
