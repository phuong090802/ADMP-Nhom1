import { useNavigation } from '@react-navigation/native';
import { useCallback, useState, useContext } from 'react';
import { Keyboard, StyleSheet, View, Alert } from 'react-native';

import Container from '../../components/UI/Container';
import CustomLinearGradient from '../../components/UI/CustomLinearGradient';
import CustomScrollView from '../../components/UI/CustomScrollView';
import GoBack from '../../components/UI/GoBack';
import LogoHCMUTE from '../../components/UI/LogoHCMUTE';
import SafeContainer from '../../components/UI/SafeContainer';
import FlatButton from '../../components/UI/button/FlatButton';
import PrimaryButton from '../../components/UI/button/PrimaryButton';
import LoginForm from '../../components/UI/form/LoginForm';
import { login } from '../../utils/http/auth';
import { AuthContext } from '../../store/auth-context';
import LoadingOverlay from '../../components/UI/LoadingOverlay';

export default function Login() {
  const authCtx = useContext(AuthContext);

  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleValuesChange = useCallback(
    (identified, value) => {
      setValues((prevValues) => ({ ...prevValues, [identified]: value }));
    },
    [setValues]
  );

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
                  onValuesChange={handleValuesChange}
                />
                <View style={styles.mainButton}>
                  <PrimaryButton onPress={handlePress} disabled={isLoading}>
                    Đăng nhập
                  </PrimaryButton>
                </View>
              </View>
              <View style={styles.groupButtons}>
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
