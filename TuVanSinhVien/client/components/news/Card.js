import { View, Text, StyleSheet } from 'react-native';

import Line from './Line';
import { Colors, FONT } from '../../constants/styles';

export default function Card({ date, content }) {
  return (
    <View style={styles.rootContainer}>
      <Text style={[styles.text, styles.date]}>{date}</Text>
      <Text style={[styles.title, styles.text]}>{content}</Text>
      <Line />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 8,
  },
  text: {
    fontFamily: FONT,
  },
  date: {
    color: Colors.primary,
    fontSize: 10,
  },
  title: {
    fontSize: 16,
    color: Colors.black75,
    paddingVertical: 4,
  },
});
