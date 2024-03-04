import { StyleSheet, View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';

import { Colors, FONT } from '../../../constants/styles';
import LoginButton from '../button/LoginButton';
import { AuthContext } from '../../../store/auth-context';
import HeaderButton from './HeaderButton';
import FlatButton from '../button/FlatButton';
import { logout } from '../../../utils/http/auth';

export default function Header() {
  const authCtx = useContext(AuthContext);

  const navigation = useNavigation();

  function handleBtnLoginOnPress() {
    navigation.navigate('Login');
  }

  async function handleBtnLogoutOnPress() {
    await logout();
    authCtx.logout();
  }

  function handleBtnMeOnPress() {
    navigation.navigate('Profile');
  }

  let imageContent = (
    <Image
      source={require('../../../assets/images/user.png')}
      style={styles.image}
    />
  );

  if (authCtx.auth.isAuthenticated && authCtx.auth.user.avatar) {
    imageContent = (
      <Image source={{ uri: authCtx.auth.user.avatar }} style={styles.image} />
    );
  }

  let userContent = <Text style={styles.title}>Xin chào bạn!</Text>;

  if (authCtx.auth.isAuthenticated) {
    // textContent = (
    //   <Text style={styles.title}>{authCtx.auth.user.fullName}</Text>
    // );
    userContent = (
      <FlatButton onPress={handleBtnMeOnPress} style={styles.title}>
        {authCtx.auth.user.fullName}
      </FlatButton>
    );
  }

  let buttonContent = (
    <LoginButton onPress={handleBtnLoginOnPress}>Đăng nhập</LoginButton>
  );

  if (authCtx.auth.isAuthenticated) {
    buttonContent = <HeaderButton onPressLogout={handleBtnLogoutOnPress} />;
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>{imageContent}</View>
      {userContent}
      {buttonContent}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
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
    fontFamily: FONT,
    fontSize: 16,
    marginHorizontal: 6,
    color: Colors.black75,
  },
});
