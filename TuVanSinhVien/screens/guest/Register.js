import { Keyboard, StyleSheet, View, Alert } from 'react-native';
import { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import RegisterForm from '../../components/UI/form/RegisterForm';
import Container from '../../components/UI/Container';
import CustomLinearGradient from '../../components/UI/CustomLinearGradient';
import CustomScrollView from '../../components/UI/CustomScrollView';
import GoBack from '../../components/UI/GoBack';
import LogoHCMUTE from '../../components/UI/LogoHCMUTE';
import SafeContainer from '../../components/UI/SafeContainer';
import PrimaryButton from '../../components/UI/button/PrimaryButton';
import FlatButton from '../../components/UI/button/FlatButton';
import { register } from '../../utils/http/auth';
import {
  hasMinLength,
  isEmail,
  isEqualsToOtherValue,
  isPhoneNumber,
} from '../../utils/validation';
import LoadingOverlay from '../../components/UI/LoadingOverlay';

export default function Register() {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    occupation: 'Sinh viên',
  });

  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  function handleBtnLoginOnPress() {
    navigation.navigate('Login');
  }

  function handleBtnForgotPasswordOnPress() {
    navigation.navigate('ForgotPassword');
  }

  const handleValuesChange = useCallback(
    (identified, value) => {
      setValues((prevValues) => ({ ...prevValues, [identified]: value }));
    },
    [setValues]
  );

  async function handlePress() {
    if (
      !values.fullName ||
      !values.email ||
      !values.phoneNumber ||
      !values.password ||
      !values.confirmPassword
    ) {
      Alert.alert(
        'Đăng ký thất bại',
        'Vui lòng kiểm tra lại thông tin đăng ký'
      );
      return;
    }

    if (!isPhoneNumber(values.phoneNumber)) {
      Alert.alert('Đăng ký thất bại', 'Số điện thoại không hợp lệ');
      return;
    }

    if (!isEmail(values.email)) {
      Alert.alert('Đăng ký thất bại', 'Email không đúng định dạng');
      return;
    }

    if (!hasMinLength(values.email, 6)) {
      Alert.alert('Đăng ký thất bại', 'Mật khẩu phải có ít nhất 6 ký tự');
      return;
    }

    if (!isEqualsToOtherValue(values.password, values.confirmPassword)) {
      Alert.alert('Đăng ký thất bại', 'Nhập lại mật khẩu không chính xác');
      return;
    }

    Keyboard.dismiss();
    try {
      setIsLoading(true);
      const data = await register(values);
      if (data.success) {
        Alert.alert('Thông báo', 'Đăng ký tài khoản thành công');
        navigation.navigate('Login');
      } else {
        Alert.alert(
          'Đăng nhập thất bại',
          'Đăng nhập thất bại. Vui lòng thử lại'
        );
      }
    } catch (error) {
      Alert.alert(
        'Đăng ký thất bại',
        error.message || 'Đăng ký thất bại. Vui lòng thử lại'
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
            <GoBack>Đăng ký</GoBack>
            <RegisterForm values={values} onValuesChange={handleValuesChange} />
            <View style={styles.mainButton}>
              <PrimaryButton onPress={handlePress} disabled={isLoading}>
                Đăng ký
              </PrimaryButton>
            </View>
            <View style={styles.groupButtons}>
              <FlatButton onPress={handleBtnLoginOnPress}>Đăng nhập</FlatButton>
              <FlatButton onPress={handleBtnForgotPasswordOnPress}>
                Quên mật khẩu ?
              </FlatButton>
            </View>
          </Container>
          {isLoading && (
            <LoadingOverlay message='Đang đăng ký...' />
          )}
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
    justifyContent: 'flex-end',
  },
  mainButton: {
    marginVertical: 44,
  },
  groupButtons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
