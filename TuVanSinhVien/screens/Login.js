import { Keyboard, StyleSheet, View } from 'react-native';
import { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import LoginForm from '../components/LoginForm';
import Container from '../components/UI/Container';
import CustomLinearGradient from '../components/UI/CustomLinearGradient';
import CustomScrollView from '../components/UI/CustomScrollView';
import GoBack from '../components/UI/GoBack';
import LogoHCMUTE from '../components/UI/LogoHCMUTE';
import SafeContainer from '../components/UI/SafeContainer';
import PrimaryButton from '../components/UI/button/PrimaryButton';
import FlatButton from '../components/UI/button/FlatButton';

export default function Login() {
  const navigation = useNavigation();

  function handleBtnRegisterOnPress() {
    navigation.navigate('Register');
  }

  const [values, setValues] = useState({
    phoneNumber: '',
    password: '',
  });

  const handleChangeValues = useCallback(
    (identified, value) => {
      setValues((prevValues) => ({ ...prevValues, [identified]: value }));
    },
    [setValues]
  );

  function handlePress() {
    Keyboard.dismiss();
    console.log(values);
  }

  return (
    <SafeContainer>
      <CustomScrollView>
        <CustomLinearGradient style={styles.root}>
          <View style={styles.logo}>
            <LogoHCMUTE />
          </View>
          <Container style={styles.container}>
            <View style={styles.insideContainer}>
              <View style={styles.formContainer}>
                <GoBack>Đăng nhập</GoBack>
                <LoginForm
                  values={values}
                  onChangeValues={handleChangeValues}
                />
                <View style={styles.mainButton}>
                  <PrimaryButton onPress={handlePress}>Đăng nhập</PrimaryButton>
                </View>
              </View>
              <View style={styles.groupButtons}>
                <FlatButton onPress={handleBtnRegisterOnPress}>
                  Đăng ký tài khoản
                </FlatButton>
                <FlatButton>Quên mật khẩu ?</FlatButton>
              </View>
            </View>
          </Container>
        </CustomLinearGradient>
      </CustomScrollView>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 2,
    alignSelf: 'center',
  },
  insideContainer: {
    width: '100%',
    height: '100%',
  },
  formContainer: {
    flex: 1,
  },
  mainButton: {
    marginVertical: 44,
  },
  groupButtons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
