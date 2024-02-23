import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Colors, FONT } from '../../constants/styles';

export default function CardBody({ content }) {
  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <MaterialIcons name='question-mark' size={24} color={Colors.primary} />
        <Text style={[styles.text, styles.title]}>Câu hỏi</Text>
      </View>
      <View>
        <Text style={[styles.text, styles.content]}>{content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
  },
  text: {
    fontFamily: FONT,
  },
  content: {
    color: Colors.black75,
    lineHeight: 18,
  },
});
