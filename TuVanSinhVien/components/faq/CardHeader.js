import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, FONT } from '../../constants/styles';
import ToggleButton from '../UI/button/ToggleButton';

const ICON_SIZE = 16;

export default function CardHeader({ title, departmentName, fieldName, createdAt, views }) {
  return (
    <View style={styles.root}>
      <View style={styles.leftContainer}>
        <Text style={[styles.mainTitle, styles.text]}>{title}</Text>
        <View style={styles.middleContainer}>
          <Text style={[styles.middleTitle, styles.text]}>
            {departmentName}
          </Text>
          <Text
            style={[styles.middleTitle, styles.text, styles.middleTitleLeft]}
          >
            {fieldName}
          </Text>
        </View>
        <View style={styles.insideLeftContainer}>
          <View style={styles.iconTitle}>
            <MaterialIcons
              name='schedule'
              size={ICON_SIZE}
              color={Colors.black75}
            />
            <Text style={[styles.detail, styles.text]}>{createdAt}</Text>
          </View>

          <View style={styles.iconTitle}>
            <MaterialCommunityIcons
              name='eye-outline'
              size={ICON_SIZE}
              color={Colors.black75}
            />
            <Text style={[styles.detail, styles.text]}>{views} lượt xem</Text>
          </View>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <ToggleButton onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginVertical: 6,
  },
  expanded: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomWidth: 2,
    borderBottomColor: Colors.black10,
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    marginStart: 16,
  },
  insideLeftContainer: {
    flexDirection: 'row',
  },
  mainTitle: {
    fontSize: 16,
    lineHeight: 24,
  },
  image: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.primary,
    width: 24,
    height: 24,
  },
  text: {
    fontFamily: FONT,
    color: Colors.black75,
  },
  detail: {
    marginHorizontal: 6,
    alignSelf: 'center',
    fontSize: 10,
  },
  iconTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  middleContainer: {
    flexDirection: 'row',
    marginVertical: 6,
  },
  middleTitle: {
    backgroundColor: Colors.black10,
    borderRadius: 8,
    paddingHorizontal: 6,
  },
  middleTitleLeft: {
    marginHorizontal: 6,
  },
});
