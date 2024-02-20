import { Image, StyleSheet, Text, View } from 'react-native';

export default function LogoHCMUTE() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../../assets/images/logo-hcmute.png')} />
      </View>
      <Text style={styles.text}>HCMUTE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    backgroundColor: 'white',
    borderRadius: 100,
    margin: 0,
  },
  text: {
    color: 'white',
    fontFamily: 'Bungee-Regular',
    fontSize: 31,
    lineHeight: 31,
  },
});
