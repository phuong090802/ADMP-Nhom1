import { Image, StyleSheet, Text, View } from 'react-native';

import { Colors, FONT } from '../../constants/styles';
import ToggleButton from '../UI/button/ToggleButton';

export default function CardHeader({ onPress, isExpanded, fullName, avatar }) {
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
    <View style={[styles.root, isExpanded && styles.expanded]}>
      <View style={styles.leftContainer}>
        {imageContent}
        <Text style={styles.text}>{fullName}</Text>
      </View>
      <View style={styles.rightContainer}>
        <ToggleButton onPress={onPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingVertical: 6,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 16,
  },
  leftContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  text: {
    alignSelf: 'center',
    fontFamily: FONT,
    color: Colors.black75,
    fontSize: 16,
    marginHorizontal: 9,
  },
  rightContainer: {
    marginEnd: 6,
  },
  expanded: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});
