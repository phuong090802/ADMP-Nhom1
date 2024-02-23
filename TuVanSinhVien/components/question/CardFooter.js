import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, StyleSheet, Text, Image } from 'react-native';

import { Colors, FONT } from '../../constants/styles';

export default function CardFooter({ answer, fullName }) {
  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <MaterialCommunityIcons
          name='arrow-left-top'
          size={24}
          color={Colors.primary}
        />
        <Text style={[styles.text, styles.title]}>Câu hỏi</Text>
      </View>
      <View style={styles.mainContainer}>
        <Text style={[styles.text, styles.secondaryTextColor, styles.content]}>
          {answer}
        </Text>
        <View style={styles.detailContainer}>
          <Text style={[styles.text, styles.detail]}>Phản hồi từ</Text>
          <Image
            style={styles.image}
            source={require('../../assets/images/sample-avatar.png')}
          />
          <Text
            style={[styles.secondaryTextColor, styles.detail, styles.username]}
          >
            {fullName}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    borderTopColor: Colors.black10,
    borderTopWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
  },
  mainContainer: {
    marginStart: 52,
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
    paddingVertical: 12,
  },
  image: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.primary,
    marginHorizontal: 3,
    width: 24,
    height: 24,
  },
  secondaryTextColor: {
    color: Colors.black75,
  },
  content: {
    fontSize: 13,
  },
  detail: {
    fontSize: 10,
  },
  username: {
    marginHorizontal: 3,
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
});
