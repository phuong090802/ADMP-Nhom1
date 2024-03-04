import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Colors, FONT } from '../../constants/styles';
import ToggleButton from '../UI/button/ToggleButton';

const ICON_SIZE = 16;

export default function CardHeader({
  onPress,
  isExpanded,
  title,
  fullName,
  avatar,
  createdAt,
  views,
}) {
  let imageContent = (
    <Image
      style={styles.image}
      source={require('../../assets/images/user.png')}
    />
  );

  if (avatar) {
    imageContent = <Image style={styles.image} source={{ uri: avatar }} />;
  }

  return (
    <View style={[styles.rootContainer, isExpanded && styles.isExpanded]}>
      <View style={styles.leftContainer}>
        <Text style={[styles.mainTitle, styles.text]}>{title}</Text>
        <View style={styles.insideLeftContainer}>
          <View style={styles.mainTitleContainer}>
          {imageContent}
            <Text style={[styles.detail, styles.text]}>{fullName}</Text>
          </View>
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
        <ToggleButton onPress={onPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  isExpanded: {
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
    justifyContent: 'space-between',
  },
  mainTitleContainer: {
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
    marginHorizontal: 3,
    alignSelf: 'center',
    fontSize: 10,
  },
  iconTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
