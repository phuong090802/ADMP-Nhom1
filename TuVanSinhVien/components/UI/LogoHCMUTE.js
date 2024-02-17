import { Image, StyleSheet, Text, View } from 'react-native';

export default function LogoHCMUTE() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../../assets/logo-hcmute.png')} />
      </View>
      <Text style={styles.text}>HCMUTE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    backgroundColor: 'white',
    borderRadius: 100,
  },
  text: {
      color: 'white',
      fontWeight: '900',
      fontSize: 32,
  }
});
