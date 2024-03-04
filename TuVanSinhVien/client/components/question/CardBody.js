import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import RenderHtml from 'react-native-render-html';

import { Colors, FONT } from '../../constants/styles';

const ICON_SIZE = 24;
export default function CardBody({ content }) {
  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <MaterialIcons
          name='question-mark'
          size={ICON_SIZE}
          color={Colors.primary}
        />
        <Text style={[styles.text, styles.title]}>Câu hỏi</Text>
      </View>
      <View style={styles.content}>
        <RenderHtml
          contentWidth={0}
          source={{ html: content }}
          systemFonts={[FONT]}
          enableExperimentalGhostLinesPrevention={true}
        />
        {/* <Text style={[styles.text, styles.content]}>{content}</Text> */}
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
    marginHorizontal: 12,
  },
  text: {
    fontFamily: FONT,
  },
  // content: {
  //   color: Colors.black75,
  //   lineHeight: 18,
  //   marginStart: ICON_SIZE + 12,
  // },
  content: {
    color: Colors.black75,
    marginStart: ICON_SIZE + 12,
  },
});
