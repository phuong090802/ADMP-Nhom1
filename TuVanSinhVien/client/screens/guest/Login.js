import { useNavigation } from '@react-navigation/native';
import { useCallback, useContext, useState } from 'react';
import { Alert, Keyboard, StatusBar, StyleSheet, View } from 'react-native';

import Container from '../../components/UI/Container';
import CustomLinearGradient from '../../components/UI/CustomLinearGradient';
import GoBack from '../../components/UI/GoBack';
import LoadingOverlay from '../../components/UI/LoadingOverlay';
import LogoHCMUTE from '../../components/UI/LogoHCMUTE';
import FlatButton from '../../components/UI/button/FlatButton';
import PrimaryButton from '../../components/UI/button/PrimaryButton';
import LoginForm from '../../components/UI/form/LoginForm';
import { useKeyboard } from '../../hooks/use-keyboard';
import { AuthContext } from '../../store/auth-context';
import { login } from '../../utils/http/auth';

export default function Login() {
  const authCtx = useContext(AuthContext);
  const { isKeyboardVisible } = useKeyboard();

  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const handleValuesChange = useCallback(
    (identified, value) => {
      setValues((prevValues) => ({ ...prevValues, [identified]: value }));
    },
    [setValues]
  );

  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  function handleBtnRegisterOnPress() {
    navigation.navigate('Register');
  }

  function handleBtnForgotPasswordOnPress() {
    navigation.navigate('ForgotPassword');
  }

  async function handlePress() {
    if (!values.username || !values.password) {
      Alert.alert(
        'Đăng nhập thất bại',
        'Số điện thoại hoặc mật khẩu không hợp lệ'
      );
      return;
    }

    if (values.username.trim().length < 10) {
      Alert.alert('Đăng nhập thất bại', 'Số điện thoại không hợp lệ');
      return;
    }

    if (values.password.trim().length < 6) {
      Alert.alert('Đăng nhập thất bại', 'Số điện thoại không hợp lệ');
      return;
    }

    Keyboard.dismiss();

    try {
      setIsLoading(true);
      const data = await login(values);
      if (data.success) {
        authCtx.login(data.user, data.token);
        navigation.navigate('Home');
      } else {
        Alert.alert(
          'Đăng nhập thất bại',
          'Đăng nhập thất bại. Vui lòng thử lại'
        );
      }
    } catch (error) {
      Alert.alert(
        'Đăng nhập thất bại',
        error.message || 'Đăng nhập thất bại. Vui lòng thử lại'
      );
    }
    setIsLoading(false);
  }
  return (
    <>
      <StatusBar style='light' />
      <CustomLinearGradient style={styles.rootContainer}>
        <View
          style={[
            styles.logoContainer,
            isKeyboardVisible && styles.smallLogoContainer,
          ]}
        >
          <LogoHCMUTE isKeyboardVisible={isKeyboardVisible} />
        </View>
        <Container style={styles.containerContainer}>
          <View style={styles.insideContainerContainer}>
            <View style={styles.formContainer}>
              <GoBack>Đăng nhập</GoBack>
              <View style={{ flex: 1 }}>
                <LoginForm
                  values={values}
                  onValuesChange={handleValuesChange}
                />
                <View
                  style={[
                    styles.buttonContainer,
                    isKeyboardVisible && styles.smallButtonContainer,
                  ]}
                >
                  <PrimaryButton onPress={handlePress} disabled={isLoading}>
                    Đăng nhập
                  </PrimaryButton>
                </View>
              </View>
            </View>
            <View style={styles.groupButtonsContainer}>
              <FlatButton onPress={handleBtnRegisterOnPress}>
                Đăng ký tài khoản
              </FlatButton>
              <FlatButton onPress={handleBtnForgotPasswordOnPress}>
                Quên mật khẩu ?
              </FlatButton>
            </View>
          </View>
        </Container>
        {isLoading && <LoadingOverlay message='Đăng nhập...' />}
      </CustomLinearGradient>
    </>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallLogoContainer: {
    flex: 0.7,
  },
  containerContainer: {
    flex: 2.5,
    alignSelf: 'center',
  },
  insideContainerContainer: {
    height: '100%',
    justifyContent: 'space-between',
  },
  groupButtonsContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  buttonContainer: {
    marginVertical: 32,
  },
  smallButtonContainer: {
    marginVertical: 8,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
