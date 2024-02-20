import { StyleSheet, View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Colors } from '../constants/styles';
import LoginButton from './UI/button/LoginButton';

export default function Header() {
  const navigation = useNavigation();

  function handleOnPress() {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/user.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Xin chào bạn!</Text>
      </View>
      <LoginButton onPress={handleOnPress}>Đăng nhập</LoginButton>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingEnd: 6,
    borderRadius: 16,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 16,
  },
  title: {
    fontFamily: 'Bahnschrift-1',
    fontSize: 16,
    marginHorizontal: 6,
    color: Colors.black75,
  },
});
