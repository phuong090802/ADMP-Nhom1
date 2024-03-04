import { FontAwesome6 } from '@expo/vector-icons';
import { View, Text, Image, StyleSheet } from 'react-native';

import { Colors, FONT } from '../../constants/styles';
import IconButton from '../UI/button/IconButton';

export default function Header({ fullName, avatar, role, onPress }) {
  let imageContent = (
    <Image
      source={require('../../assets/images/user.png')}
      style={styles.image}
    />
  );

  if (avatar) {
    imageContent = <Image source={{ uri: avatar }} style={styles.image} />;
  }

  return (
    <View style={styles.rootContainer}>
      <IconButton onPress={onPress}>
        <FontAwesome6
          name='chevron-left'
          size={24}
          color='white'
          style={styles.icon}
        />
      </IconButton>
      {imageContent}
      <View style={styles.main}>
        <Text style={[styles.text, styles.fullName]}>{fullName}</Text>
        <Text style={[styles.text, styles.role]}>{role}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 36,
    paddingBottom: 8,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  icon: {
    paddingEnd: 16,
    marginStart: -4,
  },
  main: {
    marginHorizontal: 8,
    flex: 1,
  },
  fullName: {
    fontSize: 16,
  },
  text: {
    color: 'white',
    fontFamily: FONT,
  },
  role: {
    fontSize: 13,
  },
});
