import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, StyleSheet, Text, Image } from 'react-native';
import RenderHtml from 'react-native-render-html';

import { Colors, FONT } from '../../constants/styles';

const ICON_SIZE = 24;
export default function CardFooter({ answer, fullName }) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <MaterialCommunityIcons
          name='arrow-left-top'
          size={ICON_SIZE}
          color={Colors.primary}
        />
        <Text style={[styles.text, styles.title]}>Phản hồi</Text>
      </View>
      <View style={styles.mainContainer}>
        {/* <Text style={[styles.text, styles.secondaryTextColor, styles.content]}>
          {answer}
        </Text> */}
        <View style={styles.content}>
          <RenderHtml
            contentWidth={0}
            source={{ html: answer }}
            systemFonts={[FONT]}
            enableExperimentalGhostLinesPrevention={true}
          />
        </View>
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
  rootContainer: {
    backgroundColor: 'white',
    borderTopColor: Colors.black10,
    borderTopWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
  },
  mainContainer: {
    marginStart: ICON_SIZE + 12,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    marginHorizontal: 12,
  },
  text: {
    fontFamily: FONT,
  },
  content: {
    color: Colors.black75,
    lineHeight: 18,
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
