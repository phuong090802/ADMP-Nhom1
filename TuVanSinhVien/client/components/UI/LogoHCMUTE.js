import { Image, StyleSheet, Text, View } from 'react-native';

import { LOGO_FONT } from '../../constants/styles';

export default function LogoHCMUTE({ isKeyboardVisible }) {
  return (
    <View style={styles.rootContainer}>
      <Image
        source={require('../../assets/images/logo-hcmute.png')}
        style={[styles.image, isKeyboardVisible && styles.smallImage]}
      />
      <Text style={[styles.text, isKeyboardVisible && styles.smallText]}>
        HCMUTE
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  smallImage: {
    width: 40,
    height: 40,
  },
  text: {
    color: 'white',
    fontFamily: LOGO_FONT,
    fontSize: 31,
    lineHeight: 31,
  },
  smallText: {
    fontSize: 10,
    lineHeight: 10,
  },
});
